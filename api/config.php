<?php
/**
 * TECHNO AMAZE - ADMIN & RECRUITMENT SYSTEM CONFIGURATION
 * 
 * Central configuration file for admin authentication, file paths,
 * and security tokens.
 */

// Start session securely if not already started
if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.cookie_httponly', '1');
    ini_set('session.use_only_cookies', '1');
    session_start();
}

// -----------------------------------------------------------------------------
// 1. ADMIN CREDENTIALS
// You can change the admin username and password here.
// -----------------------------------------------------------------------------
define('ADMIN_USER', 'admin@technoamaze.in');
define('ADMIN_USER_ALT', 'admin');
// Default password: Admin@Techno2026
define('ADMIN_PASS', 'Admin@Techno2026');
// Password hash for production security (verifies plain ADMIN_PASS or hashed password)
define('ADMIN_PASS_HASH', password_hash('Admin@Techno2026', PASSWORD_DEFAULT));

// -----------------------------------------------------------------------------
// 2. FILE & DATA PATHS
// -----------------------------------------------------------------------------
define('DATA_DIR', dirname(__DIR__) . '/data/');
define('JOBS_FILE', DATA_DIR . 'jobs.json');
define('APPLICATIONS_FILE', DATA_DIR . 'applications.json');
define('UPLOADS_RESUMES_DIR', dirname(__DIR__) . '/uploads/resumes/');
define('BACKUPS_DIR', DATA_DIR . 'backups/');

// -----------------------------------------------------------------------------
// 3. DATABASE CONFIGURATION (MySQL + SQLite Auto-Fallback)
// -----------------------------------------------------------------------------
// Set to true to enable database persistence
define('DB_ENABLED', true);
// Driver: 'mysql' for live cPanel/hosting database, 'sqlite' for zero-config file db
define('DB_DRIVER', 'mysql');
define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('DB_NAME', 'technoamaze_careers');
define('DB_USER', 'root');
define('DB_PASS', '');
// SQLite self-contained database file fallback
define('DB_SQLITE_FILE', DATA_DIR . 'database.sqlite');

// -----------------------------------------------------------------------------
// 3. COMMON HELPER FUNCTIONS
// -----------------------------------------------------------------------------

/**
 * Return JSON response and terminate script
 */
function apiResponse($success, $message, $extra = []) {
    header('Content-Type: application/json; charset=UTF-8');
    $payload = array_merge([
        'success' => $success,
        'message' => $message
    ], $extra);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Check if the current user has a valid active admin session
 */
function isAdminLoggedIn() {
    return isset($_SESSION['ta_admin_logged_in']) && $_SESSION['ta_admin_logged_in'] === true;
}

/**
 * Enforce admin authentication on API routes
 */
function requireAdminAuth() {
    if (!isAdminLoggedIn()) {
        http_response_code(401);
        apiResponse(false, 'Unauthorized. Please login to access admin features.');
    }
}
