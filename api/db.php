<?php
/**
 * TECHNO AMAZE - DATABASE ABSTRACTION & BACKUP ENGINE
 * 
 * Provides unified PDO connection supporting:
 * 1. MySQL / MariaDB (Primary production relational database)
 * 2. SQLite (Automated zero-config file fallback)
 * 3. Automated Dual-Sync: Keeps both database AND JSON files in sync as real-time backups.
 * 4. Automatic Table Migration: Imports existing jobs & applications into SQL on first run.
 */

require_once __DIR__ . '/config.php';

class TechnoDatabase {
    private static $pdo = null;
    private static $driverUsed = null;
    private static $initialized = false;

    /**
     * Get or create PDO database connection
     */
    public static function getConnection() {
        if (!defined('DB_ENABLED') || !DB_ENABLED) {
            return null;
        }

        if (self::$pdo !== null) {
            return self::$pdo;
        }

        // 1. Try MySQL Connection if requested
        if (defined('DB_DRIVER') && DB_DRIVER === 'mysql') {
            try {
                $dsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=utf8mb4";
                $options = [
                    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES   => false,
                    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"
                ];

                self::$pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
                self::$driverUsed = 'mysql';
            } catch (PDOException $e) {
                // If database doesn't exist on MySQL, try creating it
                if (strpos($e->getMessage(), 'Unknown database') !== false || $e->getCode() == 1049) {
                    try {
                        $rootDsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";charset=utf8mb4";
                        $rootPdo = new PDO($rootDsn, DB_USER, DB_PASS);
                        $rootPdo->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
                        self::$pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
                        self::$driverUsed = 'mysql';
                    } catch (Exception $ex) {
                        self::$pdo = null;
                    }
                }
            }
        }

        // 2. If MySQL failed or SQLite selected, fallback to SQLite
        if (self::$pdo === null && class_exists('PDO')) {
            try {
                if (!is_dir(DATA_DIR)) {
                    @mkdir(DATA_DIR, 0755, true);
                }
                $sqlitePath = defined('DB_SQLITE_FILE') ? DB_SQLITE_FILE : (DATA_DIR . 'database.sqlite');
                self::$pdo = new PDO("sqlite:" . $sqlitePath);
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                self::$driverUsed = 'sqlite';
            } catch (Exception $e) {
                self::$pdo = null;
            }
        }

        // 3. Auto-initialize tables and seed data if connected
        if (self::$pdo !== null && !self::$initialized) {
            self::ensureTables();
            self::$initialized = true;
        }

        return self::$pdo;
    }

    /**
     * Get active driver name ('mysql', 'sqlite', or 'none')
     */
    public static function getDriverName() {
        if (self::$pdo === null) {
            self::getConnection();
        }
        return self::$driverUsed ?: 'json_storage';
    }

