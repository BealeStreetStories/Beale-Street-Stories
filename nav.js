(function(){

const links = [
  {
    group: "Core",
    items: [
      { href: "/PCRP/", label: "Home" },
      { href: "/PCRP/server-bible/", label: "Server Bible" }
    ]
  },

  {
    group: "Rules of Engagement",
    items: [
      { href: "/PCRP/faction-roe/", label: "Faction ROE" },
      { href: "/PCRP/families-roe/", label: "Families ROE" }
    ]
  },

  {
    group: "Departments",
    items: [
      { href: "/PCRP/leo/", label: "LEO" },
      { href: "/PCRP/ems/", label: "EMS" }
    ]
  }
];

const sidebar = document.getElementById("sidebarNav");
if(!sidebar) return;

let current = window.location.pathname;
if(!current.endsWith("/")) current += "/";

let html = "";

links.forEach(section => {

  html += `<p class="nav-group-title">
  ${section.group}
  </p>`;

  section.items.forEach(link => {

    const active =
      current === link.href ? "active" : "";

    html += `
      <a class="${active}" href="${link.href}">
        ${link.label}
      </a>
    `;
  });

});

sidebar.innerHTML = html;

})();
