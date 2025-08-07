@echo off
echo Starting Fortune Cookie Generator locally...
echo.
cd /d "%~dp0"
echo Installing dependencies (if needed)...
call npm install
echo.
echo Starting development server...
echo Your app will open at http://localhost:5173
echo.
call npm run dev
pause 