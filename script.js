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