/*
  Content for the app pages. Every statement here comes from the app's own
  Google Play listing (checked 17 November 2026). Edit the text here, then run:
      node tools/build-site.js
*/
const ORIGIN = "https://jayarous.github.io";
const OWNER = "Jayarous Antony KS";
const CHECKED = "2026-11-17";
const CHECKED_TEXT = "17 November 2026";

const icon = (hash, size) => `https://play-lh.googleusercontent.com/${hash}=s${size || 256}`;
const play = (id) => `https://play.google.com/store/apps/details?id=${id}`;

const apps = [
  {
    slug: "sebry",
    pkg: "com.sebry.app",
    name: "Sebry",
    iconHash: "a9jOtXdyOfmdpAAtB7R1EJp0oYSLDP3rQxtLJ-vdNVbOO-8Wg0EUCFupi6SpRIeMKPSz1TqjYk5C9KyBqRZD",
    title: "Sebry: medication reminder app for Android",
    h1: "Sebry, a medication reminder app for you and your family",
    cardSummary: "Medication reminders, schedules and family health profiles in one app. Your data stays on your phone.",
    metaDescription: "Sebry is an Android app for medicine reminders, dose tracking, stock and family health profiles. Your data stays on your phone. Free to install on Google Play.",
    lead: "Sebry is an Android app that reminds you to take your medicines and keeps schedules, stock and care routines organised for you or your family. It is built privacy-first: your medicine data is stored on your phone, not on a server.",
    storeCategory: "Health & Fitness",
    schemaCategory: "HealthApplication",
    price: "Free to install. Sebry Plus is an optional paid upgrade.",
    updated: "2 May 2026",
    languages: "English and Malayalam",
    audienceTitle: "Who Sebry is for",
    audience: [
      "People managing their own daily medicines",
      "Anyone supporting an elderly parent",
      "Parents caring for a child's medicines",
      "Families keeping several routines in one place"
    ],
    groups: [
      {
        title: "Reminders and daily tracking",
        items: [
          ["Medicine reminders and schedules", "Create reminders with dose details, timing, food instructions, start and end dates, and repeat options."],
          ["Quick dose actions", "Mark a reminder as Taken, Skip or Snooze straight from the reminder."],
          ["Today view", "See today's medicines, upcoming doses, completed doses and what is still to come in one place."],
          ["Sound and voice options", "Set reminder sounds and ringing behaviour, and use spoken medicine reminders where available."],
          ["Quiet notification mode", "Temporarily silence reminders or switch them to vibration only."]
        ]
      },
      {
        title: "Medicines, stock and family profiles",
        items: [
          ["Medicine management", "Add and edit medicines with name, type, stock quantity, the profile they belong to and optional photos."],
          ["Medicine name scan", "Scan a medicine label with the camera to help fill in the name. The scan runs on the device and does not need internet."],
          ["Family profiles", "Create a profile for each person so medicines, schedules, lab reports and care tracking stay organised. Free use includes basic limits; Sebry Plus supports more profiles."],
          ["Stock tracking", "Track how much of each medicine is left and see when stock is low, so refills are easier to plan."]
        ]
      },
      {
        title: "Health records and Sebry Plus",
        items: [
          ["Lab report tracking", "Import lab reports, review the extracted results, filter report history and keep records linked to the right profile. AI-based extraction needs Sebry Plus and your own configured AI provider."],
          ["Fluid balance tracking", "Log fluid intake and output, view daily totals and export the records. This is part of Sebry Plus."],
          ["Optional AI assistance", "Sebry Plus users can connect their own AI provider API key for AI chat, medicine summaries, schedule suggestions, AI image scan and lab report extraction. AI features are optional and are off by default."],
          ["Backup and restore", "Export and import your data as backup files, so you decide when and where it is shared."]
        ]
      }
    ],
    privacyTitle: "How Sebry handles your data",
    privacy: [
      "Your medicine data is stored on your device.",
      "Sebry does not operate a server for your health data.",
      "Sensitive app data is encrypted on the device.",
      "Backup files are created only when you choose to export them.",
      "AI features are optional and send data only to the provider you configure.",
      "Your API key is stored securely on your device."
    ],
    notes: [
      "Sebry supports medication routine tracking, reminders and personal record keeping. It does not provide medical advice, diagnosis or treatment. Always follow guidance from your doctor, pharmacist or qualified healthcare professional.",
      "Sebry includes adjustable text size and supports English and Malayalam."
    ],
    faq: [
      ["Is Sebry free?", "Sebry is free to install, and free use includes basic limits such as the number of family profiles. Sebry Plus is a paid upgrade that adds more profiles, fluid balance tracking and the optional AI features."],
      ["Does Sebry work without internet?", "Yes for the core features. Medicine management, reminders, profiles, history and storage are designed to work offline on your phone, and the medicine name scan also runs on the device."],
      ["Where does Sebry store my medicine data?", "On your phone. Sebry does not run a server for your health data, sensitive data is encrypted on the device, and backup files exist only if you export them."],
      ["Can I manage medicines for my parents or children in Sebry?", "Yes. You can create a profile for each person, and each profile keeps its own medicines, schedules, lab reports and care tracking."],
      ["Does Sebry give medical advice?", "No. Sebry is for reminders, routine tracking and personal records. It does not provide medical advice, diagnosis or treatment."],
      ["Which languages does Sebry support?", "English and Malayalam."]
    ]
  },
  {
    slug: "billgen",
    pkg: "com.billgen.app",
    name: "BillGen",
    iconHash: "ZYTQ8yklXsybZC56P1_Txj19hQBNwOs3c6g7JHZB_oXuG9iMawweWOfQG73VTjFB5Lf__k9sCgYyQKv5g6o8Nw",
    title: "BillGen: GST and VAT invoice app for Android",
    h1: "BillGen, an invoicing app for small businesses and freelancers",
    cardSummary: "Invoicing for small businesses and freelancers: GST and VAT invoices, payment tracking and PDF sharing. Works offline.",
    metaDescription: "BillGen is an Android invoicing app for small businesses and freelancers, with GST and VAT invoice formats for UAE, Saudi Arabia, Oman and India. Works offline. Free to start on Google Play.",
    lead: "BillGen is an Android app for creating professional invoices on your phone, sharing them as PDF and keeping track of who has paid. It has tax-ready invoice formats for the UAE, Saudi Arabia, Oman and India, and it works offline.",
    storeCategory: "Business",
    schemaCategory: "BusinessApplication",
    price: "Free for one company and up to 3 new invoices a day. Pro is a subscription that removes the limit.",
    updated: "15 November 2026",
    audienceTitle: "Who BillGen is for",
    audience: [
      "Small businesses that invoice from a phone",
      "Freelancers billing regular clients",
      "Businesses that issue VAT invoices in the UAE, Saudi Arabia or Oman",
      "Businesses that issue GST invoices in India"
    ],
    groups: [
      {
        title: "Create invoices quickly",
        items: [
          ["From order to invoice", "Build an order from your product list and turn it into an invoice."],
          ["Reusable customers and products", "Add customers and products once and reuse them every time."],
          ["Discounts, taxes and credit notes", "Apply discounts, use multiple tax rates and issue credit notes."],
          ["PDF sharing and printing", "Share or print invoices as PDF."]
        ]
      },
      {
        title: "Tax-ready invoice formats",
        items: [
          ["Country formats", "Invoice formats for the UAE, Saudi Arabia, Oman and India, plus a general VAT format."],
          ["Document types", "Tax invoice, simplified invoice, bill of supply and credit note layouts."],
          ["Saudi Arabia QR code", "Saudi invoices carry the required QR code."],
          ["India UPI scan-to-pay", "Unpaid invoices in India show a UPI scan-to-pay QR code."],
          ["Tax report export", "Export a tax report as CSV to help prepare your VAT or GST return."]
        ]
      },
      {
        title: "See where the business stands",
        items: [
          ["Dashboard", "This month's sales, collection rate, average invoice and overdue amount."],
          ["Charts", "Billed against paid by month, unpaid balances by age, invoice status and top customers."],
          ["Payments", "Record full or part payments and see what is still owed."]
        ]
      },
      {
        title: "Save time",
        items: [
          ["Recurring invoices", "Set up recurring invoices for regular clients."],
          ["Your layout and branding", "Choose which columns appear on the invoice and add your own branding and logo."],
          ["CSV export", "Export invoices and customers to CSV."]
        ]
      }
    ],
    privacyTitle: "How BillGen handles your data",
    privacy: [
      "BillGen works offline, and your data is stored on your phone.",
      "You can back up and restore your data.",
      "You can protect the app with a fingerprint or screen lock."
    ],
    notes: [],
    faq: [
      ["Which countries' invoice formats does BillGen support?", "The UAE, Saudi Arabia, Oman and India, plus a general VAT format. Layouts include tax invoice, simplified invoice, bill of supply and credit note."],
      ["Does BillGen work offline?", "Yes. BillGen works offline and stores your data on your phone. You can back it up and restore it."],
      ["Is BillGen free?", "The free plan covers one company and up to 3 new invoices a day. Pro is a subscription that removes the limit and adds features such as recurring invoices, payment follow-ups and your own logo."],
      ["Can BillGen share invoices as PDF?", "Yes. Invoices can be shared or printed as PDF."],
      ["Does BillGen add the QR code needed on Saudi invoices?", "Yes. Saudi invoices made in BillGen carry the required QR code. For India, unpaid invoices show a UPI scan-to-pay QR code."],
      ["Can BillGen help with a VAT or GST return?", "BillGen can export a tax report as CSV to help you prepare your VAT or GST return."]
    ]
  },
  {
    slug: "game-mode-pro",
    pkg: "com.gamemodepro.app",
    name: "Game Mode Pro",
    iconHash: "bctjJTcwcvqskIs0uzSkbZ8t21dJBvCKivc8XhHOxveSJUuFiUaLmc0OpapVyAQkP00cWg_UwoR5Lp9hDi9PIg",
    title: "Game Mode Pro: gaming HUD and game mode for Android",
    h1: "Game Mode Pro, a gaming HUD and toolkit for Android",
    cardSummary: "A floating HUD with estimated FPS and alerts for heat and low battery, plus touch lock, screen recording and refresh rate profiles.",
    metaDescription: "Game Mode Pro is a gaming HUD for Android: a floating overlay with estimated FPS, temperature and battery alerts, touch lock, screen recording and refresh rate profiles. No ads.",
    lead: "Game Mode Pro is a game mode and gaming HUD for Android. A small floating overlay shows estimated FPS and warns you when the phone runs hot or the battery runs low, and quick tools keep notifications and accidental touches out of the way.",
    storeCategory: "Tools",
    schemaCategory: "UtilitiesApplication",
    price: "Free to install. Pro is a subscription with weekly, monthly and yearly plans that adds the full HUD, auto-detect and unlimited session history.",
    updated: "14 November 2026",
    audienceTitle: "Who Game Mode Pro is for",
    audience: [
      "Players who want to see how their phone is coping while they play",
      "Players who want a touch lock, a Do Not Disturb switch and a recorder one tap away",
      "Players with a 90 Hz or 120 Hz screen who want to set the refresh rate for each game"
    ],
    groups: [
      {
        title: "During a game",
        items: [
          ["Floating HUD", "A bubble floats over your game and opens into a HUD. It shows estimated FPS, read from your screen's refresh signal rather than reported by the game."],
          ["Alerts", "A banner, with optional vibration, when temperature or battery goes into the red."],
          ["Quick tools", "Touch lock, a Do Not Disturb switch, a brightness slider, screenshots and screen recording. Recordings are video only, with no sound."],
          ["Refresh rate profiles", "The Performance profile sets the screen to its highest refresh rate and Battery Saver sets 60 Hz. This needs the free Shizuku app, and not every phone allows it."]
        ]
      },
      {
        title: "Around a game",
        items: [
          ["Game library and widget", "Game Mode Pro finds the games on your phone. Start one from the app, a home screen shortcut or the widget."],
          ["Session reports", "Each session gets a plain-English summary and a list of alerts. The free plan keeps your last 5 sessions for 3 days."],
          ["Network check", "Test your connection before you play."]
        ]
      },
      {
        title: "With Pro",
        items: [
          ["Full HUD", "RAM, battery, thermal headroom and Wi-Fi ping in the HUD, FPS and ping alerts, and the Gauges style."],
          ["Auto-detect", "A session and the HUD start when you open a game from your library."],
          ["Full history and reports", "Unlimited session history, timelines, network details, all tips and report sharing."],
          ["AI explanations", "Optional explanations of a session report, using your own AI key. They are off until you set them up."]
        ]
      }
    ],
    privacyTitle: "How Game Mode Pro handles your data",
    privacy: [
      "Your session and settings data stays on your device.",
      "Game Mode Pro contains no ads.",
      "Game Mode Pro uses no third-party analytics."
    ],
    notes: [],
    faq: [
      ["What does the Game Mode Pro HUD show?", "The free HUD shows estimated FPS, and temperature and battery alerts are free too. Pro adds RAM, battery, thermal headroom and Wi-Fi ping to the HUD."],
      ["Is the FPS number the game's real frame rate?", "No. It is an estimate read from your screen's refresh signal, not a number reported by the game."],
      ["Does Game Mode Pro make games run faster?", "No. It does not change CPU or GPU speeds. It shows how your phone is coping, removes distractions and, on phones that allow it, sets the screen refresh rate."],
      ["Does Game Mode Pro start automatically when I open a game?", "With Pro, yes: auto-detect starts a session and the HUD when you open a game from your library. On the free plan you start a game from the app, a home screen shortcut or the widget."],
      ["Is Game Mode Pro free?", "It is free to install, with no ads. Pro is a subscription with weekly, monthly and yearly plans. The upgrade screen shows the current price and any free trial."],
      ["Does Game Mode Pro show ads or collect analytics?", "No. Game Mode Pro contains no ads and no third-party analytics, and your session and settings data stays on your device."],
      ["Can I record the screen with Game Mode Pro?", "Yes, at 720p, 1080p or native resolution. Recordings are video only, with no sound."]
    ]
  },
  {
    slug: "airgrid",
    pkg: "com.airgrid.app",
    name: "AirGrid",
    iconHash: "xJsCPyVgNhY52IhuRFaV7niu9zrCwEjLFCjEPMBLp25JIij2rdsR55RNn-BHPeHcnM0F4kzuL5gqbzOTSEepopQ",
    title: "AirGrid: offline nearby chat app for Android",
    h1: "AirGrid, a chat app that works without internet",
    cardSummary: "Chat with nearby Android phones over Bluetooth and Wi-Fi Direct, with no internet or mobile data.",
    metaDescription: "AirGrid is an Android app for chatting with nearby phones over Bluetooth and Wi-Fi Direct, without internet or mobile data. Public and private messages, voice notes and walkie-talkie audio.",
    lead: "AirGrid is an offline-first chat app for Android. Nearby phones exchange messages directly over Bluetooth and Wi-Fi Direct, using Google Nearby Connections, without internet, mobile data, routers or a central messaging server.",
    storeCategory: "Communication",
    schemaCategory: "CommunicationApplication",
    price: "Free to install.",
    updated: "25 October 2026",
    audienceTitle: "When AirGrid is useful",
    audience: [
      "Events and community gatherings",
      "Travel, hiking and camping",
      "Campuses, dormitories, hostels and hotels",
      "Workplaces where people are close by",
      "Emergency preparedness, when nearby people need to talk without internet or mobile data"
    ],
    groups: [
      {
        title: "Messaging",
        items: [
          ["Offline nearby messaging", "Chat with nearby Android devices without internet access or mobile data."],
          ["Local mesh", "Messages can move between connected nearby devices over a local peer-to-peer mesh."],
          ["Public nearby chat", "Send messages to the people around you who are connected to the same local mesh."],
          ["Private chat", "Message selected nearby contacts directly when they are available in the mesh."],
          ["Encrypted private messages", "AirGrid supports opportunistic encryption for private messages once devices have exchanged the required public keys."]
        ]
      },
      {
        title: "Voice, media and location",
        items: [
          ["Voice notes and media sharing", "Send voice notes, photos and files to nearby peers when the local connection supports the transfer."],
          ["Walkie-talkie audio", "Send short public walkie clips to the local mesh, or start an invited private walkie session with one person."],
          ["Rider Mode", "A trusted one-to-one live audio session with mute controls and a voice-activated microphone, for close-range coordination."],
          ["Optional location sharing", "Share your location with connected peers only when you choose to."]
        ]
      },
      {
        title: "Contacts and history",
        items: [
          ["Known and trusted contacts", "AirGrid can remember contacts discovered through the mesh. Mark trusted contacts to use private walkie and Rider Mode with them."],
          ["Local message history", "Messages are stored on your device, so you can read recent conversations locally."]
        ]
      }
    ],
    privacyTitle: "How AirGrid handles your messages",
    privacy: [
      "Messages are exchanged directly with nearby devices.",
      "AirGrid does not operate a central messaging server for normal mesh messaging.",
      "Message history is stored on your device, not on an AirGrid server."
    ],
    notes: [
      "Google Play Services is required. AirGrid needs nearby-device permissions such as Bluetooth, Wi-Fi, notifications, microphone and location-related permissions, because Android requires them for nearby discovery, device-to-device connections, foreground mesh sessions and the optional audio and location features.",
      "Mesh performance varies with device hardware, Android version, distance, radio conditions and the number of nearby peers."
    ],
    faq: [
      ["Does AirGrid need internet or mobile data?", "No. AirGrid sends messages directly between nearby Android devices over Bluetooth and Wi-Fi Direct, without internet, mobile data or a router."],
      ["How far apart can AirGrid users be?", "It depends. Mesh performance varies with device hardware, Android version, distance, radio conditions and how many peers are nearby. Messages can also hop between connected devices in the local mesh."],
      ["Are AirGrid messages encrypted?", "Private messages use opportunistic encryption once the two devices have exchanged the required public keys."],
      ["What does AirGrid need to work?", "An Android device with Google Play Services, plus nearby-device permissions such as Bluetooth, Wi-Fi, notifications, microphone and location-related permissions."],
      ["Where are AirGrid messages stored?", "On your device. AirGrid does not operate a central messaging server for normal mesh messaging."],
      ["Can I send photos and voice notes with AirGrid?", "Yes. You can send voice notes, photos and files to nearby peers when the local mesh connection supports the transfer."]
    ]
  }
];

