@echo off
title Stop TechnoAmaze WordPress
echo Stopping WordPress environment...
call npm.cmd run stop
echo WordPress containers stopped. Database preserved.
pause
