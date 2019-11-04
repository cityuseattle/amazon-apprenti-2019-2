@echo off

set "VIRTUAL_ENV=C:\Users\PREYEP\Desktop\amazon-apprenti-2019-2\CS260\PhilPreyer\Module8\cs260sandbox"

if defined _OLD_VIRTUAL_PROMPT (
    set "PROMPT=%_OLD_VIRTUAL_PROMPT%"
) else (
    if not defined PROMPT (
        set "PROMPT=$P$G"
    )
    if not defined VIRTUAL_ENV_DISABLE_PROMPT (
        set "_OLD_VIRTUAL_PROMPT=%PROMPT%"
    )
)
if not defined VIRTUAL_ENV_DISABLE_PROMPT (
    set "PROMPT=(cs260sandbox) %PROMPT%"
)

REM Don't use () to avoid problems with them in %PATH%
if defined _OLD_VIRTUAL_PYTHONHOME goto ENDIFVHOME
    set "_OLD_VIRTUAL_PYTHONHOME=%PYTHONHOME%"
:ENDIFVHOME

set PYTHONHOME=

REM if defined _OLD_VIRTUAL_PATH (
if not defined _OLD_VIRTUAL_PATH goto ENDIFVPATH1
    set "PATH=%_OLD_VIRTUAL_PATH%"
:ENDIFVPATH1
REM ) else (
if defined _OLD_VIRTUAL_PATH goto ENDIFVPATH2
    set "_OLD_VIRTUAL_PATH=%PATH%"
:ENDIFVPATH2

set "PATH=%VIRTUAL_ENV%\Scripts;%PATH%"
