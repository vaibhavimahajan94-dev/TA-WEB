<?php
/**
 * TECHNO AMAZE - CAREER APPLICATION DISPATCHER & EMAIL NOTIFICATION
 * 
 * Handles resume uploads, field validations, persistent application storage,
 * and automated email notifications to info@technoamaze.in.
 */

// Enable strict error handling & set JSON output
error_reporting(E_ALL);
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=UTF-8');

// Include Database Engine
require_once __DIR__ . '/db.php';

// Response helper
function sendResponse($success, $message, $extra = []) {
    $res = array_merge([
        'success' => $success,
        'message' => $message
    ], $extra);
    echo json_encode($res, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Method Not Allowed. POST request required.');
}

// 1. Sanitize & Validate Form Input
$jobId        = isset($_POST['job_id']) ? trim(strip_tags($_POST['job_id'])) : '';
$jobTitle     = isset($_POST['job_title']) ? trim(strip_tags($_POST['job_title'])) : 'Software Professional';
$name         = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email        = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone        = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$location     = isset($_POST['location']) ? trim(strip_tags($_POST['location'])) : 'Not specified';
$experience   = isset($_POST['experience']) ? trim(strip_tags($_POST['experience'])) : 'Not specified';
$linkedin     = isset($_POST['linkedin']) ? filter_var(trim($_POST['linkedin']), FILTER_SANITIZE_URL) : '';
$portfolio    = isset($_POST['portfolio']) ? filter_var(trim($_POST['portfolio']), FILTER_SANITIZE_URL) : '';
$coverLetter  = isset($_POST['cover_letter']) ? trim(strip_tags($_POST['cover_letter'])) : '';
$consent      = isset($_POST['consent']);

// Honeypot spam check
if (!empty($_POST['_honey'])) {
    sendResponse(false, 'Spam submission detected.');
}

// Required fields check
if (empty($name)) {
    sendResponse(false, 'Candidate full name is required.');
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(false, 'A valid email address is required.');
}
if (empty($phone)) {
    sendResponse(false, 'Phone number is required.');
}
if (empty($experience)) {
    sendResponse(false, 'Total experience is required.');
}
if (!$consent) {
    sendResponse(false, 'Please accept the consent terms to proceed.');
}

// 2. Validate & Secure Resume Upload
if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
    sendResponse(false, 'Please upload your resume document.');
}

$file = $_FILES['resume'];

// Maximum size: 5MB
$maxSize = 5 * 1024 * 1024;
if ($file['size'] > $maxSize) {
    sendResponse(false, 'Resume file size exceeds the maximum limit of 5MB.');
}

// Allowed extensions & MIME types
$allowedExtensions = ['pdf', 'doc', 'docx'];
$allowedMimes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/octet-stream' // Some browsers upload word docs as octet-stream
];

$fileExt = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
if (!in_array($fileExt, $allowedExtensions)) {
    sendResponse(false, 'Invalid file format. Only PDF, DOC, and DOCX files are permitted.');
}

// Check real MIME type using finfo if available
if (function_exists('finfo_open')) {
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $realMime = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    if (!in_array($realMime, $allowedMimes) && $fileExt !== 'docx') {
        sendResponse(false, 'File validation failed. Invalid document type.');
    }
}

// Upload directory path
$uploadDir = dirname(__DIR__) . '/uploads/resumes/';
if (!is_dir($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true)) {
        sendResponse(false, 'Server upload directory could not be created.');
    }
}

// Prevent script execution in uploads directory (.htaccess)
$htaccessPath = $uploadDir . '.htaccess';
if (!file_exists($htaccessPath)) {
    file_put_contents($htaccessPath, "# Disable script execution\n<FilesMatch \"\.(php|php5|phtml|pl|py|cgi)$\">\nDeny from all\n</FilesMatch>\nOptions -Indexes -ExecCGI\n");
}

// Generate sanitized unique filename
$safeBaseName = preg_replace('/[^a-zA-Z0-9_\-]/', '_', pathinfo($file['name'], PATHINFO_FILENAME));
$uniqueFileName = 'resume_' . substr(preg_replace('/[^a-zA-Z0-9]/', '', $jobId), 0, 15) . '_' . date('Ymd_His') . '_' . bin2hex(random_bytes(4)) . '.' . $fileExt;
$destinationPath = $uploadDir . $uniqueFileName;

