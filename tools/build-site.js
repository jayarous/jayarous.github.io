/*
  Generates the app pages, the apps overview, sitemap.xml and robots.txt from
  tools/site-data.js, plus the Markdown sources used for llms.txt.
  Run from the site folder:   node tools/build-site.js
*/
const fs = require("fs");
const path = require("path");
const { ORIGIN, OWNER, CHECKED, CHECKED_TEXT, icon, play, apps, guides } = require("./site-data.js");

const root = path.resolve(__dirname, "..");
const work = path.join(root, ".seo-work", "markdown");
const PERSON_ID = ORIGIN + "/#person";
const LINKEDIN = "https://www.linkedin.com/in/jayarous/";
const PLAY_DEV = "https://play.google.com/store/apps/developer?id=Jayarous";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const write = (file, content) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content.replace(/\r\n/g, "\n"));
};
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

/* ---------- Shared page shell ---------- */
function shell({ title, description, urlPath, ogImage, jsonld, main }) {
  const url = ORIGIN + urlPath;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${url}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(OWNER)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url}">${ogImage ? `\n  <meta property="og:image" content="${ogImage}">` : ""}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Sans:wght@400..600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  ${jsonld.map(ld).join("\n  ")}
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="/">${esc(OWNER)}</a>
      <nav class="site-nav" aria-label="Main">
        <a href="/#services">What I build</a>
        <a href="/#work">Work</a>
        <a href="/apps/">Apps</a>
        <a class="nav-cta" href="/#contact">Start a project</a>
      </nav>
    </div>
  </header>

  <main id="main">
${main}
  </main>

  <footer class="site-footer">
    <div class="wrap footer-inner">
      <span>&copy; 2026 ${esc(OWNER)}</span>
      <nav class="footer-nav" aria-label="Footer">
        <a href="/apps/">Apps</a>
        <a href="/guides/">Guides</a>
        <a href="/#contact">Contact</a>
        <a href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn</a>
      </nav>
    </div>
  </footer>
</body>
</html>
`;
}

const crumbs = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: ORIGIN + p }))
});

/* ---------- App pages ---------- */
function appPage(app) {
  const urlPath = `/apps/${app.slug}/`;
  const others = apps.filter((a) => a.slug !== app.slug);
  const main = `    <article class="app">
      <div class="wrap">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/apps/">Apps</a><span aria-hidden="true">/</span><span aria-current="page">${esc(app.name)}</span>
        </nav>

        <header class="app-hero">
          <img class="app-icon" src="${icon(app.iconHash, 256)}" alt="${esc(app.name)} app icon" width="128" height="128">
          <div>
            <h1>${esc(app.h1)}</h1>
            <p class="lede">${esc(app.lead)}</p>
            <div class="actions">
              <a class="btn btn-primary" href="${play(app.pkg)}" target="_blank" rel="noopener">Get ${esc(app.name)} on Google Play</a>
            </div>
          </div>
        </header>

        <dl class="facts">
          <div><dt>Platform</dt><dd>Android</dd></div>
          <div><dt>Price</dt><dd>${esc(app.price)}</dd></div>
          <div><dt>Category on Google Play</dt><dd>${esc(app.storeCategory)}</dd></div>
          <div><dt>Last updated on Google Play</dt><dd>${esc(app.updated)}</dd></div>
          <div><dt>Made by</dt><dd><a href="/">${esc(OWNER)}</a></dd></div>
        </dl>

        <section class="app-section">
          <h2>What ${esc(app.name)} does</h2>
