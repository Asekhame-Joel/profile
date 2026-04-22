// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobile = document.querySelector("[data-nav-mobile]");
  const iconOpen = document.querySelector("[data-icon-open]");
  const iconClose = document.querySelector("[data-icon-close]");

  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const isOpen = mobile.classList.toggle("is-open");
      if (iconOpen && iconClose) {
        iconOpen.style.display = isOpen ? "none" : "block";
        iconClose.style.display = isOpen ? "block" : "none";
      }
    });
  }

  // Navbar scroll shadow
  const navbar = document.querySelector(".navbar");
  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 20) navbar.classList.add("is-scrolled");
    else navbar.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Contact form handler
  const form = document.querySelector("[data-contact-form]");
  const toast = document.querySelector("[data-toast]");
  if (form && toast) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector("button[type=submit]");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      setTimeout(() => {
        form.reset();
        toast.classList.add("is-visible");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = "Send Message";
        }
        setTimeout(() => toast.classList.remove("is-visible"), 4000);
      }, 700);
    });
  }
});
