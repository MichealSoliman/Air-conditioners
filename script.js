


// navbar menu
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    if (isOpen) {
      mobileMenu.style.maxHeight = '0px';
      mobileMenu.style.opacity = '0';
    } else {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      mobileMenu.style.opacity = '1';
    }
    isOpen = !isOpen;
  });



  // fixed navbar 

  const navbar = document.getElementById('mainNavbar');
  let hasShown = false;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50 && !hasShown) {
      navbar.classList.remove('-translate-y-full', 'opacity-0');
      navbar.classList.add('fixed', 'top-0', 'translate-y-0', 'opacity-100', 'shadow-lg');
      hasShown = true;
    } else if (window.scrollY <= 50 && hasShown) {
      navbar.classList.remove('translate-y-0', 'opacity-100', 'shadow-lg');
      navbar.classList.add('-translate-y-full', 'opacity-0');
      hasShown = false;
    }
  });








// slider 
let current = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('opacity-100', 'z-10');
    slide.classList.add('opacity-0');
    if (i === index) {
      slide.classList.add('opacity-100', 'z-10');
    }
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000); 









// scroll top 

  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove("opacity-0");
      backToTopButton.classList.add("opacity-100");
    } else {
      backToTopButton.classList.add("opacity-0");
      backToTopButton.classList.remove("opacity-100");
    }
  });

  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });






  //tabs 

  function showTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(el => {
      el.classList.add('hidden');
      el.classList.remove('active');
    });

    const target = document.getElementById(tabId);
    target.classList.remove('hidden');
    setTimeout(() => target.classList.add('active'), 10); // لأنيماشن ناعم

    // تفعيل الزر المحدد
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('bg-blue-600', 'text-white');
      b.classList.add('bg-gray-200', 'text-gray-700');
    });
    btn.classList.remove('bg-gray-200', 'text-gray-700');
    btn.classList.add('bg-blue-600', 'text-white');
  }










// counter
  const counters = document.querySelectorAll('.counter');
  let started = false;

  function startCounting() {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }


  
  window.addEventListener('scroll', () => {
    const section = document.getElementById('stats');
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (!started && sectionTop < screenHeight - 100) {
      startCounting();
      started = true;
    }
  });





 
// swiper
  new Swiper(".testimonialsSwiper", {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });







 
  // image popup
  
  const popup = document.getElementById('imagePopup');
  const popupImage = document.getElementById('popupImage');

  function openImage(src) {
    popupImage.src = src;
    popup.classList.remove('hidden');
    setTimeout(() => popup.classList.add('opacity-100'), 10); // Smooth
  }

  function closeImage() {
    popup.classList.remove('opacity-100');
    setTimeout(() => {
      popup.classList.add('hidden');
      popupImage.src = '';
    }, 300);
  }

  

  AOS.init({
    duration: 1000, 
    once: true      
  });





 // scroll to top smoothly when page reloads
  window.onload = function() {
   
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