${app.groups.map((g) => `          <div class="feature-group">
            <h3>${esc(g.title)}</h3>
            <dl class="features">
${g.items.map(([t, d]) => `              <div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join("\n")}
            </dl>
          </div>`).join("\n")}
        </section>

        <section class="app-section app-split">
          <div>
            <h2>${esc(app.audienceTitle)}</h2>
            <ul class="ticks">
${app.audience.map((a) => `              <li>${esc(a)}</li>`).join("\n")}
            </ul>
          </div>
          <div>
            <h2>${esc(app.privacyTitle)}</h2>
            <ul class="ticks">
${app.privacy.map((a) => `              <li>${esc(a)}</li>`).join("\n")}
            </ul>
          </div>
        </section>
${app.notes.length ? `
        <section class="app-section">
          <h2>Good to know</h2>
${app.notes.map((n) => `          <p class="note">${esc(n)}</p>`).join("\n")}
        </section>
` : ""}
        <section class="app-section">
          <h2>Questions about ${esc(app.name)}</h2>
          <dl class="faq">
${app.faq.map(([q, a]) => `            <div><dt>${esc(q)}</dt><dd>${esc(a)}</dd></div>`).join("\n")}
          </dl>
${(() => {
    const gs = guides.filter((g) => g.appSlug === app.slug);
    return gs.length ? `          <h3 class="guides-heading">Guides for ${esc(app.name)}</h3>
          <ul class="ticks guide-links">
${gs.map((g) => `            <li><a href="/guides/${g.slug}/">${esc(g.linkText)}</a></li>`).join("\n")}
          </ul>` : "";
  })()}
          <p class="source-note">These details come from the ${esc(app.name)} listing on Google Play, checked on ${CHECKED_TEXT}. The listing has the current version, screenshots and reviews.</p>
        </section>

        <section class="app-cta">
          <div>
            <h2>Get ${esc(app.name)}</h2>
            <p>${esc(app.name)} is available for Android on Google Play.</p>
          </div>
          <a class="btn btn-primary" href="${play(app.pkg)}" target="_blank" rel="noopener">Open ${esc(app.name)} on Google Play</a>
        </section>

        <section class="app-section">
          <h2>More apps by ${esc(OWNER)}</h2>
          <ul class="more-apps">
${others.map((o) => `            <li><a href="/apps/${o.slug}/"><img src="${icon(o.iconHash, 256)}" alt="" width="48" height="48" loading="lazy"><span><strong>${esc(o.name)}</strong> ${esc(o.cardSummary)}</span></a></li>`).join("\n")}
          </ul>
          <p class="note">Need an app like this for your own business? <a href="/#contact">Tell me what you need</a>.</p>
        </section>
      </div>
    </article>`;

  const software = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": ORIGIN + urlPath + "#app",
    name: app.name,
    description: app.lead,
    url: ORIGIN + urlPath,
    installUrl: play(app.pkg),
    image: icon(app.iconHash, 512),
    operatingSystem: "Android",
    applicationCategory: app.schemaCategory,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", "@id": PERSON_ID, name: OWNER, url: ORIGIN + "/" }
  };

  return shell({
    title: app.title,
    description: app.metaDescription,
    urlPath,
    ogImage: icon(app.iconHash, 512),
    jsonld: [software, crumbs([["Home", "/"], ["Apps", "/apps/"], [app.name, urlPath]])],
    main
  });
}

function appMarkdown(app) {
  const lines = [];
  lines.push(`# ${app.h1}`, "", app.lead, "");
  lines.push(`- Platform: Android`, `- Price: ${app.price}`, `- Category on Google Play: ${app.storeCategory}`,
    `- Last updated on Google Play: ${app.updated}`, `- Made by: ${OWNER}`, `- Get it: ${play(app.pkg)}`, "");
  lines.push(`## What ${app.name} does`, "");
  app.groups.forEach((g) => {
    lines.push(`### ${g.title}`, "");
    g.items.forEach(([t, d]) => lines.push(`- **${t}:** ${d}`));
    lines.push("");
  });
  lines.push(`## ${app.audienceTitle}`, "");
  app.audience.forEach((a) => lines.push(`- ${a}`));
  lines.push("", `## ${app.privacyTitle}`, "");
  app.privacy.forEach((a) => lines.push(`- ${a}`));
  if (app.notes.length) {
    lines.push("", "## Good to know", "");
    app.notes.forEach((n) => lines.push(n, ""));
  } else {
    lines.push("");
  }
  lines.push(`## Questions about ${app.name}`, "");
  app.faq.forEach(([q, a]) => lines.push(`### ${q}`, "", a, ""));
  guides.filter((g) => g.appSlug === app.slug).forEach((g) => lines.push(`Guide: ${g.linkText}: ${ORIGIN}/guides/${g.slug}/`, ""));
  lines.push(`Source: the ${app.name} listing on Google Play (${play(app.pkg)}), checked on ${CHECKED_TEXT}.`, "");
  return lines.join("\n");
}

/* ---------- Apps overview ---------- */
const hubLead = `${OWNER} builds and publishes Android apps on Google Play. Each app below has its own page with what it does, what it costs and answers to common questions.`;

