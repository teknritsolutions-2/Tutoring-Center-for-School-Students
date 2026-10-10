(() => {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");
  const page = location.pathname.split("/").pop() || "index.html";

  const brandMarkup = `
    <img class="brand-mark" src="../assets/images/favicon.svg" alt="">
    <span class="brand-text">Fieldnote <span>Learning Centre</span></span>`;

  const themeIconMarkup = `
    <span class="theme-icon" aria-hidden="true">
      <svg class="icon-moon" viewBox="0 0 24 24" focusable="false"><path d="M20.4 15.4A8.8 8.8 0 0 1 8.6 3.6 8.8 8.8 0 1 0 20.4 15.4Z"/></svg>
      <svg class="icon-sun" viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="3.6"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>
    </span>`;

  const footerContactIcons = {
    phone: `<svg viewBox="0 0 24 24" focusable="false"><path d="M7.1 3.5 9 7.7 6.8 9.3a15.2 15.2 0 0 0 7.9 7.9l1.6-2.2 4.2 1.9v2.4c0 .7-.5 1.3-1.2 1.4C10.7 21.6 2.4 13.3 3.3 4.7c.1-.7.7-1.2 1.4-1.2h2.4Z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
    location: `<svg viewBox="0 0 24 24" focusable="false"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
    hours: `<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  };

  const publicLinks = [
    ["about.html", "About"],
    ["courses.html", "Courses"],
    ["tutors.html", "Tutors"],
    ["fees.html", "Fees"],
    ["results.html", "Results"],
    ["contact.html", "Contact"],
  ];

  const isCurrent = (href) => {
    if (href === page) return ' aria-current="page"';
    if (
      href === "courses.html" &&
      ["course-details.html", "grade-6-8.html", "grade-9-10.html", "grade-11-12.html"].includes(page)
    )
      return ' aria-current="page"';
    if (href === "tutors.html" && page === "tutor-details.html") return ' aria-current="page"';
    return "";
  };

  function renderPublicChrome() {
    const headerSlot = document.querySelector("[data-site-header]");
    const footerSlot = document.querySelector("[data-site-footer]");

    if (headerSlot) {
      headerSlot.outerHTML = `
        <header class="site-header" data-header>
          <a class="skip-link" href="#main-content">Skip to content</a>
          <div class="container nav-shell">
            <a class="brand" href="index.html" aria-label="Fieldnote Learning Centre home">${brandMarkup}</a>
            <nav class="desktop-nav" aria-label="Primary navigation">
              <div class="nav-dropdown" data-dropdown>
                <button type="button" aria-expanded="false"${["index.html", "home-2.html"].includes(page) ? ' aria-current="page"' : ""}>Home <span class="dropdown-arrow" aria-hidden="true"></span></button>
                <div class="dropdown-menu">
                  <a href="index.html"${isCurrent("index.html")}>Home Page 1</a>
                  <a href="home-2.html"${isCurrent("home-2.html")}>Home Page 2</a>
                </div>
              </div>
              ${publicLinks.map(([href, label]) => `<a href="${href}"${isCurrent(href)}>${label}</a>`).join("")}
            </nav>
            <div class="desktop-actions">
              <button class="compact-action theme-action" type="button" data-theme-toggle aria-label="Switch theme">${themeIconMarkup}</button>
              <button class="compact-action direction-action" type="button" data-direction-toggle aria-label="Switch to right-to-left direction"><span data-direction-label>RTL</span></button>
              <a class="btn btn-secondary" href="login.html">Login</a>
              <a class="btn" href="dashboard.html">Student Portal</a>
            </div>
            <button class="menu-button" type="button" data-drawer-open aria-label="Open menu" aria-expanded="false"><span class="hamburger-lines" aria-hidden="true"></span></button>
          </div>
        </header>
        ${drawerMarkup(false)}`;
    }

    if (footerSlot) {
      footerSlot.outerHTML = `
        <footer class="site-footer">
          <div class="container footer-main">
            <div class="footer-brand">
              <a class="brand" href="index.html">${brandMarkup}</a>
              <p>A neighborhood tuition centre for Grades 6–12, built around clear teaching, useful feedback, and steady progress.</p>
            </div>
            <div class="footer-col"><h3>Explore</h3><a href="index.html">Home Page 1</a><a href="home-2.html">Home Page 2</a><a href="about.html">About</a><a href="results.html">Results</a><a href="testimonials.html">Testimonials</a><a href="contact.html">Contact</a></div>
            <div class="footer-col"><h3>Academics</h3><a href="courses.html">Courses</a><a href="grade-6-8.html">Grade 6–8</a><a href="grade-9-10.html">Grade 9–10</a><a href="grade-11-12.html">Grade 11–12</a><a href="tutors.html">Tutors</a><a href="fees.html">Fees</a><a href="faq.html">FAQ</a></div>
            <div class="footer-col"><h3>Student Portal</h3><a href="login.html">Student Login</a><a href="dashboard.html">Dashboard</a><a href="dashboard-timetable.html">Timetable</a><a href="dashboard-attendance.html">Attendance</a><a href="dashboard-materials.html">Study Materials</a><a href="dashboard-tests.html">Tests &amp; Results</a></div>
            <div class="footer-col footer-contact">
              <h3>Contact</h3>
              <div class="footer-contact-list">
                <a class="footer-contact-item" href="tel:+918012345678">
                  <span class="footer-contact-icon" aria-hidden="true">${footerContactIcons.phone}</span>
                  <span class="footer-contact-copy">+91 80 1234 5678</span>
                </a>
                <a class="footer-contact-item" href="mailto:hello@fieldnotelearning.example">
                  <span class="footer-contact-icon" aria-hidden="true">${footerContactIcons.email}</span>
                  <span class="footer-contact-copy">hello@fieldnotelearning.example</span>
                </a>
                <div class="footer-contact-item">
                  <span class="footer-contact-icon" aria-hidden="true">${footerContactIcons.location}</span>
                  <p class="footer-contact-copy">42, 6th Main Road,<br>Indiranagar, Bengaluru 560038</p>
                </div>
                <div class="footer-contact-item">
                  <span class="footer-contact-icon" aria-hidden="true">${footerContactIcons.hours}</span>
                  <p class="footer-contact-copy">Mon–Fri 2:00–8:00 PM<br>Sat 9:00 AM–5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container footer-bottom"><span>© 2026 Fieldnote Learning Centre · Bengaluru</span><span class="footer-legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms</a></span></div>
        </footer>
        <button class="back-top" type="button" data-back-top aria-label="Back to top">↑</button>
        <div class="toast" role="status" aria-live="polite" data-toast></div>`;
    }
  }

  function drawerMarkup(dashboard) {
    const links = dashboard
      ? [
          ["dashboard.html", "Overview"],
          ["dashboard-timetable.html", "My Timetable"],
          ["dashboard-attendance.html", "Attendance"],
          ["dashboard-materials.html", "Study Materials"],
          ["dashboard-tests.html", "Tests & Results"],
          ["dashboard-profile.html", "Profile & Settings"],
        ]
      : [
          ["index.html", "Home Page 1"],
          ["home-2.html", "Home Page 2"],
          ...publicLinks,
          ["testimonials.html", "Testimonials"],
          ["faq.html", "FAQ"],
          ["login.html", "Login"],
          ["dashboard.html", "Student Portal"],
        ];
    return `
      <div class="drawer-backdrop" data-drawer-backdrop></div>
      <aside class="drawer" data-drawer aria-hidden="true" aria-label="${dashboard ? "Student portal" : "Site"} menu">
        <div class="drawer-head">
          <a class="brand" href="${dashboard ? "dashboard.html" : "index.html"}">${brandMarkup}</a>
          <button class="drawer-close" type="button" data-drawer-close aria-label="Close menu">×</button>
        </div>
        <nav class="drawer-nav" aria-label="Drawer navigation">
          ${links.map(([href, label]) => `<a href="${href}"${isCurrent(href)}>${label}</a>`).join("")}
          ${dashboard ? '<a href="login.html">Logout</a>' : ""}
        </nav>
        <div class="drawer-settings">
          <div><div class="setting-label">Display</div><div class="segmented"><button type="button" data-set-theme="light">Light</button><button type="button" data-set-theme="dark">Dark</button></div></div>
          <div><div class="setting-label">Direction</div><div class="segmented"><button type="button" data-set-direction="ltr">LTR</button><button type="button" data-set-direction="rtl">RTL</button></div></div>
        </div>
      </aside>`;
  }

  function preferredTheme() {
    const stored = localStorage.getItem("fieldnote-theme");
    if (stored === "light" || stored === "dark") return stored;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme, persist = true) {
    root.dataset.theme = theme;
    if (persist) localStorage.setItem("fieldnote-theme", theme);
    document
      .querySelectorAll("[data-set-theme]")
      .forEach((button) => button.classList.toggle("is-active", button.dataset.setTheme === theme));
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const target = theme === "light" ? "dark" : "light";
      button.setAttribute("aria-label", `Switch to ${target} mode`);
    });
  }

  function setDirection(direction, persist = true) {
    root.dir = direction;
    if (persist) localStorage.setItem("fieldnote-direction", direction);
    document
      .querySelectorAll("[data-set-direction]")
      .forEach((button) => button.classList.toggle("is-active", button.dataset.setDirection === direction));
    document.querySelectorAll("[data-direction-label]").forEach((label) => {
      label.textContent = direction === "ltr" ? "RTL" : "LTR";
    });
    document
      .querySelectorAll("[data-direction-toggle]")
      .forEach((button) =>
        button.setAttribute(
          "aria-label",
          direction === "ltr" ? "Switch to right-to-left direction" : "Switch to left-to-right direction",
        ),
      );
  }

  function initThemeAndDirection() {
    setTheme(preferredTheme(), false);
    setDirection(localStorage.getItem("fieldnote-direction") === "rtl" ? "rtl" : "ltr", false);
    document.addEventListener("click", (event) => {
      const toggle = event.target.closest("[data-theme-toggle]");
      if (toggle) setTheme(root.dataset.theme === "dark" ? "light" : "dark");
      const themeChoice = event.target.closest("[data-set-theme]");
      if (themeChoice) setTheme(themeChoice.dataset.setTheme);
      const directionToggle = event.target.closest("[data-direction-toggle]");
      if (directionToggle) setDirection(root.dir === "rtl" ? "ltr" : "rtl");
      const directionChoice = event.target.closest("[data-set-direction]");
      if (directionChoice) setDirection(directionChoice.dataset.setDirection);
    });
  }

  function initDrawer() {
    const drawer = document.querySelector("[data-drawer]");
    const backdrop = document.querySelector("[data-drawer-backdrop]");
    const openButton = document.querySelector("[data-drawer-open]");
    const closeButton = document.querySelector("[data-drawer-close]");
    if (!drawer || !backdrop || !openButton) return;
    let previousFocus = null;

    const setOpen = (open) => {
      drawer.classList.toggle("is-open", open);
      backdrop.classList.toggle("is-open", open);
      drawer.setAttribute("aria-hidden", String(!open));
      openButton.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("drawer-open", open);
      if (open) {
        previousFocus = document.activeElement;
        closeButton?.focus();
      } else if (previousFocus) {
        previousFocus.focus();
      }
    };

    openButton.addEventListener("click", () => setOpen(true));
    closeButton?.addEventListener("click", () => setOpen(false));
    backdrop.addEventListener("click", () => setOpen(false));
    drawer.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (event) => {
      if (!drawer.classList.contains("is-open")) return;
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const focusable = [
          ...drawer.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'),
        ].filter((element) => !element.disabled);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
    addEventListener("resize", () => {
      if (innerWidth > 1024) setOpen(false);
    });
  }

  function initDropdowns() {
    document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
      const button = dropdown.querySelector("button");
      button?.addEventListener("click", () => {
        const open = dropdown.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(open));
      });
      dropdown.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        dropdown.classList.remove("is-open");
        button?.setAttribute("aria-expanded", "false");
        button?.focus();
      });
    });
    document.addEventListener("click", (event) => {
      document.querySelectorAll("[data-dropdown].is-open").forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove("is-open");
          dropdown.querySelector("button")?.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  function initAccordions() {
    document.querySelectorAll(".faq-question").forEach((button) => {
      button.addEventListener("click", () => {
        const open = button.getAttribute("aria-expanded") === "true";
        const group = button.closest(".faq-list");
        group?.querySelectorAll(".faq-question").forEach((item) => item.setAttribute("aria-expanded", "false"));
        button.setAttribute("aria-expanded", String(!open));
      });
    });
  }

  function initReveal() {
    // Tag all carousel cards and testimonial stats for desktop zoom-in reveal
    document.querySelectorAll(".carousel-card").forEach((card, idx) => {
      card.classList.add("reveal");
      card.style.setProperty("--reveal-index", String((idx % 4) + 1));
    });
    document.querySelectorAll(".testimonial-stat").forEach((stat) => {
      stat.classList.add("reveal");
      stat.style.setProperty("--reveal-index", "0");
    });

    // Tag all 3+ item peer card sections, value cards, process steps, proof items, fee cards, stat items, and dash cards
    const peerContainers = document.querySelectorAll(
      ".card-grid, .value-grid, .fee-grid, .dash-grid, .pathway, .proof-items, .schedule-list, .stat-grid, .trust-grid, .resource-grid, .faq-list, .course-program-grid, .grade-grid, .result-grid",
    );
    peerContainers.forEach((container) => {
      const items = [...container.children].filter((el) => !el.classList.contains("section-head"));
      if (items.length >= 2) {
        items.forEach((item, idx) => {
          item.classList.add("reveal");
          item.style.setProperty("--reveal-index", String(idx % 6));
        });
      }
    });

    // Standalone key visual media and panels
    document
      .querySelectorAll(
        ".journey-photo, .feedback-photo, .tutor-feature-photo, .map-frame, .cta-panel, .spotlight",
      )
      .forEach((el, idx) => {
        el.classList.add("reveal");
        el.style.setProperty("--reveal-index", String(idx % 3));
      });

    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );
    items.forEach((item) => observer.observe(item));
  }

  function autoEnhanceCardGrids() {
    if (document.body.classList.contains("dashboard-body") || location.pathname.includes("dashboard")) return;

    const candidateSelectors = [
      ".course-program-grid",
      ".card-grid:not(.dash-grid):not(.portal-grid)",
      ".value-grid",
      ".fee-grid",
      ".grade-grid",
      ".result-grid",
    ];

    document.querySelectorAll(candidateSelectors.join(", ")).forEach((grid) => {
      if (grid.closest("[data-carousel]") || grid.hasAttribute("data-carousel")) return;

      const items = [...grid.children].filter((el) => !el.classList.contains("section-head"));
      if (items.length < 3) return;

      const carousel = document.createElement("div");
      carousel.className = "carousel";
      carousel.setAttribute("data-carousel", "");
      carousel.setAttribute("tabindex", "0");

      const viewport = document.createElement("div");
      viewport.className = "carousel-viewport";

      const track = document.createElement("div");
      const isFourCol = grid.classList.contains("four");
      const cols = isFourCol ? 4 : 3;
      track.className = `carousel-track ${grid.className} ${isFourCol ? "cols-4" : ""}`.trim();
      track.style.setProperty("--desktop-cols", String(cols));

      items.forEach((item, idx) => {
        item.classList.add("carousel-card", "reveal");
        item.style.setProperty("--reveal-index", String(idx % 6));
        track.appendChild(item);
      });

      viewport.appendChild(track);
      carousel.appendChild(viewport);

      const controls = document.createElement("div");
      controls.className = "carousel-controls";
      controls.innerHTML = `
        <span class="carousel-status" data-carousel-status></span>
        <div class="carousel-arrows">
          <button class="carousel-btn" type="button" data-prev aria-label="Previous card">←</button>
          <button class="carousel-btn" type="button" data-next aria-label="Next card">→</button>
        </div>
      `;
      carousel.appendChild(controls);

      grid.replaceWith(carousel);
    });
  }

  function initCarousels() {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const track = carousel.querySelector(".carousel-track");
      const cards = [...carousel.querySelectorAll(".carousel-card")];
      const prev = carousel.querySelector("[data-prev]");
      const next = carousel.querySelector("[data-next]");
      const status = carousel.querySelector("[data-carousel-status]");
      const controls = carousel.querySelector(".carousel-controls");
      if (!track || cards.length < 2) return;
      let index = 0;
      let timer = null;
      let touchStart = 0;
      let resizeFrame = null;

      const visible = () => (innerWidth >= 640 && innerWidth <= 1024 ? 2 : 1);
      const maxIndex = () => Math.max(0, cards.length - visible());

      const update = () => {
        if (innerWidth > 1024) {
          track.style.transform = "none";
          index = 0;
          if (controls) controls.style.display = "none";
        } else {
          index = Math.min(index, maxIndex());
          const cardWidth = cards[0].offsetWidth || cards[0].getBoundingClientRect().width || 300;
          const gap = parseFloat(getComputedStyle(track).gap) || 16;
          const direction = root.dir === "rtl" ? 1 : -1;
          track.style.transform = `translateX(${direction * index * (cardWidth + gap)}px)`;
          if (controls) controls.style.display = cards.length > visible() ? "flex" : "none";
        }
        if (status) {
          status.textContent = `${index + 1} / ${maxIndex() + 1}`;
        }
      };

      const move = (step) => {
        const m = maxIndex();
        if (m === 0) return;
        index = (index + step + (m + 1)) % (m + 1);
        update();
      };

      const stop = () => {
        if (timer) clearInterval(timer);
        timer = null;
      };

      const start = () => {
        stop();
        if (innerWidth <= 1024 && cards.length > visible() && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
          timer = setInterval(() => move(1), 5000);
        }
      };

      const sync = () => {
        update();
        if (innerWidth > 1024) stop();
        else start();
      };

      prev?.addEventListener("click", (e) => {
        e.preventDefault();
        move(-1);
        start();
      });

      next?.addEventListener("click", (e) => {
        e.preventDefault();
        move(1);
        start();
      });

      carousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") move(root.dir === "rtl" ? 1 : -1);
        if (event.key === "ArrowRight") move(root.dir === "rtl" ? -1 : 1);
      });

      carousel.addEventListener("mouseenter", stop);
      carousel.addEventListener("mouseleave", start);
      carousel.addEventListener("focusin", stop);
      carousel.addEventListener("focusout", start);

      carousel.addEventListener(
        "touchstart",
        (event) => {
          touchStart = event.changedTouches[0].clientX;
          stop();
        },
        { passive: true },
      );

      carousel.addEventListener(
        "touchend",
        (event) => {
          const delta = event.changedTouches[0].clientX - touchStart;
          if (Math.abs(delta) > 40) {
            const physicalStep = delta < 0 ? 1 : -1;
            move(root.dir === "rtl" ? -physicalStep : physicalStep);
          }
          start();
        },
        { passive: true },
      );

      addEventListener("resize", () => {
        if (resizeFrame) cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(sync);
      });

      new MutationObserver(update).observe(root, { attributes: true, attributeFilter: ["dir"] });
      sync();
    });
  }

  function initFilters() {
    const grade = document.querySelector("[data-grade-filter]");
    const subject = document.querySelector("[data-subject-filter]");
    const cards = [...document.querySelectorAll("[data-course-card]")];
    const count = document.querySelector("[data-filter-count]");
    if (!grade || !subject || !cards.length) return;
    const apply = () => {
      let visible = 0;
      cards.forEach((card) => {
        const matchesGrade = grade.value === "all" || card.dataset.grade === grade.value;
        const matchesSubject = subject.value === "all" || card.dataset.subject === subject.value;
        card.hidden = !(matchesGrade && matchesSubject);
        if (!card.hidden) visible += 1;
      });
      if (count) count.textContent = `${visible} course${visible === 1 ? "" : "s"} shown`;
    };
    grade.addEventListener("change", apply);
    subject.addEventListener("change", apply);
    apply();
  }

  function showToast(message) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function initForms() {
    document.querySelectorAll("[data-password-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const input = button.closest(".password-wrap")?.querySelector("input");
        if (!input) return;
        input.type = input.type === "password" ? "text" : "password";
        button.textContent = input.type === "password" ? "Show" : "Hide";
      });
    });

    const validateRequired = (form) => {
      let valid = true;
      form.querySelectorAll("[required]").forEach((input) => {
        const error = form.querySelector(`[data-error-for="${input.id}"]`);
        let message = "";
        if (!input.value.trim()) message = "This field is required.";
        else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))
          message = "Enter a valid email address.";
        else if (input.type === "password" && input.value.length < 6) message = "Use at least 6 characters.";
        input.setAttribute("aria-invalid", String(Boolean(message)));
        if (error) error.textContent = message;
        if (message) valid = false;
      });
      return valid;
    };

    document.querySelectorAll("[data-login-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (validateRequired(form)) location.href = "dashboard.html";
      });
    });

    document.querySelectorAll("[data-register-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (validateRequired(form)) {
          form.querySelector(".form-message")?.classList.add("is-visible");
          setTimeout(() => {
            location.href = "login.html";
          }, 1000);
        }
      });
    });

    document.querySelectorAll("[data-enquiry-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!validateRequired(form)) return;
        form.querySelector(".form-message")?.classList.add("is-visible");
        form.reset();
      });
    });

    document.querySelectorAll("[data-toast-action]").forEach((button) => {
      button.addEventListener("click", () => showToast(button.dataset.toastAction || "Action completed."));
    });
  }

  function initBackToTop() {
    const button = document.querySelector("[data-back-top]");
    if (!button) return;
    const update = () => button.classList.toggle("is-visible", scrollY > 500);
    addEventListener("scroll", update, { passive: true });
    button.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
    update();
  }

  renderPublicChrome();
  initThemeAndDirection();
  initDrawer();
  initDropdowns();
  initAccordions();
  autoEnhanceCardGrids();
  initReveal();
  initCarousels();
  initFilters();
  initForms();
  initBackToTop();
})();
