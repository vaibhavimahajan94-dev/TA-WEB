@echo off
title TechnoAmaze Careers & Admin Portal Local Server
color 0A
cls
echo =====================================================================
echo           TECHNO AMAZE - LOCAL TESTING ENVIRONMENT
echo =====================================================================
echo.
echo [1/3] Checking Node.js installation...
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    color 0C
    echo [ERROR] Node.js is not found on your system!
    echo Please install Node.js from https://nodejs.org or use XAMPP/WAMP.
    echo Alternatively, you can test directly by double-clicking careers.html.
    echo.
    pause
    exit /b
)

echo [OK] Node.js detected.
echo.
echo [2/3] Opening browser tabs:
echo       * Candidate Careers Page: http://localhost:3000/careers.html
echo       * Recruiter Admin Portal: http://localhost:3000/admin/login.html
echo.
timeout /t 2 /nobreak >nul
start http://localhost:3000/careers.html
start http://localhost:3000/admin/login.html

echo [3/3] Starting Local Server on Port 3000...
echo.
echo =====================================================================
echo   SERVER LOGS (Keep this window open while testing):
echo   Admin Email:    admin@technoamaze.in
echo   Admin Password: Admin@Techno2026
echo   Press Ctrl + C anytime to shut down the server.
echo =====================================================================
echo.

node server.js
pause
