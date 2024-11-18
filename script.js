window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add("scrolled"); // Add class when scrolling down
  } else {
    navbar.classList.remove("scrolled"); // Remove class when at the top
  }
};
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".carousel-container").forEach((container) => {
      const carousel = container.querySelector(".carousel");
      const items = container.querySelectorAll(".carousel-item");
      const prevButton = container.querySelector(".prev-button");
      const nextButton = container.querySelector(".next-button");

      if (!prevButton || !nextButton) {
          console.error("Button tidak ditemukan dalam container:", container);
          return; // Hentikan jika tombol tidak ditemukan
      }

      let currentIndex = 0;

      function showSlide(index) {
          const totalItems = items.length;
          if (index >= totalItems) {
              currentIndex = 0;
          } else if (index < 0) {
              currentIndex = totalItems - 1;
          } else {
              currentIndex = index;
          }
          carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      prevButton.addEventListener("click", () => {
          showSlide(currentIndex - 1);
      });

      nextButton.addEventListener("click", () => {
          showSlide(currentIndex + 1);
      });
  });
});

document.getElementById("burger-menu").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
// Mendapatkan semua item dalam .nav-links
const navLinks = document.querySelectorAll(".nav-links li");

// Menambahkan event listener ke setiap item
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Menghilangkan kelas "active" dari .nav-links
    document.querySelector(".nav-links").classList.remove("active");
  });
});
