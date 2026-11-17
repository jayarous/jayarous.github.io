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
    price: "Free to start with a limited number of invoices. Pro removes the limit and unlocks extra features.",
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
      ["Is BillGen free?", "You can start free with a limited number of invoices. Upgrading to Pro removes the limit and unlocks extra features."],
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
    title: "Game Mode Pro: game mode and FPS overlay for Android",
    h1: "Game Mode Pro, a gaming companion with a live FPS and ping overlay",
    cardSummary: "Starts a game session automatically, shows live FPS, ping and battery, and silences distractions while you play.",
    metaDescription: "Game Mode Pro is an Android app that starts a game session automatically, shows FPS, ping and battery in a floating overlay, and silences notifications. No ads. Free to install on Google Play.",
    lead: "Game Mode Pro is an Android app for more focused gaming sessions. It starts a session when you open a game, shows FPS, network ping and battery level in a small floating overlay, and keeps notifications and accidental touches out of the way.",
    storeCategory: "Tools",
    schemaCategory: "UtilitiesApplication",
    price: "Free to install. A Basic or Pro subscription unlocks the full toolset and includes a 7-day free trial.",
    updated: "14 November 2026",
    audienceTitle: "Who Game Mode Pro is for",
    audience: [
      "Players who want to see frame rate while they play",
      "Players who want to watch their connection quality",
      "Anyone who wants a distraction-free way to play on Android"
    ],
    groups: [
      {
        title: "During a game",
        items: [
          ["Automatic game detection", "Add your games to the library and a session starts the moment you launch one, with no manual switching."],
          ["Live performance overlay", "A lightweight floating overlay shows FPS, network ping and battery level in real time."],
          ["Focus tools", "Silence notifications during a session and lock accidental touches."],
          ["Quick tools", "One-tap access from the overlay to a memory optimizer, screenshots, screen recording and other session utilities, without leaving the game."]
        ]
      },
      {
        title: "After a game",
        items: [
          ["Session history", "Review past sessions and settings. They are stored on your device."]
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
      ["What does the Game Mode Pro overlay show?", "FPS, network ping and battery level, updated in real time while you play."],
      ["Does Game Mode Pro start automatically when I open a game?", "Yes. Add a game to your library and Game Mode Pro starts a session when you launch it."],
      ["Is Game Mode Pro free?", "It is free to install. The full toolset needs a Basic or Pro subscription, which includes a 7-day free trial and can be cancelled at any time through Google Play."],
      ["Does Game Mode Pro show ads or collect analytics?", "No. Game Mode Pro contains no ads and no third-party analytics, and your session and settings data stays on your device."],
      ["Can I take screenshots or record the screen from Game Mode Pro?", "Yes. Screenshot and screen recording are among the one-tap quick tools in the overlay."]
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

module.exports = { ORIGIN, OWNER, CHECKED, CHECKED_TEXT, icon, play, apps };
