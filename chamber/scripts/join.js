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

  // 3. Populate hidden timestamp field with the exact date/time the form loaded
  const timestampInput = document.getElementById("timestamp");
  if (timestampInput) {
    timestampInput.value = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "medium",
    });
  }

  // 4. Autofocus first input only on desktop pointer devices
  if (window.matchMedia("(pointer: fine)").matches) {
    const firstInput = document.querySelector('input[name="firstName"]');
    if (firstInput) firstInput.focus();
  }

  // 5. Membership modal open & close handlers
  const modalTriggers = document.querySelectorAll(".card-link[data-modal]");
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const modalId = trigger.getAttribute("data-modal");
      const dialog = document.getElementById(modalId);
      if (dialog) {
        dialog.showModal();
      }
    });
  });

  const modals = document.querySelectorAll(".benefit-modal");
  modals.forEach((dialog) => {
    const closeBtn = dialog.querySelector(".modal-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => dialog.close());
    }

    // Allow closing by clicking the backdrop outside the dialog box
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  });
});