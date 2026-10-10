@echo off
title TechnoAmaze WordPress Local Environment Launcher
color 0B
cls
echo ===============================================================================
echo            TECHNO AMAZE - WORDPRESS LOCAL ENVIRONMENT LAUNCHER
echo ===============================================================================
echo.
echo [1/5] Checking Docker Desktop status...

docker info >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [INFO] Docker Desktop is not active. Attempting to start Docker Desktop...
    if exist "C:\Users\Admin\AppData\Local\Programs\DockerDesktop\Docker Desktop.exe" (
        start "" "C:\Users\Admin\AppData\Local\Programs\DockerDesktop\Docker Desktop.exe"
    ) else if exist "C:\Program Files\Docker\Docker\Docker Desktop.exe" (
        start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
    )
    echo Waiting for Docker engine to initialize (this may take 20-30 seconds)...
    :WAIT_DOCKER
    timeout /t 5 /nobreak >nul
    docker info >nul 2>&1
    if %ERRORLEVEL% neq 0 (
        echo Still waiting for Docker engine...
        goto WAIT_DOCKER
    )
)
echo [OK] Docker daemon is running.
echo.

echo [2/5] Starting WordPress environment via wp-env...
call npm.cmd start
if %ERRORLEVEL% neq 0 (
    color 0C
    echo.
    echo [ERROR] wp-env failed to start.
    echo Make sure Docker Desktop is open and its WSL2 engine is initialized.
    echo.
    pause
    exit /b
)

echo.
echo [3/5] Activating TechnoAmaze Theme & Core Plugin...
call npm.cmd exec -- wp-env run cli wp theme activate technoamaze-theme
call npm.cmd exec -- wp-env run cli wp plugin activate technoamaze-core

echo.
echo [4/5] Auto-creating all website pages in WordPress database...
call npm.cmd exec -- wp-env run cli wp eval-file wp-content/themes/technoamaze-theme/scripts/create-pages.php

echo.
echo [5/5] Launching WordPress in your browser...
start http://localhost:8888
start http://localhost:8888/wp-admin

echo.
echo ===============================================================================
echo   🎉 TECHNO AMAZE WORDPRESS SITE IS RUNNING!
echo ===============================================================================
echo.
echo   🌐 Live Website:     http://localhost:8888
echo   🔐 WP Admin Panel:   http://localhost:8888/wp-admin
echo.
echo   👤 Admin Username:   admin
echo   🔑 Admin Password:   password
echo.
echo   • Custom Theme:      TechnoAmaze Corporate IT (Active)
echo   • Custom Plugin:     TechnoAmaze Core Engine (Active)
echo   • Open Positions:    WP-Admin -> Careers & Jobs
echo   • Applications:      WP-Admin -> Careers & Jobs -> Applications
echo.
echo   To STOP WordPress anytime, run: stop-wp.bat (or npm run stop)
echo ===============================================================================
echo.
pause
