# How to set 120 Hz for games on Android without root

Canonical: [How to set 120 Hz for games on Android without root](https://jayarous.github.io/guides/set-120hz-refresh-rate-for-games-android/)

Locale: en

Purpose: Guide: How to set 120 Hz for games without root

Content updated: 2026-11-17

Source revision: 2026-11-17-seo-1

Maintenance owner: Jayarous Antony KS

[Topic map](https://jayarous.github.io/llm/topics/guides.md) · [Complete scoped map](https://jayarous.github.io/sitemap.md)

# How to set a 120 Hz refresh rate for games on Android without root

Game Mode Pro can switch your screen to its highest refresh rate when a game session starts and put your own setting back when it ends. It uses the free Shizuku app instead of root, and not every phone allows it.

By Jayarous Antony KS, developer of Game Mode Pro. Published 17 November 2026.

## What you need

- A phone with a 90 Hz, 120 Hz or faster screen.
- Game Mode Pro, free on Google Play.
- Shizuku, a free app that lets other apps use system settings you approve, without root.

## Set it up

1. In Game Mode Pro, open the Tools tab and find the Refresh Rate Control card.
2. Tap Get Shizuku and install it.
3. Tap Open Shizuku and start its service, following the instructions inside Shizuku.
4. Back in Game Mode Pro, tap Grant and allow access when Shizuku asks.
5. Tap Enable. This is a one-time grant.
6. The card now reads "Refresh-rate control active".

## Choose a profile for each game

1. Open the Games tab.
2. On a game's card, tap the profile name and choose Performance, Balanced or Battery Saver.

Performance sets the highest refresh rate your screen supports. Battery Saver sets 60 Hz. Balanced leaves your setting as it is.

The profile applies when a session for that game starts. When the session ends, Game Mode Pro restores the setting you had before.

## Limits

Refresh rate control changes Android's own display settings. Some phones and Android versions refuse the change, and Android 16 may reject the peak refresh setting. If nothing changes on your phone, the app cannot force it.

A higher refresh rate does not make a game draw more frames. A game that is capped at 60 frames per second stays at 60.

## Common questions

### Does this need root?

No. It uses Shizuku, which works without root.

### Is refresh rate control free?

Yes. Refresh rate profiles are in the free plan.

### Will 120 Hz make my game run at 120 FPS?

Only if the game itself can render that many frames. The profile sets the screen's refresh rate, not the game's frame rate.

### Does it work on Samsung phones?

Game Mode Pro uses Samsung's refresh rate setting on Samsung phones and Android's standard setting on others. Whether the change is accepted depends on the phone and the Android version.

Game Mode Pro page: https://jayarous.github.io/apps/game-mode-pro/
Game Mode Pro on Google Play: https://play.google.com/store/apps/details?id=com.gamemodepro.app
