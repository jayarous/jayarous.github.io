# How to show a HUD overlay over your games on Android

Canonical: [How to show a HUD overlay over your games on Android](https://jayarous.github.io/guides/gaming-hud-overlay-android/)

Locale: en

Purpose: Guide: How to show a HUD overlay over your games

Content updated: 2026-11-17

Source revision: 2026-11-17-seo-1

Maintenance owner: Jayarous Antony KS

[Topic map](https://jayarous.github.io/llm/topics/guides.md) · [Complete scoped map](https://jayarous.github.io/sitemap.md)

# How to show a HUD overlay over your games on Android

Game Mode Pro floats a small bubble over your game that opens into a HUD. It shows estimated FPS and warns you when the phone runs hot or the battery runs low.

By Jayarous Antony KS, developer of Game Mode Pro. Published 17 November 2026.

## Set it up

1. Install Game Mode Pro from Google Play and open it.
2. On the setup screen, grant Display over other apps. It is the only access the app requires. The other three can be added later.
3. Open the Tools tab and turn on Overlay HUD.
4. On Android 13 or later, allow notifications when the app asks.
5. Open your game. The bubble stays on top of it. Drag the bubble to move it, and open it to see the full HUD.

## What the numbers mean

- FPS (est.): an estimate read from your screen's refresh signal. It is not a number reported by the game, so treat it as a guide.
- BAT and TEMP: battery level and battery temperature.
- THR: thermal headroom, which shows how close the phone is to slowing itself down to cool off. It needs Android 11 or later.
- RAM: memory in use.
- PING: the time it takes to reach a public internet server over Wi-Fi, in milliseconds. It is not the ping to your game's server, and it shows a dash on mobile data.

The free HUD shows estimated FPS. RAM, battery, thermal headroom and ping in the HUD are part of Pro.

## Alerts

Turn on HUD alerts in the Tools tab to get a banner when a value goes into the red, with a vibration if you want one. Temperature and battery alerts are free. FPS and ping alerts are part of Pro.

## Start the HUD with the game

A home screen shortcut or the Game Mode Pro widget opens the game and the HUD together. To make a shortcut, open the Games tab and use the add-to-home-screen button on the game's card. With Pro, Auto-detect games in the Tools tab starts a session and the HUD whenever you open a game from your library. Auto-detect needs Usage access.

## Common questions

### Is the FPS number accurate?

It is an estimate from your screen's refresh signal, so it follows what the display is doing rather than the game's internal frame rate.

### Does the HUD need root?

No. It needs the Display over other apps permission only.

### Does the HUD work on mobile data?

Yes. Only the ping reading needs Wi-Fi.

### Does Game Mode Pro make games run faster?

No. It does not change CPU or GPU speeds.

### Is the HUD free?

The HUD with estimated FPS and the temperature and battery alerts are free. Pro is a subscription that adds the other readings.

Game Mode Pro page: https://jayarous.github.io/apps/game-mode-pro/
Game Mode Pro on Google Play: https://play.google.com/store/apps/details?id=com.gamemodepro.app