if (!move_uploaded_file($file['tmp_name'], $destinationPath)) {
    sendResponse(false, 'Failed to save uploaded resume file.');
}

// Reference ID & Timestamp
$refId = 'TA-APP-' . date('Ymd') . '-' . strtoupper(bin2hex(random_bytes(3)));
$applicationDate = date('Y-m-d H:i:s T');
$publicResumeUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . ($_SERVER['HTTP_HOST'] ?? 'technoamaze.in') . "/uploads/resumes/" . $uniqueFileName;

// 3. Persist Application Record (JSON Database for Future Admin Dashboard)
$dataPath = dirname(__DIR__) . '/data/applications.json';
$appRecord = [
    'refId'           => $refId,
    'jobId'           => $jobId,
    'jobTitle'        => $jobTitle,
    'candidateName'   => $name,
    'email'           => $email,
    'phone'           => $phone,
    'location'        => $location,
    'experience'      => $experience,
    'linkedin'        => $linkedin,
    'portfolio'       => $portfolio,
    'coverLetter'     => $coverLetter,
    'resumeFile'      => $uniqueFileName,
    'resumeOriginal'  => $file['name'],
    'resumeUrl'       => $publicResumeUrl,
    'status'          => 'New',
    'submittedAt'     => $applicationDate
];

// Save to Database (MySQL / SQLite) AND update data/applications.json simultaneously
TechnoDatabase::saveApplication($appRecord);

// 4. Construct & Dispatch Email to info@technoamaze.in
$to = 'info@technoamaze.in';
$subject = "New Job Application – {$jobTitle} – {$name}";

// Plain text body matching requested specification
$plainBody = "New Career Application\n\n" .
             "Position Applied For: {$jobTitle}\n" .
             "Candidate Name: {$name}\n" .
             "Email: {$email}\n" .
             "Phone: {$phone}\n" .
             "Location: {$location}\n" .
             "Experience: {$experience}\n" .
             "LinkedIn: " . (!empty($linkedin) ? $linkedin : 'N/A') . "\n" .
             "Portfolio: " . (!empty($portfolio) ? $portfolio : 'N/A') . "\n\n" .
             "Cover Letter:\n" . (!empty($coverLetter) ? $coverLetter : 'None provided') . "\n\n" .
             "Resume:\n" . $publicResumeUrl . "\n\n" .
             "Application Date:\n" . $applicationDate . "\n" .
             "Reference ID: {$refId}\n";

