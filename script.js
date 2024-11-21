window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add("scrolled"); // Add class when scrolling down
  } else {
    navbar.classList.remove("scrolled"); // Remove class when at the top
  }
};
document.addEventListener("DOMContentLoaded", function () {
    // Carousel di bagian Home
    const homeCarouselContainers = document.querySelectorAll(".carousel-container.home");
  
    homeCarouselContainers.forEach((container) => {
      const carousel = container.querySelector(".carousel");
      const items = container.querySelectorAll(".carousel-item");
      const prevButton = container.querySelector(".prev-button");
      const nextButton = container.querySelector(".next-button");
  
      if (!prevButton || !nextButton) {
        console.error("Button tidak ditemukan dalam container:", container);
        return; // Hentikan jika tombol tidak ditemukan
      }
  
      let currentIndex = 0;
      let startX = 0;
      let currentTranslate = 0;
      let prevTranslate = 0;
      let autoSlideInterval;
  
      // Fungsi untuk menggeser slide
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
  
      // Fungsi untuk mengatur ulang auto-slide
      function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
          showSlide(currentIndex + 1);
        }, 5000); // Ganti slide setiap 5 detik
      }
  
      // Event listener untuk tombol prev
      prevButton.addEventListener("click", () => {
        showSlide(currentIndex - 1);
        startAutoSlide(); // Reset timer
      });
  
      // Event listener untuk tombol next
      nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1);
        startAutoSlide(); // Reset timer
      });
  
      // Fungsi untuk menangkap awal sentuhan
      function touchStart(event) {
        startX = event.touches[0].clientX;
        prevTranslate = currentTranslate;
        clearInterval(autoSlideInterval); // Hentikan auto-slide saat swipe
      }
  
      // Fungsi untuk menggerakkan carousel selama swipe
      function touchMove(event) {
        const currentX = event.touches[0].clientX;
        const movementX = currentX - startX;
        currentTranslate = prevTranslate + movementX;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
      }
  
      // Fungsi untuk menyelesaikan swipe
      function touchEnd() {
        const movementThreshold = 50; // Threshold jarak swipe untuk berpindah item
        const movedBy = currentTranslate - prevTranslate;
  
        if (movedBy < -movementThreshold && currentIndex < items.length - 1) {
          currentIndex++;
        } else if (movedBy > movementThreshold && currentIndex > 0) {
          currentIndex--;
        }
  
        setPositionByIndex();
        startAutoSlide(); // Restart auto-slide
      }
  
      // Mengatur posisi berdasarkan index
      function setPositionByIndex() {
        currentTranslate = -currentIndex * container.offsetWidth;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
      }
  
      // Event listener untuk touch events
      carousel.addEventListener("touchstart", touchStart);
      carousel.addEventListener("touchmove", touchMove);
      carousel.addEventListener("touchend", touchEnd);
  
      // Mulai auto-slide saat halaman dimuat
      startAutoSlide();
    });
  
    // Carousel di bagian Product (Hanya Tombol, Tanpa Swipe)
    const productCarouselContainers = document.querySelectorAll(".carousel-container.product");
  
    productCarouselContainers.forEach((container) => {
      const carousel = container.querySelector(".carousel");
      const items = container.querySelectorAll(".carousel-item");
      const prevButton = container.querySelector(".prev-button");
      const nextButton = container.querySelector(".next-button");
  
      if (!prevButton || !nextButton) {
        console.error("Button tidak ditemukan dalam container:", container);
        return; // Hentikan jika tombol tidak ditemukan
      }
  
      let currentIndex = 0;
  
      // Fungsi untuk menggeser slide
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
  
      // Event listener untuk tombol prev
      prevButton.addEventListener("click", () => {
        showSlide(currentIndex - 1);
      });
  
      // Event listener untuk tombol next
      nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1);
      });
    });
  });

document.getElementById("burger-menu").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
document.getElementById("X-Mark").addEventListener('click', function(){
  document.querySelector(".nav-links").classList.remove("active");
})
// Mendapatkan semua item dalam .nav-links
const navLinks = document.querySelectorAll(".nav-links li");

// Menambahkan event listener ke setiap item
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Menghilangkan kelas "active" dari .nav-links
    document.querySelector(".nav-links").classList.remove("active");
  });
});
