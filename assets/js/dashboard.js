(() => {
  "use strict";
  const page = location.pathname.split("/").pop() || "dashboard.html";
  const brandMarkup =
    '<img class="brand-mark" src="../assets/images/favicon.svg" alt=""><span class="brand-text">Fieldnote <span>Learning Centre</span></span>';
  const links = [
    ["dashboard.html", "OV", "Overview"],
    ["dashboard-timetable.html", "TT", "My Timetable"],
    ["dashboard-attendance.html", "AT", "Attendance"],
    ["dashboard-materials.html", "SM", "Study Materials"],
    ["dashboard-tests.html", "TR", "Tests & Results"],
    ["dashboard-profile.html", "PS", "Profile & Settings"],
  ];
  const current = (href) => (href === page ? ' aria-current="page"' : "");
  const navMarkup = links
    .map(
      ([href, mark, label]) =>
        `<a href="${href}"${current(href)}><span class="dash-nav-mark" aria-hidden="true">${mark}</span>${label}</a>`,
    )
    .join("");

  const shell = document.querySelector("[data-dashboard-shell]");
  if (shell) {
    shell.insertAdjacentHTML(
      "afterbegin",
      `
      <aside class="dashboard-sidebar">
        <a class="brand" href="dashboard.html">${brandMarkup}</a>
        <nav class="dash-nav" aria-label="Student portal navigation">${navMarkup}</nav>
        <div class="sidebar-bottom">
          <div class="sidebar-settings">
            <div><div class="setting-label">Display</div><div class="segmented"><button type="button" data-set-theme="light">Light</button><button type="button" data-set-theme="dark">Dark</button></div></div>
            <div><div class="setting-label">Direction</div><div class="segmented"><button type="button" data-set-direction="ltr">LTR</button><button type="button" data-set-direction="rtl">RTL</button></div></div>
          </div>
          <div class="dash-nav"><a href="login.html"><span class="dash-nav-mark" aria-hidden="true">↗</span>Logout</a></div>
        </div>
      </aside>
      <div class="dashboard-header">
        <button class="menu-button" type="button" data-drawer-open aria-label="Open portal menu" aria-expanded="false"><span class="hamburger-lines" aria-hidden="true"></span></button>
        <a class="brand" href="dashboard.html">${brandMarkup}</a>
        <div class="dashboard-header-actions"><a class="btn btn-secondary" href="login.html">Logout</a></div>
      </div>
      <div class="drawer-backdrop" data-drawer-backdrop></div>
      <aside class="drawer" data-drawer aria-hidden="true" aria-label="Student portal menu">
        <div class="drawer-head"><a class="brand" href="dashboard.html">${brandMarkup}</a><button class="drawer-close" type="button" data-drawer-close aria-label="Close menu">×</button></div>
        <div class="drawer-student"><span aria-hidden="true">AS</span><div><strong>Aarav Shah</strong><small>Grade 10 · Student</small></div></div>
        <nav class="drawer-nav" aria-label="Portal drawer navigation">${links.map(([href, , label]) => `<a href="${href}"${current(href)}>${label}</a>`).join("")}<a href="login.html">Logout</a></nav>
        <div class="drawer-settings">
          <div><div class="setting-label">Display</div><div class="segmented"><button type="button" data-set-theme="light">Light</button><button type="button" data-set-theme="dark">Dark</button></div></div>
          <div><div class="setting-label">Direction</div><div class="segmented"><button type="button" data-set-direction="ltr">LTR</button><button type="button" data-set-direction="rtl">RTL</button></div></div>
        </div>
      </aside>`,
    );
  }

  function toast(message) {
    let element = document.querySelector("[data-toast]");
    if (!element) {
      element = document.createElement("div");
      element.className = "toast";
      element.dataset.toast = "";
      element.setAttribute("role", "status");
      document.body.append(element);
    }
    element.textContent = message;
    element.classList.add("is-visible");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => element.classList.remove("is-visible"), 2600);
  }

  document.querySelectorAll("[data-download]").forEach((button) => {
    button.addEventListener("click", () => {
      const filename = button.dataset.download;
      const content = `Fieldnote Learning Centre\n${filename.replaceAll("-", " ")}\n\nStudy resource prepared for your current learning plan.`;
      const url = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = `${filename}.txt`;
      link.click();
      URL.revokeObjectURL(url);
      toast(`${filename.replaceAll("-", " ")} downloaded.`);
    });
  });

  document.querySelectorAll("[data-month-select]").forEach((select) => {
    select.addEventListener("change", () => {
      const data = {
        August: [94, 17, 1],
        September: [92, 23, 2],
        October: [96, 24, 1],
      }[select.value];
      document.querySelector("[data-attendance-ring]")?.style.setProperty("--attendance", `${data[0]}%`);
      const ring = document.querySelector("[data-attendance-ring]");
      if (ring) ring.dataset.label = `${data[0]}%`;
      document.querySelector("[data-present-count]").textContent = data[1];
      document.querySelector("[data-absent-count]").textContent = data[2];
    });
  });

  document.querySelectorAll("[data-profile-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      toast("Profile settings saved on this device.");
    });
  });
})();
