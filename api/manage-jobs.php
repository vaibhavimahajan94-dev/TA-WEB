<?php
/**
 * TECHNO AMAZE - JOBS MANAGEMENT API
 * 
 * Secure CRUD operations for open positions and career postings.
 * Connects directly to relational Database (MySQL / SQLite) with automated JSON backup.
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=UTF-8');

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

/**
 * Convert string or array into clean string array
 */
function normalizeListInput($val) {
    if (is_array($val)) {
        return array_values(array_filter(array_map('trim', $val), 'strlen'));
    }
    if (is_string($val)) {
        $lines = preg_split('/\r\n|\r|\n/', $val);
        $clean = [];
        foreach ($lines as $line) {
            $t = trim(preg_replace('/^[-*•\d+.]\s*/', '', trim($line)));
            if (!empty($t)) {
                $clean[] = $t;
            }
        }
        return $clean;
    }
    return [];
}

/**
 * Generate URL-friendly slug
 */
function slugify($text) {
    $text = preg_replace('~[^\pL\d]+~u', '-', $text);
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
    $text = preg_replace('~[^-\w]+~', '', $text);
    $text = trim($text, '-');
    $text = preg_replace('~-+~', '-', $text);
    $text = strtolower($text);
    return empty($text) ? 'job-' . time() : $text;
}

/**
 * Count applications per job
 */
function getApplicationCounts() {
    $apps = TechnoDatabase::getAllApplications();
    $counts = [];
    foreach ($apps as $a) {
        $jid = $a['jobId'] ?? '';
        if ($jid) {
            $counts[$jid] = ($counts[$jid] ?? 0) + 1;
        }
    }
    return $counts;
}

// -----------------------------------------------------------------------------
// ROUTE HANDLER
// -----------------------------------------------------------------------------

