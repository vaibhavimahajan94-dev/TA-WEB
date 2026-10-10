<?php
/**
 * TECHNO AMAZE - APPLICATIONS MANAGEMENT & DATABASE BACKUP API
 * 
 * Review, filter, update status, and manage candidate submissions.
 * Supports 1-click database backup downloads (.sql / .json).
 * Requires admin authentication.
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=UTF-8');

// Require authentication for all application management actions
requireAdminAuth();

// Parse input body
$rawInput = file_get_contents('php://input');
$inputData = [];
if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (is_array($decoded)) {
        $inputData = $decoded;
    }
}
$inputData = array_merge($_POST, $inputData);

$action = $inputData['action'] ?? ($_GET['action'] ?? 'list');

switch ($action) {
    case 'list':
        $apps = TechnoDatabase::getAllApplications();

        $statusFilter = trim($inputData['status'] ?? ($_GET['status'] ?? 'all'));
        $jobFilter    = trim($inputData['job_id'] ?? ($_GET['job_id'] ?? 'all'));
        $searchQuery  = strtolower(trim($inputData['search'] ?? ($_GET['search'] ?? '')));

        // Calculate counts
        $stats = [
            'total'       => count($apps),
            'new'         => 0,
            'reviewing'   => 0,
            'shortlisted' => 0,
            'interview'   => 0,
            'selected'    => 0,
            'rejected'    => 0
        ];

        foreach ($apps as $a) {
            $st = strtolower($a['status'] ?? 'new');
            if (isset($stats[$st])) {
                $stats[$st]++;
            } else {
                $stats['new']++;
            }
        }

        // Apply filters
        $filtered = array_values(array_filter($apps, function ($a) use ($statusFilter, $jobFilter, $searchQuery) {
            if ($statusFilter !== 'all' && strcasecmp($a['status'] ?? '', $statusFilter) !== 0) {
                return false;
            }
            if ($jobFilter !== 'all' && ($a['jobId'] ?? '') !== $jobFilter) {
                return false;
            }
            if (!empty($searchQuery)) {
                $name = strtolower($a['candidateName'] ?? '');
                $email = strtolower($a['email'] ?? '');
                $phone = strtolower($a['phone'] ?? '');
                $role = strtolower($a['jobTitle'] ?? '');
                $ref = strtolower($a['refId'] ?? '');
                $match = (strpos($name, $searchQuery) !== false) ||
                         (strpos($email, $searchQuery) !== false) ||
                         (strpos($phone, $searchQuery) !== false) ||
                         (strpos($role, $searchQuery) !== false) ||
                         (strpos($ref, $searchQuery) !== false);
                if (!$match) return false;
            }
            return true;
        }));

        apiResponse(true, 'Applications loaded from database.', [
            'applications' => $filtered,
            'stats' => $stats,
            'database' => [
                'driver' => TechnoDatabase::getDriverName(),
                'status' => 'connected'
            ]
        ]);
        break;

    case 'update_status':
        $refId = trim($inputData['refId'] ?? ($inputData['ref_id'] ?? ''));
        $newStatus = trim($inputData['status'] ?? '');

        if (empty($refId) || empty($newStatus)) {
            apiResponse(false, 'Application reference ID and new status are required.');
        }

        $validStatuses = ['New', 'Reviewing', 'Shortlisted', 'Interview', 'Selected', 'Rejected'];
        $matchedStatus = null;
        foreach ($validStatuses as $vs) {
            if (strcasecmp($vs, $newStatus) === 0) {
                $matchedStatus = $vs;
                break;
            }
        }

        if (!$matchedStatus) {
            apiResponse(false, 'Invalid application status provided.');
        }

        if (TechnoDatabase::updateApplicationStatus($refId, $matchedStatus)) {
            apiResponse(true, "Application status updated to {$matchedStatus} in database.", [
                'refId' => $refId,
                'status' => $matchedStatus,
                'driver' => TechnoDatabase::getDriverName()
            ]);
        } else {
            apiResponse(false, 'Failed to update application status in database.');
        }
        break;

    case 'download_sql_backup':
        // Generate and stream .sql backup dump file
        $sqlDump = TechnoDatabase::exportSqlDump();
        $filename = 'technoamaze_backup_' . date('Ymd_His') . '.sql';

        header('Content-Type: application/sql; charset=UTF-8');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        header('Content-Length: ' . strlen($sqlDump));
        echo $sqlDump;
        exit;

    case 'download_json_backup':
        // Generate and stream .json backup
        $jobs = TechnoDatabase::getAllJobs();
        $apps = TechnoDatabase::getAllApplications();
        $jsonPayload = json_encode([
            'backupGeneratedAt' => date('Y-m-d H:i:s T'),
            'totalJobs'         => count($jobs),
            'totalApplications' => count($apps),
            'jobs'              => $jobs,
            'applications'      => $apps
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

        $filename = 'technoamaze_backup_' . date('Ymd_His') . '.json';
        header('Content-Type: application/json; charset=UTF-8');
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        header('Content-Length: ' . strlen($jsonPayload));
        echo $jsonPayload;
        exit;

    default:
        apiResponse(false, 'Unknown applications management action.');
        break;
}