    /**
     * Create tables if they do not exist, and auto-migrate existing JSON records
     */
    public static function ensureTables() {
        if (self::$pdo === null) return;

        try {
            if (self::$driverUsed === 'mysql') {
                self::$pdo->exec("
                    CREATE TABLE IF NOT EXISTS `ta_jobs` (
                      `id` VARCHAR(100) NOT NULL PRIMARY KEY,
                      `title` VARCHAR(255) NOT NULL,
                      `department` VARCHAR(100) NOT NULL DEFAULT 'Engineering',
                      `location` VARCHAR(150) NOT NULL DEFAULT 'Remote / Pune',
                      `employment_type` VARCHAR(50) NOT NULL DEFAULT 'Full Time',
                      `experience` VARCHAR(50) NOT NULL DEFAULT '1–2 Years',
                      `salary` VARCHAR(100) DEFAULT NULL,
                      `description` TEXT NOT NULL,
                      `responsibilities` TEXT DEFAULT NULL,
                      `requirements` TEXT DEFAULT NULL,
                      `preferred` TEXT DEFAULT NULL,
                      `benefits` TEXT DEFAULT NULL,
                      `deadline` VARCHAR(50) DEFAULT NULL,
                      `status` VARCHAR(20) NOT NULL DEFAULT 'open',
                      `posted_date` VARCHAR(50) DEFAULT NULL,
                      `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                      INDEX `idx_jobs_status` (`status`)
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

                    CREATE TABLE IF NOT EXISTS `ta_applications` (
                      `id` INT AUTO_INCREMENT PRIMARY KEY,
                      `ref_id` VARCHAR(50) NOT NULL UNIQUE,
                      `job_id` VARCHAR(100) NOT NULL,
                      `job_title` VARCHAR(255) NOT NULL,
                      `candidate_name` VARCHAR(150) NOT NULL,
                      `email` VARCHAR(150) NOT NULL,
                      `phone` VARCHAR(50) NOT NULL,
                      `location` VARCHAR(100) DEFAULT NULL,
                      `experience` VARCHAR(50) DEFAULT NULL,
                      `linkedin` VARCHAR(255) DEFAULT NULL,
                      `portfolio` VARCHAR(255) DEFAULT NULL,
                      `cover_letter` TEXT DEFAULT NULL,
                      `resume_file` VARCHAR(255) NOT NULL,
                      `resume_original` VARCHAR(255) DEFAULT NULL,
                      `resume_url` VARCHAR(500) DEFAULT NULL,
                      `status` VARCHAR(50) NOT NULL DEFAULT 'New',
                      `submitted_at` VARCHAR(100) DEFAULT NULL,
                      `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      INDEX `idx_apps_job` (`job_id`),
                      INDEX `idx_apps_status` (`status`)
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
                ");
            } else {
                // SQLite syntax
                self::$pdo->exec("
                    CREATE TABLE IF NOT EXISTS `ta_jobs` (
                      `id` TEXT PRIMARY KEY,
                      `title` TEXT NOT NULL,
                      `department` TEXT NOT NULL DEFAULT 'Engineering',
                      `location` TEXT NOT NULL DEFAULT 'Remote / Pune',
                      `employment_type` TEXT NOT NULL DEFAULT 'Full Time',
                      `experience` TEXT NOT NULL DEFAULT '1–2 Years',
                      `salary` TEXT DEFAULT '',
                      `description` TEXT NOT NULL,
                      `responsibilities` TEXT DEFAULT '',
                      `requirements` TEXT DEFAULT '',
                      `preferred` TEXT DEFAULT '',
                      `benefits` TEXT DEFAULT '',
                      `deadline` TEXT DEFAULT '',
                      `status` TEXT NOT NULL DEFAULT 'open',
                      `posted_date` TEXT DEFAULT '',
                      `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
                      `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP
                    );

                    CREATE TABLE IF NOT EXISTS `ta_applications` (
                      `id` INTEGER PRIMARY KEY AUTOINCREMENT,
                      `ref_id` TEXT NOT NULL UNIQUE,
                      `job_id` TEXT NOT NULL,
                      `job_title` TEXT NOT NULL,
                      `candidate_name` TEXT NOT NULL,
                      `email` TEXT NOT NULL,
                      `phone` TEXT NOT NULL,
                      `location` TEXT DEFAULT '',
                      `experience` TEXT DEFAULT '',
                      `linkedin` TEXT DEFAULT '',
                      `portfolio` TEXT DEFAULT '',
                      `cover_letter` TEXT DEFAULT '',
                      `resume_file` TEXT NOT NULL,
                      `resume_original` TEXT DEFAULT '',
                      `resume_url` TEXT DEFAULT '',
                      `status` TEXT NOT NULL DEFAULT 'New',
                      `submitted_at` TEXT DEFAULT '',
                      `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
                    );
                ");
            }

            // Auto-seed existing jobs from jobs.json into DB if DB table is currently empty
            $checkStmt = self::$pdo->query("SELECT COUNT(*) AS total FROM ta_jobs");
            $jobCount = (int)($checkStmt->fetchColumn() ?: 0);
            if ($jobCount === 0 && file_exists(JOBS_FILE)) {
                $raw = file_get_contents(JOBS_FILE);
                $data = json_decode($raw, true);
                if (isset($data['jobs']) && is_array($data['jobs'])) {
                    foreach ($data['jobs'] as $j) {
                        self::saveJobToDatabase($j, false); // save without re-triggering file write
                    }
                }
            }

            // Auto-seed existing applications if DB table is empty
            $checkAppStmt = self::$pdo->query("SELECT COUNT(*) AS total FROM ta_applications");
            $appCount = (int)($checkAppStmt->fetchColumn() ?: 0);
            if ($appCount === 0 && file_exists(APPLICATIONS_FILE)) {
                $raw = file_get_contents(APPLICATIONS_FILE);
                $apps = json_decode($raw, true);
                if (is_array($apps)) {
                    foreach ($apps as $a) {
                        self::saveApplicationToDatabase($a, false);
                    }
                }
            }
        } catch (Exception $e) {
            // Fail safely without disrupting frontend
        }
    }

    /**
     * Save Job into Database and synchronize JSON file
     */
    public static function saveJob($jobData) {
        // 1. Save to Database
        self::saveJobToDatabase($jobData, true);

        // 2. Synchronize data/jobs.json
        self::syncJobsJson();

        // 3. Create auto-backup snapshot
        self::createBackupSnapshot('jobs');

        return true;
    }

    private static function saveJobToDatabase($job, $updateJson = true) {
        $pdo = self::getConnection();
        if (!$pdo) return false;

        try {
            $stmt = $pdo->prepare("
                INSERT INTO ta_jobs (
                    id, title, department, location, employment_type, experience,
                    salary, description, responsibilities, requirements, preferred,
                    benefits, deadline, status, posted_date
                ) VALUES (
                    :id, :title, :department, :location, :employment_type, :experience,
                    :salary, :description, :responsibilities, :requirements, :preferred,
                    :benefits, :deadline, :status, :posted_date
                )
                ON DUPLICATE KEY UPDATE
                    title = VALUES(title),
                    department = VALUES(department),
                    location = VALUES(location),
                    employment_type = VALUES(employment_type),
                    experience = VALUES(experience),
                    salary = VALUES(salary),
                    description = VALUES(description),
                    responsibilities = VALUES(responsibilities),
                    requirements = VALUES(requirements),
                    preferred = VALUES(preferred),
                    benefits = VALUES(benefits),
                    deadline = VALUES(deadline),
                    status = VALUES(status),
                    posted_date = VALUES(posted_date)
            ");

            // For SQLite syntax adjustment
            if (self::$driverUsed === 'sqlite') {
                $stmt = $pdo->prepare("
                    INSERT INTO ta_jobs (
                        id, title, department, location, employment_type, experience,
                        salary, description, responsibilities, requirements, preferred,
                        benefits, deadline, status, posted_date
                    ) VALUES (
                        :id, :title, :department, :location, :employment_type, :experience,
                        :salary, :description, :responsibilities, :requirements, :preferred,
                        :benefits, :deadline, :status, :posted_date
                    )
                    ON CONFLICT(id) DO UPDATE SET
                        title = excluded.title,
                        department = excluded.department,
                        location = excluded.location,
                        employment_type = excluded.employment_type,
                        experience = excluded.experience,
                        salary = excluded.salary,
                        description = excluded.description,
                        responsibilities = excluded.responsibilities,
                        requirements = excluded.requirements,
                        preferred = excluded.preferred,
                        benefits = excluded.benefits,
                        deadline = excluded.deadline,
                        status = excluded.status,
                        posted_date = excluded.posted_date
                ");
            }

            $stmt->execute([
                ':id'               => $job['id'],
                ':title'            => $job['title'],
                ':department'       => $job['department'] ?? 'Engineering',
                ':location'         => $job['location'] ?? 'Remote / Pune',
                ':employment_type'   => $job['employmentType'] ?? 'Full Time',
                ':experience'       => $job['experience'] ?? '1–2 Years',
                ':salary'           => $job['salary'] ?? '',
                ':description'      => $job['description'] ?? '',
                ':responsibilities' => is_array($job['responsibilities'] ?? null) ? json_encode($job['responsibilities'], JSON_UNESCAPED_UNICODE) : ($job['responsibilities'] ?? '[]'),
                ':requirements'     => is_array($job['requirements'] ?? null) ? json_encode($job['requirements'], JSON_UNESCAPED_UNICODE) : ($job['requirements'] ?? '[]'),
                ':preferred'        => is_array($job['preferred'] ?? null) ? json_encode($job['preferred'], JSON_UNESCAPED_UNICODE) : ($job['preferred'] ?? '[]'),
                ':benefits'         => is_array($job['benefits'] ?? null) ? json_encode($job['benefits'], JSON_UNESCAPED_UNICODE) : ($job['benefits'] ?? '[]'),
                ':deadline'         => $job['deadline'] ?? '',
                ':status'           => strtolower($job['status'] ?? 'open'),
                ':posted_date'      => $job['postedDate'] ?? date('Y-m-d')
            ]);
            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    /**
     * Delete job from Database and JSON file
     */
    public static function deleteJob($jobId) {
        $pdo = self::getConnection();
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("DELETE FROM ta_jobs WHERE id = :id");
                $stmt->execute([':id' => $jobId]);
            } catch (Exception $e) {}
        }

        // Sync JSON
        if (file_exists(JOBS_FILE)) {
            $raw = file_get_contents(JOBS_FILE);
            $data = json_decode($raw, true);
            if (isset($data['jobs']) && is_array($data['jobs'])) {
                $data['jobs'] = array_values(array_filter($data['jobs'], function ($j) use ($jobId) {
                    return $j['id'] !== $jobId;
                }));
                file_put_contents(JOBS_FILE, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), LOCK_EX);
            }
        }

        self::createBackupSnapshot('jobs');
        return true;
    }

    /**
     * Toggle job status in Database and JSON
     */
    public static function toggleJobStatus($jobId) {
        $newStatus = 'open';
        $pdo = self::getConnection();
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("SELECT status FROM ta_jobs WHERE id = :id");
                $stmt->execute([':id' => $jobId]);
                $curr = strtolower($stmt->fetchColumn() ?: 'open');
                $newStatus = ($curr === 'open') ? 'closed' : 'open';

                $upStmt = $pdo->prepare("UPDATE ta_jobs SET status = :status WHERE id = :id");
                $upStmt->execute([':status' => $newStatus, ':id' => $jobId]);
            } catch (Exception $e) {}
        }

        // Sync JSON
        if (file_exists(JOBS_FILE)) {
            $raw = file_get_contents(JOBS_FILE);
            $data = json_decode($raw, true);
            if (isset($data['jobs']) && is_array($data['jobs'])) {
                foreach ($data['jobs'] as &$j) {
                    if ($j['id'] === $jobId) {
                        $newStatus = (strtolower($j['status'] ?? 'open') === 'open') ? 'closed' : 'open';
                        $j['status'] = $newStatus;
                        break;
                    }
                }
                unset($j);
                file_put_contents(JOBS_FILE, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), LOCK_EX);
            }
        }

        return $newStatus;
    }

    /**
     * Get all jobs (reads DB if connected, otherwise JSON)
     */
    public static function getAllJobs() {
        $pdo = self::getConnection();
        if ($pdo) {
            try {
                $stmt = $pdo->query("SELECT * FROM ta_jobs ORDER BY created_at DESC");
                $rows = $stmt->fetchAll();
                if ($rows) {
                    $jobs = [];
                    foreach ($rows as $r) {
                        $jobs[] = [
                            'id'               => $r['id'],
                            'title'            => $r['title'],
                            'department'       => $r['department'],
                            'location'         => $r['location'],
                            'employmentType'   => $r['employment_type'],
                            'experience'       => $r['experience'],
                            'salary'           => $r['salary'],
                            'description'      => $r['description'],
                            'responsibilities' => json_decode($r['responsibilities'] ?: '[]', true) ?: [],
                            'requirements'     => json_decode($r['requirements'] ?: '[]', true) ?: [],
                            'preferred'        => json_decode($r['preferred'] ?: '[]', true) ?: [],
                            'benefits'         => json_decode($r['benefits'] ?: '[]', true) ?: [],
                            'deadline'         => $r['deadline'],
                            'status'           => $r['status'],
                            'postedDate'       => $r['posted_date']
                        ];
                    }
                    return $jobs;
                }
            } catch (Exception $e) {}
        }

        // Fallback to JSON
        if (file_exists(JOBS_FILE)) {
            $raw = file_get_contents(JOBS_FILE);
            $d = json_decode($raw, true);
            return $d['jobs'] ?? [];
        }
        return [];
    }

    /**
     * Save Candidate Application into Database and JSON file
     */
    public static function saveApplication($appData) {
        // 1. Save to database
        self::saveApplicationToDatabase($appData, true);

        // 2. Append to data/applications.json
        $apps = [];
        if (file_exists(APPLICATIONS_FILE)) {
            $raw = file_get_contents(APPLICATIONS_FILE);
            $apps = json_decode($raw, true) ?: [];
        }
        array_unshift($apps, $appData);
        file_put_contents(APPLICATIONS_FILE, json_encode($apps, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), LOCK_EX);

        // 3. Create auto-backup snapshot
        self::createBackupSnapshot('applications');

        return true;
    }

    private static function saveApplicationToDatabase($app, $updateJson = true) {
        $pdo = self::getConnection();
        if (!$pdo) return false;

        try {
            $stmt = $pdo->prepare("
                INSERT INTO ta_applications (
                    ref_id, job_id, job_title, candidate_name, email, phone,
                    location, experience, linkedin, portfolio, cover_letter,
                    resume_file, resume_original, resume_url, status, submitted_at
                ) VALUES (
                    :ref_id, :job_id, :job_title, :candidate_name, :email, :phone,
                    :location, :experience, :linkedin, :portfolio, :cover_letter,
                    :resume_file, :resume_original, :resume_url, :status, :submitted_at
                )
            ");

            $stmt->execute([
                ':ref_id'          => $app['refId'],
                ':job_id'          => $app['jobId'] ?? '',
                ':job_title'       => $app['jobTitle'] ?? '',
                ':candidate_name'  => $app['candidateName'] ?? '',
                ':email'           => $app['email'] ?? '',
                ':phone'           => $app['phone'] ?? '',
                ':location'        => $app['location'] ?? '',
                ':experience'      => $app['experience'] ?? '',
                ':linkedin'        => $app['linkedin'] ?? '',
                ':portfolio'       => $app['portfolio'] ?? '',
                ':cover_letter'    => $app['coverLetter'] ?? '',
                ':resume_file'     => $app['resumeFile'] ?? '',
                ':resume_original' => $app['resumeOriginal'] ?? '',
                ':resume_url'      => $app['resumeUrl'] ?? '',
                ':status'          => $app['status'] ?? 'New',
                ':submitted_at'    => $app['submittedAt'] ?? date('Y-m-d H:i:s')
            ]);
            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    /**
     * Update application status in DB and JSON
     */
    public static function updateApplicationStatus($refId, $newStatus) {
        $pdo = self::getConnection();
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("UPDATE ta_applications SET status = :status WHERE ref_id = :ref_id");
                $stmt->execute([':status' => $newStatus, ':ref_id' => $refId]);
            } catch (Exception $e) {}
        }

        // Sync JSON
        if (file_exists(APPLICATIONS_FILE)) {
            $raw = file_get_contents(APPLICATIONS_FILE);
            $apps = json_decode($raw, true) ?: [];
            foreach ($apps as &$a) {
                if (($a['refId'] ?? '') === $refId) {
                    $a['status'] = $newStatus;
                    break;
                }
            }
            unset($a);
            file_put_contents(APPLICATIONS_FILE, json_encode($apps, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), LOCK_EX);
        }

        return true;
    }

    /**
     * Get all applications
     */
    public static function getAllApplications() {
        $pdo = self::getConnection();
        if ($pdo) {
            try {
                $stmt = $pdo->query("SELECT * FROM ta_applications ORDER BY created_at DESC");
                $rows = $stmt->fetchAll();
                if ($rows) {
                    $apps = [];
                    foreach ($rows as $r) {
                        $apps[] = [
                            'refId'          => $r['ref_id'],
                            'jobId'          => $r['job_id'],
                            'jobTitle'       => $r['job_title'],
                            'candidateName'  => $r['candidate_name'],
                            'email'          => $r['email'],
                            'phone'          => $r['phone'],
                            'location'       => $r['location'],
                            'experience'     => $r['experience'],
                            'linkedin'       => $r['linkedin'],
                            'portfolio'      => $r['portfolio'],
                            'coverLetter'    => $r['cover_letter'],
                            'resumeFile'     => $r['resume_file'],
                            'resumeOriginal' => $r['resume_original'],
                            'resumeUrl'      => $r['resume_url'],
                            'status'         => $r['status'],
                            'submittedAt'    => $r['submitted_at']
                        ];
                    }
                    return $apps;
                }
            } catch (Exception $e) {}
        }

        // Fallback to JSON
        if (file_exists(APPLICATIONS_FILE)) {
            $raw = file_get_contents(APPLICATIONS_FILE);
            return json_decode($raw, true) ?: [];
        }
        return [];
    }

    /**
     * Synchronize jobs.json from database
     */
    public static function syncJobsJson() {
        $jobs = self::getAllJobs();
        file_put_contents(JOBS_FILE, json_encode(['jobs' => $jobs], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), LOCK_EX);
    }

    /**
     * Create timestamped backup snapshot in data/backups/
     */
    public static function createBackupSnapshot($type = 'all') {
        if (!is_dir(BACKUPS_DIR)) {
            @mkdir(BACKUPS_DIR, 0755, true);
        }

        $date = date('Ymd_His');

        if ($type === 'all' || $type === 'jobs') {
            if (file_exists(JOBS_FILE)) {
                @copy(JOBS_FILE, BACKUPS_DIR . "jobs_backup_{$date}.json");
            }
        }

        if ($type === 'all' || $type === 'applications') {
            if (file_exists(APPLICATIONS_FILE)) {
                @copy(APPLICATIONS_FILE, BACKUPS_DIR . "applications_backup_{$date}.json");
            }
        }
    }

    /**
     * Export complete SQL dump of current tables and data for 1-click download
     */
    public static function exportSqlDump() {
        $jobs = self::getAllJobs();
        $apps = self::getAllApplications();

        $sql  = "-- ====================================================================\n";
        $sql .= "-- TECHNO AMAZE - AUTOMATED DATABASE BACKUP DUMP\n";
        $sql .= "-- Generated: " . date('Y-m-d H:i:s T') . "\n";
        $sql .= "-- ====================================================================\n\n";

        $sql .= "SET FOREIGN_KEY_CHECKS=0;\n\n";

        // Table 1: Jobs
        $sql .= "DROP TABLE IF EXISTS `ta_jobs`;\n";
        $sql .= "CREATE TABLE `ta_jobs` (\n";
        $sql .= "  `id` VARCHAR(100) NOT NULL PRIMARY KEY,\n";
        $sql .= "  `title` VARCHAR(255) NOT NULL,\n";
        $sql .= "  `department` VARCHAR(100) NOT NULL,\n";
        $sql .= "  `location` VARCHAR(150) NOT NULL,\n";
        $sql .= "  `employment_type` VARCHAR(50) NOT NULL,\n";
        $sql .= "  `experience` VARCHAR(50) NOT NULL,\n";
        $sql .= "  `salary` VARCHAR(100) DEFAULT NULL,\n";
        $sql .= "  `description` TEXT NOT NULL,\n";
        $sql .= "  `responsibilities` TEXT DEFAULT NULL,\n";
        $sql .= "  `requirements` TEXT DEFAULT NULL,\n";
        $sql .= "  `preferred` TEXT DEFAULT NULL,\n";
        $sql .= "  `benefits` TEXT DEFAULT NULL,\n";
        $sql .= "  `deadline` VARCHAR(50) DEFAULT NULL,\n";
        $sql .= "  `status` VARCHAR(20) NOT NULL DEFAULT 'open',\n";
        $sql .= "  `posted_date` VARCHAR(50) DEFAULT NULL,\n";
        $sql .= "  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n";
        $sql .= ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n";

        if (!empty($jobs)) {
            $sql .= "INSERT INTO `ta_jobs` (`id`, `title`, `department`, `location`, `employment_type`, `experience`, `salary`, `description`, `responsibilities`, `requirements`, `preferred`, `benefits`, `deadline`, `status`, `posted_date`) VALUES\n";
            $jobValues = [];
            foreach ($jobs as $j) {
                $jobValues[] = sprintf(
                    "(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                    self::escapeSql($j['id']),
                    self::escapeSql($j['title']),
                    self::escapeSql($j['department']),
                    self::escapeSql($j['location']),
                    self::escapeSql($j['employmentType']),
                    self::escapeSql($j['experience']),
                    self::escapeSql($j['salary']),
                    self::escapeSql($j['description']),
                    self::escapeSql(json_encode($j['responsibilities'] ?? [])),
                    self::escapeSql(json_encode($j['requirements'] ?? [])),
                    self::escapeSql(json_encode($j['preferred'] ?? [])),
                    self::escapeSql(json_encode($j['benefits'] ?? [])),
                    self::escapeSql($j['deadline']),
                    self::escapeSql($j['status']),
                    self::escapeSql($j['postedDate'])
                );
            }
            $sql .= implode(",\n", $jobValues) . ";\n\n";
        }

        // Table 2: Applications
        $sql .= "DROP TABLE IF EXISTS `ta_applications`;\n";
        $sql .= "CREATE TABLE `ta_applications` (\n";
        $sql .= "  `id` INT AUTO_INCREMENT PRIMARY KEY,\n";
        $sql .= "  `ref_id` VARCHAR(50) NOT NULL UNIQUE,\n";
        $sql .= "  `job_id` VARCHAR(100) NOT NULL,\n";
        $sql .= "  `job_title` VARCHAR(255) NOT NULL,\n";
        $sql .= "  `candidate_name` VARCHAR(150) NOT NULL,\n";
        $sql .= "  `email` VARCHAR(150) NOT NULL,\n";
        $sql .= "  `phone` VARCHAR(50) NOT NULL,\n";
        $sql .= "  `location` VARCHAR(100) DEFAULT NULL,\n";
        $sql .= "  `experience` VARCHAR(50) DEFAULT NULL,\n";
        $sql .= "  `linkedin` VARCHAR(255) DEFAULT NULL,\n";
        $sql .= "  `portfolio` VARCHAR(255) DEFAULT NULL,\n";
        $sql .= "  `cover_letter` TEXT DEFAULT NULL,\n";
        $sql .= "  `resume_file` VARCHAR(255) NOT NULL,\n";
        $sql .= "  `resume_original` VARCHAR(255) DEFAULT NULL,\n";
        $sql .= "  `resume_url` VARCHAR(500) DEFAULT NULL,\n";
        $sql .= "  `status` VARCHAR(50) NOT NULL DEFAULT 'New',\n";
        $sql .= "  `submitted_at` VARCHAR(100) DEFAULT NULL,\n";
        $sql .= "  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n";
        $sql .= ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n";

        if (!empty($apps)) {
            $sql .= "INSERT INTO `ta_applications` (`ref_id`, `job_id`, `job_title`, `candidate_name`, `email`, `phone`, `location`, `experience`, `linkedin`, `portfolio`, `cover_letter`, `resume_file`, `resume_original`, `resume_url`, `status`, `submitted_at`) VALUES\n";
            $appValues = [];
            foreach ($apps as $a) {
                $appValues[] = sprintf(
                    "(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                    self::escapeSql($a['refId']),
                    self::escapeSql($a['jobId']),
                    self::escapeSql($a['jobTitle']),
                    self::escapeSql($a['candidateName']),
                    self::escapeSql($a['email']),
                    self::escapeSql($a['phone']),
                    self::escapeSql($a['location']),
                    self::escapeSql($a['experience']),
                    self::escapeSql($a['linkedin']),
                    self::escapeSql($a['portfolio']),
                    self::escapeSql($a['coverLetter']),
                    self::escapeSql($a['resumeFile']),
                    self::escapeSql($a['resumeOriginal']),
                    self::escapeSql($a['resumeUrl']),
                    self::escapeSql($a['status']),
                    self::escapeSql($a['submittedAt'])
                );
            }
            $sql .= implode(",\n", $appValues) . ";\n\n";
        }

        $sql .= "SET FOREIGN_KEY_CHECKS=1;\n";
        return $sql;
    }

    private static function escapeSql($val) {
        if ($val === null) return "NULL";
        return "'" . addslashes((string)$val) . "'";
    }
}
