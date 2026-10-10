<?php
/**
 * TECHNO AMAZE - ADMIN AUTHENTICATION API
 * 
 * Handles login, session status checks, and logout for the recruitment portal.
 */

require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=UTF-8');

// Read input (handles both application/json and application/x-www-form-urlencoded)
$rawInput = file_get_contents('php://input');
$inputData = [];
if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (is_array($decoded)) {
        $inputData = $decoded;
    }
}
$inputData = array_merge($_POST, $inputData);

$action = $inputData['action'] ?? ($_GET['action'] ?? 'check');

switch ($action) {
    case 'login':
        $username = trim($inputData['username'] ?? '');
        $password = trim($inputData['password'] ?? '');

        if (empty($username) || empty($password)) {
            apiResponse(false, 'Please provide both username and password.');
        }

        // Check username matches either admin or admin@technoamaze.in
        $userMatches = (strcasecmp($username, ADMIN_USER) === 0 || strcasecmp($username, ADMIN_USER_ALT) === 0);

        // Check password matches direct string or hash
        $passMatches = ($password === ADMIN_PASS || password_verify($password, ADMIN_PASS_HASH));

        if ($userMatches && $passMatches) {
            $_SESSION['ta_admin_logged_in'] = true;
            $_SESSION['ta_admin_user'] = ADMIN_USER;
            $_SESSION['ta_admin_login_time'] = time();

            apiResponse(true, 'Login successful. Redirecting to dashboard...', [
                'user' => [
                    'username' => ADMIN_USER,
                    'displayName' => 'Recruitment Administrator',
                    'loginTime' => date('Y-m-d H:i:s')
                ]
            ]);
        } else {
            apiResponse(false, 'Invalid username or password. Please verify your credentials.');
        }
        break;

    case 'check':
        if (isAdminLoggedIn()) {
            apiResponse(true, 'Admin session active.', [
                'loggedIn' => true,
                'user' => [
                    'username' => $_SESSION['ta_admin_user'] ?? ADMIN_USER,
                    'displayName' => 'Recruitment Administrator'
                ]
            ]);
        } else {
            apiResponse(true, 'No active admin session.', [
                'loggedIn' => false
            ]);
        }
        break;

    case 'logout':
        $_SESSION['ta_admin_logged_in'] = false;
        unset($_SESSION['ta_admin_logged_in']);
        unset($_SESSION['ta_admin_user']);
        unset($_SESSION['ta_admin_login_time']);
        session_destroy();

        apiResponse(true, 'Logged out successfully.');
        break;

    default:
        apiResponse(false, 'Unknown authentication action requested.');
        break;
}
