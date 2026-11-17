(function () {
  "use strict";

  var cfg = window.SITE || {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Fill in details from site.config.js ---------- */
  var name = cfg.name || "Your Name";
  document.querySelectorAll('[data-fill="name"]').forEach(function (el) {
    el.textContent = name;
  });
  document.title = name + " | Websites, apps and software";
  document.getElementById("year").textContent = new Date().getFullYear();
  if (cfg.location) {
    document.getElementById("footer-location").textContent = ", " + cfg.location;
  }

  var whatsappDigits = String(cfg.whatsapp || "").replace(/\D/g, "");
  var waLink = document.getElementById("link-whatsapp");
  if (whatsappDigits) {
    waLink.href = "https://wa.me/" + whatsappDigits + "?text=" +
      encodeURIComponent("Hi " + name + ", I have a project in mind.");
    waLink.hidden = false;
  }

  var emailLink = document.getElementById("link-email");
  if (cfg.email) {
    emailLink.href = "mailto:" + cfg.email;
    emailLink.hidden = false;
  }

  var socials = document.getElementById("socials");
  Object.keys(cfg.socials || {}).forEach(function (label) {
    var url = cfg.socials[label];
    if (!url) return;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = label;
    li.appendChild(a);
    socials.appendChild(li);
  });

  var playLink = document.getElementById("link-play");
  if (cfg.playStore) {
    playLink.href = cfg.playStore;
    playLink.hidden = false;
  }

  /* ---------- Projects ---------- */
  var projectsEl = document.getElementById("projects");
  (cfg.projects || []).forEach(function (p) {
    var card = document.createElement("article");
    card.className = "project";
    card.dataset.kind = p.kind || "Website";

    var thumb = document.createElement("div");
    thumb.className = "project-thumb";
    if (p.image) {
      var img = document.createElement("img");
      img.src = p.image;
      img.alt = "Screenshot of " + p.title;
      img.loading = "lazy";
      thumb.appendChild(img);
    } else if (p.icon) {
      var icon = document.createElement("img");
      icon.className = "project-icon";
      icon.src = p.icon;
      icon.alt = p.title + " app icon";
      icon.loading = "lazy";
      thumb.appendChild(icon);
    } else {
      var letter = document.createElement("span");
      letter.setAttribute("aria-hidden", "true");
      letter.textContent = (p.title || p.kind || "W").charAt(0).toUpperCase();
      thumb.appendChild(letter);
    }

    var body = document.createElement("div");
    body.className = "project-body";
    var kind = document.createElement("span");
    kind.className = "project-kind";
    kind.textContent = p.kind || "";
    var title = document.createElement("h3");
    title.textContent = p.title || "";
    var summary = document.createElement("p");
    summary.textContent = p.summary || "";
    body.appendChild(kind);
    body.appendChild(title);
    body.appendChild(summary);
    if (p.link) {
      var link = document.createElement("a");
      link.className = "project-link";
      link.href = p.link;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = p.linkLabel || "Visit project";
      body.appendChild(link);
    }

    card.appendChild(thumb);
    card.appendChild(body);
    projectsEl.appendChild(card);
  });

  /* ---------- Hero demo: a request turns into a product ---------- */
  var briefs = {
    site: "I run a small bakery. I need a website where people can see the menu and order for pickup.",
    app: "I want an app where my family logs what we spend, so we can see where the month goes.",
    tool: "We track invoices in a spreadsheet and keep forgetting who has paid. Can you fix that?"
  };
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".demo-tabs [role=tab]"));
  var panel = document.getElementById("demo-panel");
  var briefText = document.getElementById("brief-text");
  var build = document.getElementById("build");
  var typingTimer = null;

  function showDemo(key, animate) {
    clearTimeout(typingTimer);
    tabs.forEach(function (tab) {
      var on = tab.dataset.demo === key;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      if (on) panel.setAttribute("aria-labelledby", tab.id);
    });
    document.querySelectorAll("[data-mock]").forEach(function (mock) {
      mock.hidden = mock.dataset.mock !== key;
    });

    var text = briefs[key];
    if (!animate || reduceMotion) {
      briefText.classList.remove("is-typing");
      briefText.textContent = text;
      build.classList.add("is-built");
      return;
    }

    build.classList.remove("is-built");
    briefText.setAttribute("aria-label", text);
    briefText.textContent = "";
    briefText.classList.add("is-typing");
    var i = 0;
    (function type() {
      briefText.textContent = text.slice(0, i);
      if (i < text.length) {
        i += 1;
        typingTimer = setTimeout(type, 16);
      } else {
        briefText.classList.remove("is-typing");
        build.classList.add("is-built");
      }
    })();
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      showDemo(tab.dataset.demo, true);
    });
    tab.addEventListener("keydown", function (event) {
      var step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (!step) return;
      event.preventDefault();
      var next = tabs[(index + step + tabs.length) % tabs.length];
      next.focus();
      showDemo(next.dataset.demo, true);
    });
  });
  showDemo("site", true);

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  function setStatus(message, isError) {
    status.textContent = message;
    status.classList.toggle("is-error", Boolean(isError));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var missing = null;
    ["f-name", "f-contact", "f-message"].forEach(function (id) {
      var input = document.getElementById(id);
      var empty = !input.value.trim();
      input.classList.toggle("is-invalid", empty);
      input.setAttribute("aria-invalid", empty ? "true" : "false");
      if (empty && !missing) missing = input;
    });
    if (missing) {
      setStatus("Fill in your name, a way to reach you and a short description.", true);
      missing.focus();
      return;
    }

    var data = new FormData(form);
    var summary =
      "Name: " + data.get("name") + "\n" +
      "Contact: " + data.get("contact") + "\n" +
      "Needs: " + data.get("kind") + "\n\n" +
      data.get("message");

    if (cfg.formEndpoint) {
      var button = form.querySelector("button[type=submit]");
      button.disabled = true;
      setStatus("Sending message…");
      fetch(cfg.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Request failed");
          form.reset();
          setStatus("Message sent. I will reply soon.");
        })
        .catch(function () {
          setStatus("The message did not send. Try again, or use WhatsApp or email instead.", true);
        })
        .then(function () {
          button.disabled = false;
        });
      return;
    }

    if (cfg.email) {
      window.location.href = "mailto:" + cfg.email +
        "?subject=" + encodeURIComponent("New project enquiry from " + data.get("name")) +
        "&body=" + encodeURIComponent(summary);
      setStatus("Your email app has opened with the message ready to send.");
      return;
    }

    if (whatsappDigits) {
      window.open("https://wa.me/" + whatsappDigits + "?text=" + encodeURIComponent(summary), "_blank", "noopener");
      setStatus("WhatsApp has opened with the message ready to send.");
      return;
    }

    setStatus("This form is not connected yet. Add contact details in site.config.js.", true);
  });
})();