// HTML Body
$htmlBody = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; background: #f4f5f9; margin: 0; padding: 20px; color: #151726; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e7e8ec; overflow: hidden; }
    .header { background: linear-gradient(135deg, #C8006E 0%, #9c0857 100%); color: #ffffff; padding: 26px 30px; }
    .header h2 { margin: 0 0 6px; font-size: 22px; }
    .header p { margin: 0; opacity: 0.9; font-size: 14px; }
    .body { padding: 30px; }
    .field-row { display: flex; padding: 10px 0; border-bottom: 1px solid #f0f1f5; font-size: 14px; }
    .field-label { width: 170px; font-weight: 600; color: #6c7180; }
    .field-val { flex: 1; color: #151726; font-weight: 500; }
    .cover-box { margin-top: 18px; padding: 16px; background: #f8f9fc; border-radius: 8px; border-left: 4px solid #C8006E; font-size: 13.5px; line-height: 1.6; white-space: pre-wrap; }
    .btn-resume { display: inline-block; margin-top: 18px; padding: 12px 24px; background: #C8006E; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px; }
    .footer { padding: 18px 30px; background: #f8f9fc; font-size: 12px; color: #8a8f9d; text-align: center; border-top: 1px solid #e7e8ec; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>New Career Application</h2>
      <p>Techno Amaze Talent Portal &bull; Ref: ' . htmlspecialchars($refId) . '</p>
    </div>
    <div class="body">
      <div class="field-row"><div class="field-label">Position Applied For:</div><div class="field-val"><strong>' . htmlspecialchars($jobTitle) . '</strong></div></div>
      <div class="field-row"><div class="field-label">Candidate Name:</div><div class="field-val">' . htmlspecialchars($name) . '</div></div>
      <div class="field-row"><div class="field-label">Email:</div><div class="field-val"><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></div></div>
      <div class="field-row"><div class="field-label">Phone:</div><div class="field-val"><a href="tel:' . htmlspecialchars($phone) . '">' . htmlspecialchars($phone) . '</a></div></div>
      <div class="field-row"><div class="field-label">Current Location:</div><div class="field-val">' . htmlspecialchars($location) . '</div></div>
      <div class="field-row"><div class="field-label">Experience:</div><div class="field-val">' . htmlspecialchars($experience) . '</div></div>
      <div class="field-row"><div class="field-label">LinkedIn:</div><div class="field-val">' . (!empty($linkedin) ? '<a href="' . htmlspecialchars($linkedin) . '" target="_blank">' . htmlspecialchars($linkedin) . '</a>' : 'N/A') . '</div></div>
      <div class="field-row"><div class="field-label">Portfolio:</div><div class="field-val">' . (!empty($portfolio) ? '<a href="' . htmlspecialchars($portfolio) . '" target="_blank">' . htmlspecialchars($portfolio) . '</a>' : 'N/A') . '</div></div>
      <div class="field-row"><div class="field-label">Application Date:</div><div class="field-val">' . htmlspecialchars($applicationDate) . '</div></div>

      <div style="margin-top:22px;">
        <div style="font-weight:700;font-size:14px;color:#151726;margin-bottom:8px;">Cover Letter / Candidate Note:</div>
        <div class="cover-box">' . (!empty($coverLetter) ? htmlspecialchars($coverLetter) : 'No cover letter provided.') . '</div>
      </div>

      <div style="margin-top:24px;text-align:center;">
        <a href="' . htmlspecialchars($publicResumeUrl) . '" class="btn-resume" target="_blank">&darr; Download Candidate Resume (' . htmlspecialchars($file['name']) . ')</a>
      </div>
    </div>
    <div class="footer">
      This notification was automatically dispatched from the Techno Amaze Careers Portal.
    </div>
  </div>
</body>
</html>';

// Multi-part MIME Email Construction (supports file attachment directly)
$boundary = "==Multipart_Boundary_x" . md5(time()) . "x";

$headers  = "From: Techno Amaze Careers <no-reply@technoamaze.in>\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Multipart message body
$message  = "--{$boundary}\r\n";
$message .= "Content-Type: text/html; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$message .= $htmlBody . "\r\n\r\n";

// Attach the resume file if readable
if (file_exists($destinationPath) && is_readable($destinationPath)) {
    $attachmentContent = file_get_contents($destinationPath);
    if ($attachmentContent !== false) {
        $encodedAttachment = chunk_split(base64_encode($attachmentContent));
        $message .= "--{$boundary}\r\n";
        $message .= "Content-Type: application/octet-stream; name=\"" . basename($file['name']) . "\"\r\n";
        $message .= "Content-Description: " . basename($file['name']) . "\r\n";
        $message .= "Content-Disposition: attachment; filename=\"" . basename($file['name']) . "\"; size=" . filesize($destinationPath) . ";\r\n";
        $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $message .= $encodedAttachment . "\r\n\r\n";
    }
}
$message .= "--{$boundary}--";

// Dispatch email
$mailSent = @mail($to, $subject, $message, $headers);

// If mail() failed on environments without sendmail/SMTP configured:
if (!$mailSent) {
    // Check if running on local development without SMTP
    $isLocalhost = in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1', '::1']) || strpos($_SERVER['HTTP_HOST'] ?? '', 'localhost') !== false;
    
    if ($isLocalhost) {
        // On localhost, note that record is saved and allow developer preview
        sendResponse(true, 'Application recorded locally (Email delivery skipped on localhost without SMTP).', [
            'refId'         => $refId,
            'jobTitle'      => $jobTitle,
            'candidateName' => $name,
            'note'          => 'Localhost mode: application saved to data/applications.json'
        ]);
    } else {
        // On production server: return true error as requested
        sendResponse(false, 'We could not dispatch the notification email to our HR department at this time. Your application was safely logged (Ref: ' . $refId . '), but please also contact info@technoamaze.in directly if you do not hear back.');
    }
}

// 5. Successful Response
sendResponse(true, 'Application Submitted Successfully', [
    'refId'         => $refId,
    'jobTitle'      => $jobTitle,
    'candidateName' => $name
]);