switch ($action) {
    case 'list':
        $jobs = TechnoDatabase::getAllJobs();
        $counts = getApplicationCounts();

        $openCount = 0;
        $closedCount = 0;

        foreach ($jobs as &$job) {
            $jid = $job['id'] ?? '';
            $job['applicantsCount'] = $counts[$jid] ?? 0;
            if (strtolower($job['status'] ?? '') === 'open') {
                $openCount++;
            } else {
                $closedCount++;
            }
        }
        unset($job);

        apiResponse(true, 'Jobs loaded successfully.', [
            'jobs' => $jobs,
            'database' => [
                'driver' => TechnoDatabase::getDriverName(),
                'status' => 'connected'
            ],
            'stats' => [
                'total' => count($jobs),
                'open' => $openCount,
                'closed' => $closedCount,
                'totalApplications' => array_sum($counts)
            ]
        ]);
        break;

    case 'get':
        $jobId = trim($inputData['id'] ?? ($_GET['id'] ?? ''));
        if (empty($jobId)) {
            apiResponse(false, 'Job ID is required.');
        }

        $jobs = TechnoDatabase::getAllJobs();
        foreach ($jobs as $job) {
            if ($job['id'] === $jobId) {
                apiResponse(true, 'Job found.', ['job' => $job]);
            }
        }
        apiResponse(false, 'Job position not found.');
        break;

    case 'create':
        requireAdminAuth();

        $title = trim($inputData['title'] ?? '');
        if (empty($title)) {
            apiResponse(false, 'Job title is required.');
        }

        $jobs = TechnoDatabase::getAllJobs();

        // Generate unique slug ID
        $baseSlug = slugify($title);
        $slug = $baseSlug;
        $counter = 1;
        $existingIds = array_column($jobs, 'id');
        while (in_array($slug, $existingIds)) {
            $slug = $baseSlug . '-' . (++$counter);
        }

        $newJob = [
            'id'               => $slug,
            'title'            => $title,
            'department'       => trim($inputData['department'] ?? 'Engineering') ?: 'Engineering',
            'location'         => trim($inputData['location'] ?? 'Remote / Pune') ?: 'Remote / Pune',
            'employmentType'   => trim($inputData['employmentType'] ?? 'Full Time') ?: 'Full Time',
            'experience'       => trim($inputData['experience'] ?? '1–2 Years') ?: '1–2 Years',
            'salary'           => trim($inputData['salary'] ?? ''),
            'description'      => trim($inputData['description'] ?? ''),
            'responsibilities' => normalizeListInput($inputData['responsibilities'] ?? []),
            'requirements'     => normalizeListInput($inputData['requirements'] ?? []),
            'preferred'        => normalizeListInput($inputData['preferred'] ?? []),
            'benefits'         => normalizeListInput($inputData['benefits'] ?? []),
            'deadline'         => trim($inputData['deadline'] ?? ''),
            'status'           => strtolower(trim($inputData['status'] ?? 'open')) === 'closed' ? 'closed' : 'open',
            'postedDate'       => date('Y-m-d')
        ];

        // Save into Database and synchronize JSON backup file
        if (TechnoDatabase::saveJob($newJob)) {
            apiResponse(true, 'Job posted and saved to database successfully!', [
                'job' => $newJob,
                'driver' => TechnoDatabase::getDriverName()
            ]);
        } else {
            apiResponse(false, 'Failed to save job to database.');
        }
        break;

    case 'update':
        requireAdminAuth();

        $jobId = trim($inputData['id'] ?? '');
        if (empty($jobId)) {
            apiResponse(false, 'Job ID is required for update.');
        }

        $title = trim($inputData['title'] ?? '');
        if (empty($title)) {
            apiResponse(false, 'Job title is required.');
        }

        $jobs = TechnoDatabase::getAllJobs();
        $existing = null;
        foreach ($jobs as $j) {
            if ($j['id'] === $jobId) {
                $existing = $j;
                break;
            }
        }

        if (!$existing) {
            apiResponse(false, 'Job position not found.');
        }

        $updatedJob = [
            'id'               => $jobId,
            'title'            => $title,
            'department'       => trim($inputData['department'] ?? $existing['department']) ?: 'Engineering',
            'location'         => trim($inputData['location'] ?? $existing['location']) ?: 'Remote / Pune',
            'employmentType'   => trim($inputData['employmentType'] ?? $existing['employmentType']) ?: 'Full Time',
            'experience'       => trim($inputData['experience'] ?? $existing['experience']) ?: '1–2 Years',
            'salary'           => trim($inputData['salary'] ?? $existing['salary']),
            'description'      => trim($inputData['description'] ?? $existing['description']),
            'responsibilities' => normalizeListInput($inputData['responsibilities'] ?? $existing['responsibilities']),
            'requirements'     => normalizeListInput($inputData['requirements'] ?? $existing['requirements']),
            'preferred'        => normalizeListInput($inputData['preferred'] ?? $existing['preferred']),
            'benefits'         => normalizeListInput($inputData['benefits'] ?? $existing['benefits']),
            'deadline'         => trim($inputData['deadline'] ?? $existing['deadline']),
            'status'           => strtolower(trim($inputData['status'] ?? $existing['status'])) === 'closed' ? 'closed' : 'open',
            'postedDate'       => $existing['postedDate'] ?? date('Y-m-d')
        ];

        if (TechnoDatabase::saveJob($updatedJob)) {
            apiResponse(true, 'Job details updated in database and synchronized successfully!', [
                'job' => $updatedJob,
                'driver' => TechnoDatabase::getDriverName()
            ]);
        } else {
            apiResponse(false, 'Failed to update job in database.');
        }
        break;

    case 'toggle_status':
        requireAdminAuth();

        $jobId = trim($inputData['id'] ?? '');
        if (empty($jobId)) {
            apiResponse(false, 'Job ID is required.');
        }

        $newStatus = TechnoDatabase::toggleJobStatus($jobId);
        apiResponse(true, "Job status changed to " . strtoupper($newStatus) . " in database.", [
            'newStatus' => $newStatus,
            'driver' => TechnoDatabase::getDriverName()
        ]);
        break;

    case 'delete':
        requireAdminAuth();

        $jobId = trim($inputData['id'] ?? '');
        if (empty($jobId)) {
            apiResponse(false, 'Job ID is required for deletion.');
        }

        if (TechnoDatabase::deleteJob($jobId)) {
            apiResponse(true, 'Job position removed permanently from database and backup.', [
                'driver' => TechnoDatabase::getDriverName()
            ]);
        } else {
            apiResponse(false, 'Failed to delete job from database.');
        }
        break;

    default:
        apiResponse(false, 'Unknown jobs management action.');
        break;
}