function hubPage() {
  const main = `    <section class="section">
      <div class="wrap">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Apps</span>
        </nav>
        <h1 class="page-title">Android apps by ${esc(OWNER)}</h1>
        <p class="lede">${esc(hubLead)}</p>
        <div class="projects">
${apps.map((a) => `          <article class="project" data-kind="App">
            <a class="project-thumb" href="/apps/${a.slug}/" aria-label="About ${esc(a.name)}">
              <img class="project-icon" src="${icon(a.iconHash, 256)}" alt="${esc(a.name)} app icon" width="128" height="128" loading="lazy">
            </a>
            <div class="project-body">
              <span class="project-kind">${esc(a.storeCategory)}</span>
              <h2><a href="/apps/${a.slug}/">${esc(a.name)}</a></h2>
              <p>${esc(a.cardSummary)}</p>
              <p class="project-links">
                <a href="/apps/${a.slug}/">About ${esc(a.name)}</a>
                <a href="${play(a.pkg)}" target="_blank" rel="noopener">Get it on Google Play</a>
              </p>
            </div>
          </article>`).join("\n")}
        </div>
        <p class="note">All four apps are published under the developer name Jayarous. <a href="${PLAY_DEV}" target="_blank" rel="noopener">See the developer page on Google Play</a>.</p>
        <p class="note">Want an app built for you or your company? <a href="/#contact">Start a project</a>.</p>
      </div>
    </section>`;

  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Android apps by ${OWNER}`,
    itemListElement: apps.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.name, url: `${ORIGIN}/apps/${a.slug}/` }))
  };
  return shell({
    title: `Android apps by ${OWNER}`,
    description: "Four Android apps on Google Play by Jayarous Antony KS: Sebry (medication reminders), BillGen (GST and VAT invoices), Game Mode Pro (FPS and ping overlay) and AirGrid (offline nearby chat).",
    urlPath: "/apps/",
    jsonld: [list, crumbs([["Home", "/"], ["Apps", "/apps/"]])],
    main
  });
}

function hubMarkdown() {
  const lines = [`# Android apps by ${OWNER}`, "", hubLead, ""];
  apps.forEach((a) => lines.push(`- **${a.name}** (${a.storeCategory}): ${a.cardSummary} Page: ${ORIGIN}/apps/${a.slug}/ Google Play: ${play(a.pkg)}`));
  lines.push("", `All four apps are published under the developer name Jayarous: ${PLAY_DEV}`, "");
  return lines.join("\n");
}

function homeMarkdown() {
  return `# ${OWNER}: websites, Android apps and custom software

${OWNER} makes websites, Android apps and custom software for people and small companies. You describe what you need in plain words, and you get a working version to try early.

## What I build

- **Websites:** company and portfolio sites, booking and enquiry pages, small online shops.
- **Apps:** trackers and planners, customer and member apps, personal tools.
- **Software:** quotes, invoices and stock tools, dashboards and reports, automations between the tools a business already uses.

Work is available for individuals (personal sites, hobby projects, small scopes) and for companies such as shops, clinics, agencies and service businesses.

## Work

${apps.map((a) => `- **${a.name}** (Android app): ${a.cardSummary} ${ORIGIN}/apps/${a.slug}/`).join("\n")}
- **GemBiz** (company work): an app built for GemBiz.
- **Christeyns** (company work): an app and an internal system built for the Christeyns team.

## How it works

1. You tell me what you need, by message or a short call.
2. I send a price and a plan before any work starts.
3. You try a working version early and say what to change.
4. It goes live, and I stay around to fix things that come up.

## Contact

- WhatsApp: +971 55 626 4431
- Email: jayarous@gmail.com
- LinkedIn: ${LINKEDIN}
- Google Play developer page: ${PLAY_DEV}
`;
}

