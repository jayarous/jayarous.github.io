# Medicine reminder not ringing on Android? What to check

Canonical: [Medicine reminder not ringing on Android? What to check](https://jayarous.github.io/guides/medicine-reminder-not-ringing-android/)

Locale: en

Purpose: Guide: Medicine reminders not ringing: what to check

Content updated: 2026-11-17

Source revision: 2026-11-17-seo-1

Maintenance owner: Jayarous Antony KS

[Topic map](https://jayarous.github.io/llm/topics/guides.md) · [Complete scoped map](https://jayarous.github.io/sitemap.md)

# Medicine reminders not ringing on Android: what to check

Android can delay or silence reminders from any app to save battery. These are the settings that decide whether a medicine reminder arrives on time, and where Sebry shows them.

By Jayarous Antony KS, developer of Sebry. Published 17 November 2026.

## The three settings that matter

- Notifications: on Android 13 or later, an app needs your permission to show notifications at all.
- Exact alarms: lets an app fire a reminder at the exact minute instead of roughly on time.
- Battery optimization: when it is on for an app, Android may hold the app's background work back.

## Check them in Sebry

1. Open Sebry. The Home screen shows a button for anything that is missing: Enable notifications, Enable exact alarms, Disable battery optimization.
2. Tap each button and allow the setting.
3. For a full check, open Settings, then Permissions.
4. In Android's own settings for the Sebry app, make sure full-screen notifications are allowed. Sebry uses them to show an alert over the lock screen.

## Check the sound

- Sebry speaks reminders by default instead of ringing. For a ringtone, open Settings, then Notifications, and turn off Play TTS only.
- Raise the alarm volume. Sebry warns you with "Alarm volume is low" when you save a schedule.
- Use Test reminder sound to hear what a reminder will sound like.
- Check that quiet mode is off. Quiet mode silences reminders or switches them to vibration only.

## Your phone's own battery saver

Some phones add their own battery manager on top of Android's. If reminders still arrive late, look in the phone's battery settings for an option that lets Sebry run in the background without restrictions.

## After a restart

Sebry is built to set its reminders again when the phone restarts. Opening the app once after a restart is a simple way to be sure.

## Common questions

### Why does Android delay reminders?

To save battery. Unless an app is allowed exact alarms and is exempt from battery optimization, Android may run its reminders late.

### Does Sebry need internet to remind me?

No. Reminders are set on the phone and work offline.

### Will a reminder show on the lock screen?

Yes, when full-screen notifications are allowed for Sebry in Android's settings.

### What if I miss a reminder?

Sebry reminds you again for up to 30 minutes. For what to do about a missed dose, ask your doctor or pharmacist. Sebry does not provide medical advice.

Sebry page: https://jayarous.github.io/apps/sebry/
Sebry on Google Play: https://play.google.com/store/apps/details?id=com.sebry.app
