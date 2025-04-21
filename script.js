window.onload = function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPath = ("/")

  navLinks.forEach(link => {
    // Extract just the filename part (e.g., index.html, balletclass.html)
    const linkPath = link.getAttribute("href");
    if (currentPath.endsWith(linkPath)) {
      link.classList.add("active");
    }

    // Click event for dynamic switching
    link.addEventListener("click", function () {
      navLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
};


document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".row");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class when element is in view
          entry.target.classList.add("visible");
          // Stop observing after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before fully in view
    }
  );

  // Observe each row
  rows.forEach((row) => {
    observer.observe(row);
  });
});