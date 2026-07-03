@echo off
title Servidor Portfolio
echo Abrindo servidor em http://localhost:8080
echo Pressione Ctrl+C para parar
echo.
python -m http.server 8080
pause
