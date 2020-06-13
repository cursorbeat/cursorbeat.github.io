---
slug: "PowerShell-Config-for-Developers"
title: "PowerShell Config for Developers"
subtitle: "PowerLine, Suggestions and more"
image: "PowerShell-PowerLine.png"
imageTitle: "PowerShell PowerLine"
imageAlt: "Windows Terminal with PowerShell and PowerLine."
date: "2020-03-19T10:00:00+0100"
tags:
  - "windows"
  - "powershell"
  - "shell"
  - "terminal"
type:  "blogPost"
---

As a Developer in the Microsoft Tech-Stack you may like to work with a powerful shell. On Windows there is the [PowerShell 7](https://github.com/PowerShell/PowerShell/releases) - but like nearly every other shell, the base config is not as usefull for development tasks as it could be. This post gives some ideas of how the UI/UX could get improved for those tasks.

## Terminal

First of all the old CMD.exe should get retired on your Windows system! I could realy recommend the new [Windows Terminal](https://github.com/microsoft/terminal) - even though it's in preview state. The newest version recieved one of my last missing features - the mouse support for visual input - now it has nearly all needed features to be a powerfull terminal for PowerShell, WSL and SSH use-cases. But you can use PowerShell 7 and this config also on MacOS and Linux if you want (makes sense in terms of e.g. Dot.Net-Core development, Azure Cloud config,...).

On MacOS I could recommend [iTerm 2](https://iterm2.com) on Linux [Tilix](https://gnunn1.github.io/tilix-web/) and as Cross-Platform solution with some performance trade-offs [Terminus](https://eugeny.github.io/terminus/).

## Shell customizing

I use Git all the way for version control of my code, snippets, scripts, notes and documentation. My main Git tool is always a commandline Git. Because of that I like to see the Git status always present in the promt of the main shell I use. On Z-Shell and PowerShell exists well implemented PowerLine themes to present those informations in a clean way. To get this style and also the for me important auto-suggest and history-search feature I installed some modules and customised the PowerShell profile.

## PowerShell Configuration

### Modules

There are a lot of infrastructure extensions to customize shell's to be able to easy install packages which extend or modify the look of your shell. For Fish-Shell "[Oh-My-Fish](https://github.com/oh-my-fish/oh-my-fish)", for Z-Shell "[Oh-My-Zsh](https://ohmyz.sh)" and this Oh-My-Sh** continues with "[Oh-My-Posh](https://github.com/JanDeDobbeleer/oh-my-posh)" for PowerShell.

```PowerShell
Install-Module -Name oh-my-posh
Install-Module -Name posh-git -AllowPrerelease
```

For additional module packages take a look at the [Gallery](https://www.powershellgallery.com/packages).  
There is also a upcomming [second "Oh-My-Posh"](http://pecigonzalo.github.io/Oh-My-Posh/).

### PowerShell $Profile config

To create a new profile config use `New-Item -path $Profile -type file –force`.  
You can edit your profile config with every text editor e.g. `nano $PROFILE`.

```PowerShell
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward
Set-PSReadlineOption -ShowToolTips -BellStyle Visual

Import-Module posh-git
Import-Module oh-my-posh
Set-Theme Paradox
```

May you get an error like `PowerShell_profile.ps1 cannot be loaded. ...PowerShell_profile.ps1 is not digitally signed.` if so, you should run `Set-ExecutionPolicy RemoteSigned` - This will allow to run any script on the local machine, that has not come from the internet.

### PowerLine

For PowerLine support consistent to this setup I could recomend the PowerLine enabled version of the Microsoft Cascadia font "[Cascadia Mono PL](https://github.com/microsoft/cascadia-code)" configured in your terminal.
