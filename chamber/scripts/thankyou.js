document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile navigation toggle
  const menuToggle = document.getElementById("menu-toggle");
  const primaryNav = document.getElementById("primary-nav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // 2. Footer copyright year and last modified timestamp
  const yearEl = document.getElementById("current-year");
  const lastModEl = document.getElementById("last-modified");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lastModEl) lastModEl.textContent = `Last Modified: ${document.lastModified}`;

  // 3. Parse GET query parameters and render required fields
  const params = new URLSearchParams(window.location.search);
  const detailsContainer = document.getElementById("submission-details");

  const requiredFields = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "email", label: "Email Address" },
    { key: "phone", label: "Mobile Phone Number" },
    { key: "organization", label: "Business / Organization Name" },
    { key: "timestamp", label: "Application Timestamp" },
  ];

  if (detailsContainer) {
    requiredFields.forEach(({ key, label }) => {
      const rawValue = params.get(key);
      const item = document.createElement("div");
      item.className = "detail-item";

      const dt = document.createElement("dt");
      dt.textContent = label;

      const dd = document.createElement("dd");
      dd.textContent = rawValue && rawValue.trim() ? rawValue.trim() : "Not provided";

      item.append(dt, dd);
      detailsContainer.appendChild(item);
    });
  }
});