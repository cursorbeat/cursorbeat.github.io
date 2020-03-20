---
slug: "Tilix-and-Zsh-on-Windows10"
title: "Tilix and Zsh on Windows 10"
subtitle: "Windows Subsystem for Linux"
image: "Tilix.png"
imageTitle: "Tilix"
imageAlt: "Tilix with Zsh running on WSL on Windows 10."
date: "2020-02-01T00:00:00-07:00"
tags:
  - "windows"
  - "wsl"
  - "zsh"
  - "terminal"
  - "shell"
type:  "blogPost"
---

I like all major Operating-Systems for different reasons and tasks. But for me there is only one perfect shell: "Zsh". The [Z-shell](http://zsh.sourceforge.net) is for me the right mix of a stable, extendable, modern and universal shell. On MacOS it's already the new default shell and on Linux it's easy to install. On Windows it's also no problem, but to get it working with same smooth expirience like on Linux or MacOS, I use some tools chained together.

To be clear: Yes, Microsoft has a mighty PowerShell, CMD and Git-Bash is also available for Windows. But in my humble opinion - nothing beats a zsh with the power of linux/unix commandline tool repository.

## WSL Tuning

The [Windows Subsystem for Linux](https://docs.microsoft.com/de-de/windows/wsl/about) is a great Feature that came with Windows 10. I think every DevOp who is working with more than only Microsoft based Operating-Systems should get firm with it.

If you run WSL, the first decission is which Linux distribution you want to run. All the big ones are available (Ubuntu, Debian, Fedora, etc.). My choice was [Pengwin](https://www.whitewaterfoundry.com) - it's based on Debian, but it's customised for the use with WSL.

I installed ZSH and [OhMyZSH](https://ohmyz.sh) together with a bunch of plugins to achieve a faster input expirience and a better visualization of context.

Visualization and UI/UX in general could be a pain on a terminal. Not every terminal is capeable to render the shell output as it intendet to be or handle all keyboard and mouse input right - and yes mouse input support could be great with TMux, NVim, EMacs or other commandline tools. Regarding the UI you can [customize colors](https://terminal.sexy/) and fonts as you want, also in terms of syntax highlighting. The defaults are always reduced to a basic configuration. In my case I like to use [Nerd Fonts](https://www.nerdfonts.com) and a special [shell promt](https://github.com/romkatv/powerlevel10k) that relies on the usage of PowerLine, Lingatures and other font features like icons etc.

## Tilix

On MacOS I would always recomend [iTerm2](https://iterm2.com), but for Linux I like [Tilix](https://gnunn1.github.io/tilix-web/). Tilix is a feature rich and fast terminal which does not need a lot of resources to run, but on Windows it isn't available. The default on Windows 10 is still the ugly CMD or as alternative the PowerShell - both terminals are OK if you only require to input/output some letters or run a script, but it's not enjoyable to work with beyond that.

The best Windows native terminal is the new [Windows Terminal](https://github.com/Microsoft/Terminal) from Microsoft - it's still in development - maybe there is a first stable release in April 2020 available. But until now it still has a lot of missing features.

The next best terminal running on Windows IMHO is [Terminus](https://eugeny.github.io/terminus/), but it's a heavy [ElectronJS](https://www.electronjs.org) based terminal which needs a lot of resources to run.

The good thing is that it is possible to run Tilix on Windows through WSL and it's not as tricky as it sounds like. You only need the X11 stack and a X Server for Windows. This sounds like a lot of overhead but it realy isn't the case.

As X Window System[(X11)](https://de.wikipedia.org/wiki/X_Window_System) I can highly recomend [X410](https://token2shell.com/x410/) from Choung Networks - it's a fast reliable light weight implementation of X11 for Windows 10.

I use a little trick to hide a default terminal session window in the background through a [TMux](https://github.com/tmux/tmux/wiki)-Server to show up Tilix. To achive this you only need a link in Windows with this command:

 `C:\Windows\System32\wsl.exe -d WLinux -- tmux -c "zsh ~/Tilix_WSL-Launcher.zsh"`

And in the WSL instance (here WLinux) you only need to place a [shell script](https://raw.githubusercontent.com/Adrian-Grimm/DotFiles/master/Tilix_WSL-Launcher.zsh) which will start X410 and Tilix in Windows with no visible startup console:

```shell
#bin! zsh
Powershell.exe -Command 'start X410.exe /WM'
tmux new-session -s "Tilix" -n "Console" -d&
tmux send-keys -t Tilix "Display=:0 dbus-launch --exit-with-session tilix&" C-m
```

Take a look for a nice icon for the Windows link assigned in the properties of it and you are done. 

## Conclusion

I use this setup [since a couple of month](https://twitter.com/AdiGrimm/status/1154045308856258561) and I did't got any issue at all with it. No Bugs no performance issues. Most of the time I'm using Git, [SpaceVim](https://spacevim.org)/[NeoVim](https://neovim.io), [TMux](https://github.com/tmux/tmux/wiki), SSH and other tools - and I'm happy with it (maybe I write another blog post about command-line-Tools, but you can get some inspiration from [this awesome collection](https://github.com/herrbischoff/awesome-command-line-apps)).

If you like to use my configurations feel free to copy my [DotFiles repository on GitHub](https://github.com/Adrian-Grimm/DotFiles) - but don't blame me for some more dirty hacks in there :wink:. You can also clone it with [YADM](https://yadm.io) - a DotFiles Manager I could recoment.