/*
  Guides: how-to articles. Each one links to the app it relates to (appSlug).
*/
const guides = [
  {
    slug: "chat-without-internet-android",
    appSlug: "airgrid",
    title: "Chat without internet on Android: how it works and how to set it up",
    h1: "How to chat without internet on Android",
    linkText: "How to chat without internet on Android",
    metaDescription: "Two Android phones can message each other with no internet or mobile data, using Bluetooth and Wi-Fi Direct. What you need, how to set it up before you go offline, and the limits.",
    lead: "Two Android phones can exchange messages with no internet and no mobile data, as long as they are near each other and run the same offline chat app. The phones connect directly over Bluetooth and Wi-Fi Direct instead of going through a mobile network or a router.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "When you need it",
        paragraphs: ["Mobile networks slow down or stop working when too many people use them at once, and they do not reach everywhere. Offline chat is useful in places like these:"],
        bullets: [
          "Crowded events such as festivals, stadiums and New Year's Eve celebrations",
          "Hiking, camping and other places with no signal",
          "Travel, when you have no local data plan",
          "Campuses, hostels and hotels with weak Wi-Fi",
          "Network outages, as part of being prepared"
        ]
      },
      {
        title: "How offline chat works",
        paragraphs: [
          "Every Android phone has Bluetooth and Wi-Fi radios. An offline chat app uses those radios to find other phones nearby and connect to them directly. No mobile tower, router or server is involved.",
          "Some apps go one step further and build a mesh: each phone passes messages on to the next one, so a message can travel further than a single direct connection."
        ]
      },
      {
        title: "What you need before you go offline",
        bullets: [
          "The same offline chat app on every phone. Install it while you still have internet, because you cannot download an app without a connection.",
          "Bluetooth and Wi-Fi switched on. Wi-Fi does not need to be connected to a network.",
          "The permissions the app asks for, such as Bluetooth, Wi-Fi and location-related permissions. Android requires them for finding and connecting to nearby phones.",
          "People within range. Bluetooth and Wi-Fi Direct are short-range, and distance and surroundings reduce it."
        ]
      },
      {
        title: "Set it up with AirGrid",
        paragraphs: ["AirGrid is an offline chat app for Android that works this way. Setting it up takes a few minutes:"],
        steps: [
          "Install AirGrid from Google Play while you are online.",
          "Open it and allow the permissions it asks for.",
          "Ask the people you want to reach to install it too.",
          "When you are near each other, open AirGrid. Nearby users discover each other and join a local mesh.",
          "Use public nearby chat to talk to everyone connected, or private chat to message one person."
        ],
        after: ["AirGrid can also send voice notes, photos and files when the local connection supports the transfer, and it has walkie talkie audio for short voice clips."]
      },
      {
        title: "Limits to know",
        bullets: [
          "Offline chat only reaches people nearby who have the same app installed.",
          "Range and speed vary with the phones, the Android version, distance, radio conditions and the number of people nearby.",
          "It does not replace emergency services. If you need urgent help, call the local emergency number."
        ]
      }
    ],
    faq: [
      ["Can two phones chat over Bluetooth without internet?", "Yes. With the same offline chat app on both phones, messages travel directly between them over Bluetooth and Wi-Fi Direct. No internet, mobile data or router is needed."],
      ["Can I make calls without internet?", "Not regular phone calls. With AirGrid you can send walkie talkie voice clips, and start a live one-to-one audio session called Rider Mode with a trusted contact nearby."],
      ["Does offline chat use mobile data?", "No. Messages go straight from phone to phone, so no mobile data is used."],
      ["Does AirGrid work between Android and iPhone?", "AirGrid is an Android app, so it connects Android phones that have it installed."],
      ["Do I need to prepare in advance?", "Yes. Install the app and open it once while you have internet, and make sure the people you want to reach have it too."]
    ]
  },
  {
    slug: "message-on-cruise-without-wifi",
    appSlug: "airgrid",
    title: "Message each other on a cruise without Wi-Fi: what works on Android",
    h1: "How to message each other on a cruise without Wi-Fi",
    linkText: "How to message each other on a cruise without Wi-Fi",
    metaDescription: "At sea there is no normal mobile coverage and ship Wi-Fi usually costs extra. Android phones near each other can still message over Bluetooth and Wi-Fi Direct. How to set it up, and the limits on a big ship.",
    lead: "At sea your phone has no normal mobile coverage, and the ship's Wi-Fi is usually a paid extra. Android phones that are near each other can still exchange messages directly over Bluetooth and Wi-Fi Direct, using an offline chat app installed before you sail.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "Why your usual apps stop working",
        paragraphs: ["Messaging apps need an internet connection. Away from the coast there are no mobile towers, so they only work through the ship's Wi-Fi or a maritime roaming service, and both usually cost extra. Check the prices with your cruise line and your mobile operator before you travel."]
      },
      {
        title: "What works without internet",
        paragraphs: ["An offline chat app connects phones to each other directly over Bluetooth and Wi-Fi Direct. Nothing leaves the phones, so it works at sea in the same way it works on land. AirGrid is an Android app that does this, and it can pass messages from phone to phone when several people nearby are using it."]
      },
      {
        title: "Before you board",
        steps: [
          "Install AirGrid on every Android phone in your group while you still have internet.",
          "Open it on each phone and allow the permissions it asks for.",
          "Try it at home with the phones side by side, so everyone knows how it works.",
          "On board, if you want to avoid roaming charges, switch on airplane mode and then turn Bluetooth and Wi-Fi back on.",
          "Open AirGrid and use private chat for your own group."
        ]
      },
      {
        title: "Limits on a ship",
        bullets: [
          "Range is short. Bluetooth and Wi-Fi Direct reach people nearby, not across a whole ship, and walls and decks reduce it further.",
          "Messages can hop between phones running AirGrid, so reach improves when more people around you use it.",
          "It connects Android phones that have the app installed.",
          "Agree a meeting place and time as a backup."
        ]
      }
    ],
    faq: [
      ["Does Bluetooth chat work at sea?", "Yes. The phones connect to each other directly, so no mobile network or ship Wi-Fi is needed."],
      ["Will it reach my family in another part of the ship?", "Probably not directly. Range is short and depends on the phones and the surroundings. It works best when you are in the same area, such as the same restaurant, lounge or pool area."],
      ["Will I be charged for using it?", "AirGrid does not use internet or mobile data. To avoid roaming charges from other apps, keep mobile data off, or use airplane mode with Bluetooth and Wi-Fi turned back on."]
    ]
  },
  {
    slug: "message-on-flight-without-wifi",
    appSlug: "airgrid",
    title: "Message on a flight without Wi-Fi: Bluetooth chat between Android phones",
    h1: "How to message someone on the same flight without Wi-Fi",
    linkText: "How to message someone on the same flight without Wi-Fi",
    metaDescription: "Seated apart on a flight? Android phones can message each other over Bluetooth and Wi-Fi Direct with no in-flight Wi-Fi. What to set up before you fly, airline rules to check, and the limits.",
    lead: "If your group is seated apart on a flight, Android phones can message each other directly over Bluetooth and Wi-Fi Direct. Nothing goes through the internet, so it works without in-flight Wi-Fi.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "Is it allowed?",
        paragraphs: ["Airplane mode switches off the mobile connection. On Android you can turn Bluetooth and Wi-Fi back on while airplane mode stays on. Many airlines allow Bluetooth during the flight, but rules differ, so check your airline's policy and always follow the crew's instructions."]
      },
      {
        title: "Before you fly",
        steps: [
          "Install AirGrid on each Android phone while you have internet.",
          "Open it and allow the permissions it asks for.",
          "Test it together before you leave for the airport.",
          "On the plane, switch on airplane mode, then turn Bluetooth and Wi-Fi back on.",
          "Open AirGrid and use private chat to message the people you are travelling with."
        ]
      },
      {
        title: "Limits to know",
        bullets: [
          "Range is short and varies with the phones and the surroundings, so it may not reach from one end of a large aircraft to the other.",
          "Public nearby chat reaches everyone connected to the same local mesh. Use private chat for your own group.",
          "It connects Android phones that have the app installed."
        ]
      }
    ],
    faq: [
      ["Can I use Bluetooth in airplane mode?", "On Android, yes: switch on airplane mode, then turn Bluetooth back on. Whether you may use it during the flight depends on the airline, so check its policy."],
      ["Does it need in-flight Wi-Fi?", "No. Messages go directly from phone to phone, so no in-flight Wi-Fi or internet is used."],
      ["Can I message someone who has an iPhone?", "AirGrid is an Android app, so it connects Android phones that have it installed."]
    ]
  },
  {
    slug: "walkie-talkie-app-without-internet",
    appSlug: "airgrid",
    title: "Walkie talkie app without internet for Android: how AirGrid does it",
    h1: "A walkie talkie app that works without internet",
    linkText: "A walkie talkie app that works without internet",
    metaDescription: "Many walkie talkie apps need an internet connection. AirGrid sends voice directly between nearby Android phones over Bluetooth and Wi-Fi Direct. What it offers, how to set it up, and how it compares with a radio.",
    lead: "Many walkie talkie apps send your voice over the internet, so they stop when the signal does. AirGrid sends voice directly between nearby Android phones over Bluetooth and Wi-Fi Direct, so it keeps working with no internet or mobile data.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "Three ways to talk",
        bullets: [
          "Walkie clips: send short voice clips to everyone on the local mesh, or start an invited private walkie session with one person.",
          "Rider Mode: a live one-to-one audio session with a trusted contact, with mute controls and a voice-activated microphone.",
          "Voice notes: record a message and send it in a chat."
        ]
      },
      {
        title: "Set it up",
        steps: [
          "Install AirGrid from Google Play on each Android phone while you are online.",
          "Open it and allow the permissions it asks for, including the microphone.",
          "When you are near each other, open AirGrid so the phones discover each other.",
          "Mark the people you trust as trusted contacts to use private walkie and Rider Mode with them."
        ]
      },
      {
        title: "How it compares with a radio",
        bullets: [
          "A dedicated two-way radio reaches much further. AirGrid is for people close by.",
          "Range depends on the phones, the Android version, distance, radio conditions and the number of people nearby.",
          "It needs no extra hardware: only Android phones with the app installed."
        ]
      }
    ],
    faq: [
      ["Does AirGrid's walkie talkie need internet?", "No. Voice goes directly between nearby phones over Bluetooth and Wi-Fi Direct."],
      ["Can a whole group hear me?", "Walkie clips can go to everyone on the local mesh. Private walkie sessions and Rider Mode are with one selected person."],
      ["How far does it reach?", "It varies. Performance depends on the phones, the Android version, distance, radio conditions and how many people are nearby."]
    ]
  },
  {
    slug: "talk-to-another-rider-without-mobile-signal",
    appSlug: "airgrid",
    title: "Rider to rider talk without mobile signal: AirGrid Rider Mode on Android",
    h1: "How to talk to another rider without mobile signal",
    linkText: "How to talk to another rider without mobile signal",
    metaDescription: "On rides through remote roads the mobile signal comes and goes. AirGrid's Rider Mode links two Android phones for live audio over Bluetooth and Wi-Fi Direct. Set-up steps, limits and safety.",
    lead: "On rides through hills and remote roads the mobile signal comes and goes. AirGrid's Rider Mode gives two Android phones a live audio link over Bluetooth and Wi-Fi Direct, with no internet or mobile data.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "What Rider Mode is",
        paragraphs: ["Rider Mode is a trusted one-to-one live audio session. It has mute controls and a voice-activated microphone, so you do not need to press a button to talk. It is built for close-range coordination between two people."]
      },
      {
        title: "Set it up before the ride",
        steps: [
          "Install AirGrid on both Android phones while you have internet.",
          "Meet up and open AirGrid on both phones so they discover each other.",
          "Mark each other as trusted contacts.",
          "Start a Rider Mode session.",
          "Test it with your helmet and headset before you set off, because audio setups differ."
        ]
      },
      {
        title: "Limits and safety",
        bullets: [
          "Rider Mode is one-to-one, not a group channel.",
          "It works at close range. Performance varies with the phones, the Android version, distance and radio conditions, so expect it to drop when you ride far apart.",
          "Set everything up while stopped. Do not handle your phone while riding, and follow your local road rules."
        ]
      }
    ],
    faq: [
      ["Does Rider Mode need internet?", "No. The audio goes directly between the two phones over Bluetooth and Wi-Fi Direct."],
      ["Can more than two riders join?", "Rider Mode is one-to-one. For a group, short walkie clips can be sent to everyone on the local mesh."],
      ["Will it work with my helmet headset?", "It depends on your phone and headset. Try it before the ride."]
    ]
  },
  {
    slug: "make-invoice-on-phone-send-pdf",
    appSlug: "billgen",
    title: "Make an invoice on your phone and send it as a PDF (Android)",
    h1: "How to make an invoice on your phone and send it as a PDF",
    linkText: "How to make an invoice on your phone and send it as a PDF",
    metaDescription: "Create an invoice on an Android phone, turn it into a PDF and send it by WhatsApp or email. Step-by-step with BillGen, an invoice maker that works offline.",
    lead: "You can create an invoice on an Android phone, turn it into a PDF and send it to your customer by WhatsApp or email. This guide uses BillGen, an invoice maker that works offline and keeps your data on your phone.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "What you need",
        bullets: [
          "Your business name and address",
          "Your customer's name, plus a phone number or email if you want to send the invoice straight from the app",
          "The items or services you are billing, with prices",
          "The tax rate, if you charge tax"
        ]
      },
      {
        title: "Set up once",
        steps: [
          "Install BillGen from Google Play and open it. It starts with a Demo Company so you can look around.",
          "Tap \"Set up my business\" on the Dashboard banner and enter your company name. The sample data is removed automatically.",
          "In Settings, open Company profile and add your legal name, address, tax number, currency and country rules.",
          "In Settings, open Taxes, add the tax rates you charge and choose the default.",
          "Open Customers and tap Add. Only the name is required.",
          "Open Products and tap Add. A name and a price are required. You can also import a product list from a CSV file."
        ]
      },
      {
        title: "Create the invoice",
        paragraphs: ["In BillGen you create an order first, then turn it into an invoice."],
        steps: [
          "Tap New order on the Dashboard, pick a customer and add at least one line item.",
          "Choose payment terms to give the invoice a due date.",
          "Create the invoice. It gets the next number in your sequence."
        ]
      },
      {
        title: "Send it",
        steps: [
          "Open the invoice and choose View PDF to preview it.",
          "Share or print the PDF from the preview.",
          "To send it straight to the customer, use Send via WhatsApp or Send via email on the invoice. These use the phone number or email saved on the customer."
        ]
      },
      {
        title: "Good to know",
        bullets: [
          "The free plan covers one company and up to 3 new invoices a day. Pro is a subscription that removes the limit.",
          "Billing the same customer again? Open the earlier invoice and choose Duplicate invoice.",
          "Editing a customer later does not change invoices you have already issued.",
          "Your data lives on your phone only, so back it up from Settings."
        ]
      }
    ],
    faq: [
      ["Can I make an invoice without internet?", "Yes. BillGen works offline and stores your data on your phone. You need a connection only to send the PDF by WhatsApp or email."],
      ["Is BillGen free?", "The free plan covers one company and up to 3 new invoices a day. Pro is a subscription that removes the limit and adds features such as recurring invoices, payment follow-ups and your own logo."],
      ["Can I put my logo on the invoice?", "A company logo is a Pro feature. The header and footer text come from Settings, under Branding."],
      ["How do I record that a customer has paid?", "Open the invoice and choose Record payment. Enter the amount, date and method. A part payment marks the invoice Partially paid, and a full payment marks it Paid."]
    ]
  },
  {
    slug: "vat-invoice-app-uae-saudi-oman",
    appSlug: "billgen",
    title: "Create a VAT invoice on your phone in the UAE, Saudi Arabia or Oman",
    h1: "How to create a VAT invoice on your phone in the UAE, Saudi Arabia or Oman",
    linkText: "How to create a VAT invoice in the UAE, Saudi Arabia or Oman",
    metaDescription: "BillGen has VAT invoice formats for the UAE, Saudi Arabia and Oman on Android. How to set your country rules, issue an invoice, what the Saudi QR code covers, and what BillGen does not do.",
    lead: "BillGen has invoice formats for the UAE, Saudi Arabia and Oman. You choose your country's rules once, and the app checks each invoice for what that country requires before you issue it.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "Set your country rules",
        steps: [
          "In Settings, open Company profile and enter your legal name, address, tax number and currency.",
          "Choose the country rules: UAE, Oman or Saudi Arabia.",
          "In Settings, open Taxes, add the tax rates you charge and choose the default.",
          "On each customer, add their tax number if you want it printed on invoices."
        ]
      },
      {
        title: "Create and issue the invoice",
        steps: [
          "Tap New order on the Dashboard, pick a customer and add the line items.",
          "Create the invoice. With country rules selected, BillGen checks that the invoice has what that country requires before it is issued.",
          "Open the invoice and choose View PDF, then share or print it."
        ],
        after: ["BillGen has tax invoice, simplified invoice and credit note layouts."]
      },
      {
        title: "Saudi Arabia: the QR code",
        paragraphs: [
          "Simplified tax invoices made in BillGen carry the QR code that ZATCA asks for in its generation phase (phase 1).",
          "BillGen does not support the integration phase (phase 2). Sellers already notified for that phase need an approved solution connected to ZATCA."
        ]
      },
      {
        title: "UAE: getting ready for e-invoicing",
        paragraphs: ["UAE businesses will send invoices to other businesses as e-invoices through an accredited service provider. You choose and sign up with that provider yourself; BillGen cannot do it for you. Check the UAE Ministry of Finance website for the current dates."],
        bullets: [
          "In Company profile, with the UAE country rules, add your Tax Identification Number, city, emirate and trade licence or Emirates ID.",
          "On each business customer, switch on Business customer and add their TIN, city and emirate.",
          "On each product, add an HS code for goods or a SAC code for services.",
          "Open an invoice to see what is still missing. Only AED invoices are supported for now."
        ]
      },
      {
        title: "Tax report",
        paragraphs: ["Open Reports to export a tax report as a CSV file, to help prepare your VAT return. BillGen keeps records; it is not tax or financial advice. Check the figures with your accountant before filing."]
      }
    ],
    faq: [
      ["Does BillGen send invoices to ZATCA or a tax authority?", "No. BillGen creates invoices and PDFs on your phone. It does not submit anything to a tax authority."],
      ["Does BillGen support Saudi e-invoicing phase 2?", "No. It adds the phase 1 QR code to simplified tax invoices. The integration phase needs an approved solution connected to ZATCA."],
      ["Can I use BillGen without choosing country rules?", "Yes. There is also a general VAT format."],
      ["Does it work offline?", "Yes. Your data is stored on your phone, and you can back it up and restore it."]
    ]
  },
  {
    slug: "gst-invoice-app-india-upi-qr",
    appSlug: "billgen",
    title: "Create a GST invoice with a UPI QR code on your phone (India)",
    h1: "How to create a GST invoice with a UPI QR code on your phone",
    linkText: "How to create a GST invoice with a UPI QR code",
    metaDescription: "BillGen for Android has an India invoice format with CGST, SGST and IGST, HSN and SAC codes, and a UPI scan-to-pay QR code on unpaid invoices. How to set it up and issue an invoice.",
    lead: "BillGen has an India invoice format. It splits tax into CGST and SGST or charges IGST based on the customer's state, prints HSN and SAC codes, and puts a UPI scan-to-pay QR code on unpaid invoices.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "Set it up",
        steps: [
          "In Settings, open Company profile and enter your legal name, address and tax number, and choose the India country rules.",
          "Add your UPI ID in the Company profile. It is optional and should look like name@bank.",
          "In Settings, open Taxes, add the GST rates you charge and choose the default.",
          "On each product, add the HSN code for goods or the SAC code for services.",
          "On each customer, enter the State or region. It decides whether tax is split into CGST and SGST or charged as IGST."
        ]
      },
      {
        title: "Create the invoice",
        steps: [
          "Tap New order on the Dashboard, pick a customer and add the line items.",
          "Create the invoice. With the India rules selected, BillGen checks that it has what is required before it is issued.",
          "Open the invoice and choose View PDF, then share or print it, or send it by WhatsApp or email."
        ],
        after: ["BillGen has tax invoice, bill of supply and credit note layouts. A bill of supply carries no tax lines."]
      },
      {
        title: "The UPI QR code",
        paragraphs: ["When your company has a UPI ID, unpaid invoices show a QR code with the caption \"Scan to pay with any UPI app\". The customer scans it from the PDF or the printout and pays the amount due. When the money arrives, open the invoice and record the payment with UPI as the method."]
      },
      {
        title: "Tax report",
        paragraphs: ["Open Reports to export a tax report as a CSV file, to help prepare your GST return. BillGen keeps records; it is not tax or financial advice. Check the figures with your accountant before filing."]
      }
    ],
    faq: [
      ["Does BillGen file GST returns or generate e-invoices on the government portal?", "No. BillGen creates invoices and PDFs on your phone and can export a tax report as CSV. It does not submit anything to a government portal."],
      ["Do I need a UPI ID to use BillGen?", "No. The UPI ID is optional. Without it, invoices are issued without the scan-to-pay QR code."],
      ["Can I issue a bill of supply?", "Yes. BillGen has a bill of supply layout, which carries no tax lines."],
      ["Is BillGen free?", "The free plan covers one company and up to 3 new invoices a day. Pro is a subscription that removes the limit."]
    ]
  },
  {
    slug: "gaming-hud-overlay-android",
    appSlug: "game-mode-pro",
    title: "How to show a HUD overlay over your games on Android",
    h1: "How to show a HUD overlay over your games on Android",
    linkText: "How to show a HUD overlay over your games",
    metaDescription: "Game Mode Pro for Android floats a small HUD over your game with estimated FPS and alerts for heat and low battery. How to set it up, and what each number means.",
    lead: "Game Mode Pro floats a small bubble over your game that opens into a HUD. It shows estimated FPS and warns you when the phone runs hot or the battery runs low.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "Set it up",
        steps: [
          "Install Game Mode Pro from Google Play and open it.",
          "On the setup screen, grant Display over other apps. It is the only access the app requires. The other three can be added later.",
          "Open the Tools tab and turn on Overlay HUD.",
          "On Android 13 or later, allow notifications when the app asks.",
          "Open your game. The bubble stays on top of it. Drag the bubble to move it, and open it to see the full HUD."
        ]
      },
      {
        title: "What the numbers mean",
        bullets: [
          "FPS (est.): an estimate read from your screen's refresh signal. It is not a number reported by the game, so treat it as a guide.",
          "BAT and TEMP: battery level and battery temperature.",
          "THR: thermal headroom, which shows how close the phone is to slowing itself down to cool off. It needs Android 11 or later.",
          "RAM: memory in use.",
          "PING: the time it takes to reach a public internet server over Wi-Fi, in milliseconds. It is not the ping to your game's server, and it shows a dash on mobile data."
        ],
        after: ["The free HUD shows estimated FPS. RAM, battery, thermal headroom and ping in the HUD are part of Pro."]
      },
      {
        title: "Alerts",
        paragraphs: ["Turn on HUD alerts in the Tools tab to get a banner when a value goes into the red, with a vibration if you want one. Temperature and battery alerts are free. FPS and ping alerts are part of Pro."]
      },
      {
        title: "Start the HUD with the game",
        paragraphs: ["A home screen shortcut or the Game Mode Pro widget opens the game and the HUD together. To make a shortcut, open the Games tab and use the add-to-home-screen button on the game's card. With Pro, Auto-detect games in the Tools tab starts a session and the HUD whenever you open a game from your library. Auto-detect needs Usage access."]
      }
    ],
    faq: [
      ["Is the FPS number accurate?", "It is an estimate from your screen's refresh signal, so it follows what the display is doing rather than the game's internal frame rate."],
      ["Does the HUD need root?", "No. It needs the Display over other apps permission only."],
      ["Does the HUD work on mobile data?", "Yes. Only the ping reading needs Wi-Fi."],
      ["Does Game Mode Pro make games run faster?", "No. It does not change CPU or GPU speeds."],
      ["Is the HUD free?", "The HUD with estimated FPS and the temperature and battery alerts are free. Pro is a subscription that adds the other readings."]
    ]
  },
  {
    slug: "set-120hz-refresh-rate-for-games-android",
    appSlug: "game-mode-pro",
    title: "How to set 120 Hz for games on Android without root",
    h1: "How to set a 120 Hz refresh rate for games on Android without root",
    linkText: "How to set 120 Hz for games without root",
    metaDescription: "Game Mode Pro can switch an Android screen to its highest refresh rate when a game starts and restore your setting afterwards, using the free Shizuku app instead of root. Setup steps and limits.",
    lead: "Game Mode Pro can switch your screen to its highest refresh rate when a game session starts and put your own setting back when it ends. It uses the free Shizuku app instead of root, and not every phone allows it.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "What you need",
        bullets: [
          "A phone with a 90 Hz, 120 Hz or faster screen.",
          "Game Mode Pro, free on Google Play.",
          "Shizuku, a free app that lets other apps use system settings you approve, without root."
        ]
      },
      {
        title: "Set it up",
        steps: [
          "In Game Mode Pro, open the Tools tab and find the Refresh Rate Control card.",
          "Tap Get Shizuku and install it.",
          "Tap Open Shizuku and start its service, following the instructions inside Shizuku.",
          "Back in Game Mode Pro, tap Grant and allow access when Shizuku asks.",
          "Tap Enable. This is a one-time grant.",
          "The card now reads \"Refresh-rate control active\"."
        ]
      },
      {
        title: "Choose a profile for each game",
        steps: [
          "Open the Games tab.",
          "On a game's card, tap the profile name and choose Performance, Balanced or Battery Saver."
        ],
        after: [
          "Performance sets the highest refresh rate your screen supports. Battery Saver sets 60 Hz. Balanced leaves your setting as it is.",
          "The profile applies when a session for that game starts. When the session ends, Game Mode Pro restores the setting you had before."
        ]
      },
      {
        title: "Limits",
        paragraphs: [
          "Refresh rate control changes Android's own display settings. Some phones and Android versions refuse the change, and Android 16 may reject the peak refresh setting. If nothing changes on your phone, the app cannot force it.",
          "A higher refresh rate does not make a game draw more frames. A game that is capped at 60 frames per second stays at 60."
        ]
      }
    ],
    faq: [
      ["Does this need root?", "No. It uses Shizuku, which works without root."],
      ["Is refresh rate control free?", "Yes. Refresh rate profiles are in the free plan."],
      ["Will 120 Hz make my game run at 120 FPS?", "Only if the game itself can render that many frames. The profile sets the screen's refresh rate, not the game's frame rate."],
      ["Does it work on Samsung phones?", "Game Mode Pro uses Samsung's refresh rate setting on Samsung phones and Android's standard setting on others. Whether the change is accepted depends on the phone and the Android version."]
    ]
  },
  {
    slug: "stop-accidental-touches-notifications-while-gaming",
    appSlug: "game-mode-pro",
    title: "How to stop accidental touches and notifications while gaming on Android",
    h1: "How to stop accidental touches and notifications while gaming on Android",
    linkText: "How to stop accidental touches and notifications while gaming",
    metaDescription: "Game Mode Pro for Android puts a touch lock and a Do Not Disturb switch in a floating HUD. How to lock the screen against stray touches and silence notifications without leaving your game.",
    lead: "Game Mode Pro puts a touch lock and a Do Not Disturb switch in a floating HUD, so you can block stray touches and silence notifications without leaving your game.",
    published: "2026-11-17",
    publishedText: "17 November 2026",
    sections: [
      {
        title: "Lock the screen against touches",
        steps: [
          "In Game Mode Pro, open the Tools tab and turn on Overlay HUD, then open your game.",
          "Open the HUD from the bubble and tap Lock.",
          "The screen now ignores touches. To unlock it, hold the lock icon for about a second and a half."
        ],
        after: ["Touch lock helps when a game plays by itself for a while, or during a cutscene or a loading screen."]
      },
      {
        title: "Silence notifications",
        steps: [
          "Grant Do Not Disturb access. Game Mode Pro asks for it on the setup screen, and the Tools tab shows a Grant DND button until you do.",
          "Tap DND in the HUD, or in Quick Controls on the Tools tab."
        ],
        after: ["DND switches Android's Do Not Disturb to priority only, so only the interruptions you allow in Android's Do Not Disturb settings come through. It is a switch, not a timer. Tap DND again to turn it off when you finish playing."]
      },
      {
        title: "Set the brightness",
        paragraphs: ["Quick Controls also has a brightness slider. It needs the Modify system settings access. Moving the slider turns adaptive brightness off, and the Auto toggle turns it back on."]
      },
      {
        title: "Screenshots and recording",
        paragraphs: ["Tap Shot in the HUD to save a screenshot to the Game Mode Pro folder in Pictures. The bubble hides itself while the picture is taken. Recordings are saved to the Game Mode Pro folder in Movies at 720p, 1080p or native resolution, as video only with no sound. Android asks for permission each time you capture the screen. Starting a recording from the HUD is part of Pro."]
      }
    ],
    faq: [
      ["Are touch lock and Do Not Disturb free?", "Yes. Touch lock, the Do Not Disturb switch, the brightness slider and screenshots are in the free plan."],
      ["Does Game Mode Pro turn Do Not Disturb off when I stop playing?", "No. You turn it off yourself with the same DND switch."],
      ["How do I unlock the screen after a touch lock?", "Hold the lock icon for about a second and a half."],
      ["Do recordings include sound?", "No. Recordings are video only."]
    ]
  }
];

module.exports = { ORIGIN, OWNER, CHECKED, CHECKED_TEXT, icon, play, apps, guides };
