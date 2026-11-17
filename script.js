(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

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

  if (tabs.length && panel && briefText && build) {
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
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  // Paste a form service address (for example from formspree.io) into the
  // form's data-endpoint attribute in index.html to deliver messages directly.
  var endpoint = form.getAttribute("data-endpoint") || "";
  var emailLink = document.getElementById("link-email");
  var email = emailLink ? emailLink.getAttribute("href").replace(/^mailto:/, "") : "";

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

    if (endpoint) {
      var button = form.querySelector("button[type=submit]");
      button.disabled = true;
      setStatus("Sending message…");
      fetch(endpoint, {
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

    if (email) {
      window.location.href = "mailto:" + email +
        "?subject=" + encodeURIComponent("New project enquiry from " + data.get("name")) +
        "&body=" + encodeURIComponent(summary);
      setStatus("Your email app has opened with the message ready to send.");
      return;
    }

    setStatus("This form is not connected yet. Use WhatsApp or email instead.", true);
  });
})();