/* ---------- Guides ---------- */
function guidePage(g) {
  const urlPath = `/guides/${g.slug}/`;
  const app = apps.find((a) => a.slug === g.appSlug);
  const main = `    <article class="app guide">
      <div class="wrap">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/guides/">Guides</a><span aria-hidden="true">/</span><span aria-current="page">${esc(g.h1)}</span>
        </nav>

        <header class="guide-hero">
          <h1>${esc(g.h1)}</h1>
          <p class="lede">${esc(g.lead)}</p>
          <p class="byline">By <a href="/">${esc(OWNER)}</a>, developer of <a href="/apps/${app.slug}/">${esc(app.name)}</a>. Published ${g.publishedText}.</p>
        </header>

${g.sections.map((s) => `        <section class="app-section guide-section">
          <h2>${esc(s.title)}</h2>
${(s.paragraphs || []).map((p) => `          <p>${esc(p)}</p>`).join("\n")}
${s.bullets ? `          <ul class="ticks">\n${s.bullets.map((b) => `            <li>${esc(b)}</li>`).join("\n")}\n          </ul>` : ""}
${s.steps ? `          <ol class="guide-steps">\n${s.steps.map((b) => `            <li>${esc(b)}</li>`).join("\n")}\n          </ol>` : ""}
${(s.after || []).map((p) => `          <p>${esc(p)}</p>`).join("\n")}
        </section>`).join("\n")}

        <section class="app-cta">
          <div>
            <h2>Get ${esc(app.name)}</h2>
            <p>${esc(app.cardSummary)}</p>
          </div>
          <a class="btn btn-primary" href="${play(app.pkg)}" target="_blank" rel="noopener">Open ${esc(app.name)} on Google Play</a>
        </section>

        <section class="app-section">
          <h2>Common questions</h2>
          <dl class="faq">
${g.faq.map(([q, a]) => `            <div><dt>${esc(q)}</dt><dd>${esc(a)}</dd></div>`).join("\n")}
          </dl>
          <p class="note">More about the app: <a href="/apps/${app.slug}/">${esc(app.name)} features, privacy and questions</a>.</p>
        </section>

        <section class="app-section">
          <h2>More guides</h2>
          <ul class="ticks guide-links">
${guides.filter((o) => o.slug !== g.slug && o.appSlug === g.appSlug).map((o) => `            <li><a href="/guides/${o.slug}/">${esc(o.linkText)}</a></li>`).join("\n")}
          </ul>
        </section>
      </div>
    </article>`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.metaDescription,
    datePublished: g.published,
    dateModified: g.published,
    mainEntityOfPage: ORIGIN + urlPath,
    author: { "@type": "Person", "@id": PERSON_ID, name: OWNER, url: ORIGIN + "/" }
  };
  return shell({
    title: g.title,
    description: g.metaDescription,
    urlPath,
    ogImage: icon(app.iconHash, 512),
    jsonld: [article, crumbs([["Home", "/"], ["Guides", "/guides/"], [g.h1, urlPath]])],
    main
  });
}

const guidesLead = `Short how-to guides by ${OWNER} for the Android apps he builds.`;
const guideGroups = [
  { appSlug: "airgrid", heading: "Staying in touch without internet", note: "These guides use AirGrid, an offline chat app for Android." },
  { appSlug: "billgen", heading: "Invoicing on your phone", note: "These guides use BillGen, an invoice maker for Android." },
  { appSlug: "game-mode-pro", heading: "Gaming on Android", note: "These guides use Game Mode Pro, a gaming HUD for Android." },
  { appSlug: "sebry", heading: "Taking medicines on time", note: "These guides use Sebry, a medicine reminder app for Android. Sebry does not provide medical advice." }
];

function guidesHubPage() {
  const main = `    <section class="section">
      <div class="wrap">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Guides</span>
        </nav>
        <h1 class="page-title">Guides</h1>
        <p class="lede">${esc(guidesLead)}</p>
${guideGroups.map((grp) => `        <section class="guide-group">
          <h2>${esc(grp.heading)}</h2>
          <p class="note">${esc(grp.note)} <a href="/apps/${grp.appSlug}/">About ${esc(apps.find((a) => a.slug === grp.appSlug).name)}</a></p>
          <ul class="guide-list">
${guides.filter((g) => g.appSlug === grp.appSlug).map((g) => `            <li>
              <h3><a href="/guides/${g.slug}/">${esc(g.linkText)}</a></h3>
              <p>${esc(g.lead)}</p>
            </li>`).join("\n")}
          </ul>
        </section>`).join("\n")}
      </div>
    </section>`;
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Guides by ${OWNER}`,
    itemListElement: guides.map((g, i) => ({ "@type": "ListItem", position: i + 1, name: g.h1, url: `${ORIGIN}/guides/${g.slug}/` }))
  };
  return shell({
    title: `How-to guides for Android apps | ${OWNER}`,
    description: "How-to guides for Android: chatting without internet with AirGrid, GST and VAT invoices with BillGen, a gaming HUD with Game Mode Pro, and medicine reminders with Sebry.",
    urlPath: "/guides/",
    jsonld: [list, crumbs([["Home", "/"], ["Guides", "/guides/"]])],
    main
  });
}

function guidesHubMarkdown() {
  const lines = ["# Guides", "", guidesLead, ""];
  guideGroups.forEach((grp) => {
    lines.push(`## ${grp.heading}`, "", `${grp.note} ${ORIGIN}/apps/${grp.appSlug}/`, "");
    guides.filter((g) => g.appSlug === grp.appSlug).forEach((g) => lines.push(`- **${g.linkText}:** ${g.lead} ${ORIGIN}/guides/${g.slug}/`));
    lines.push("");
  });
  return lines.join("\n");
}

function guideMarkdown(g) {
  const app = apps.find((a) => a.slug === g.appSlug);
  const lines = [`# ${g.h1}`, "", g.lead, "", `By ${OWNER}, developer of ${app.name}. Published ${g.publishedText}.`, ""];
  g.sections.forEach((s) => {
    lines.push(`## ${s.title}`, "");
    (s.paragraphs || []).forEach((p) => lines.push(p, ""));
    if (s.bullets) { s.bullets.forEach((b) => lines.push(`- ${b}`)); lines.push(""); }
    if (s.steps) { s.steps.forEach((b, i) => lines.push(`${i + 1}. ${b}`)); lines.push(""); }
    (s.after || []).forEach((p) => lines.push(p, ""));
  });
  lines.push("## Common questions", "");
  g.faq.forEach(([q, a]) => lines.push(`### ${q}`, "", a, ""));
  lines.push(`${app.name} page: ${ORIGIN}/apps/${app.slug}/`, `${app.name} on Google Play: ${play(app.pkg)}`, "");
  return lines.join("\n");
}

/* ---------- Write the site files ---------- */
apps.forEach((app) => write(path.join(root, "apps", app.slug, "index.html"), appPage(app)));
guides.forEach((g) => write(path.join(root, "guides", g.slug, "index.html"), guidePage(g)));
write(path.join(root, "guides", "index.html"), guidesHubPage());
write(path.join(root, "apps", "index.html"), hubPage());

const hint1 = `If you are an LLM looking for site information, start at ${ORIGIN}/llms.txt.`;
const hint2 = `Use ${ORIGIN}/sitemap.md to find the relevant topic and its linked Markdown answer; if it is absent, report that gap.`;
const urls = ["/", "/apps/", ...apps.map((a) => `/apps/${a.slug}/`), "/guides/", ...guides.map((g) => `/guides/${g.slug}/`)];

write(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- ${hint1} ${hint2} -->
${urls.map((u) => `  <url><loc>${ORIGIN}${u}</loc><lastmod>${CHECKED}</lastmod></url>`).join("\n")}
</urlset>
`);

write(path.join(root, "robots.txt"), `# ${hint1}
# ${hint2}
User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`);

/* ---------- Markdown sources for llms.txt (private work folder) ---------- */
const revision = `${CHECKED}-seo-1`;
const pages = [
  { id: "home", url: `${ORIGIN}/`, title: `${OWNER}: websites, Android apps and custom software`, purpose: "Who Jayarous Antony KS is, what he builds, his work and how to contact him", topic: "services", body: homeMarkdown() },
  { id: "apps", url: `${ORIGIN}/apps/`, title: `Android apps by ${OWNER}`, purpose: "List of the four Android apps with links to each app page and Google Play", topic: "apps", body: hubMarkdown() },
  ...apps.map((a) => ({ id: a.slug, url: `${ORIGIN}/apps/${a.slug}/`, title: a.title, purpose: `What ${a.name} does, price, privacy and common questions`, topic: "apps", body: appMarkdown(a) })),
  { id: "guides", url: `${ORIGIN}/guides/`, title: `Guides by ${OWNER}`, purpose: "List of how-to guides for AirGrid, BillGen, Game Mode Pro and Sebry", topic: "guides", body: guidesHubMarkdown() },
  ...guides.map((g) => ({ id: g.slug, url: `${ORIGIN}/guides/${g.slug}/`, title: g.title, purpose: `Guide: ${g.linkText}`, topic: "guides", body: guideMarkdown(g) }))
];
pages.forEach((p) => write(path.join(work, "source", `${p.id}.md`), p.body));
write(path.join(work, "inventory.json"), JSON.stringify({
  schema_version: "1.0.0",
  site_name: OWNER,
  summary: "Personal site of Jayarous Antony KS, who builds websites, Android apps and custom software, with a page for each of his four Android apps on Google Play.",
  origin: ORIGIN,
  inventory_scope: "complete",
  inventory_evidence: "All static HTML pages in the site repository, each listed in sitemap.xml: home, apps overview, four app pages and the guides.",
  owner: OWNER,
  refresh_trigger: "Regenerate with tools/build-site.js on every content change or app listing update.",
  index_policy: "independent",
  pages: pages.map((p) => ({
    id: p.id, url: p.url, disposition: "publish", reviewed_public: true, title: p.title, purpose: p.purpose,
    locale: "en", topic: p.topic, updated_at: CHECKED, source_revision: revision,
    body_ref: `source/${p.id}.md`, md_path: `llm/pages/${p.id}.md`
  }))
}, null, 2) + "\n");

console.log("Built", urls.length, "page URLs and", pages.length, "Markdown sources.");
