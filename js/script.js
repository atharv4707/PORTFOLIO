$(document).ready(function () {

  const professions = [
    "build ideas into reality",
    "create with AI & tech",
    "ship products that matter",
    "turn crazy ideas into code"
  ];

  let partIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let textDelay = 2000; // time before deleting starts
  let typeSpeed = 80;
  let deleteSpeed = 40;
  const $typingElement = $('#typing-text');

  function typeEffect() {
    const currentProf = professions[partIndex];

    if (isDeleting) {
      $typingElement.text(currentProf.substring(0, charIndex - 1));
      charIndex--;
    } else {
      $typingElement.text(currentProf.substring(0, charIndex + 1));
      charIndex++;
    }

    if (!isDeleting && charIndex === currentProf.length) {
      // Finished typing, wait before deleting
      isDeleting = true;
      setTimeout(typeEffect, textDelay);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next profession
      isDeleting = false;
      partIndex = (partIndex + 1) % professions.length;
      setTimeout(typeEffect, 200);
    } else {
      // Continue typing/deleting
      setTimeout(typeEffect, isDeleting ? deleteSpeed : typeSpeed);
    }
  }

  // Start the typing animation loop
  if ($typingElement.length) {
    setTimeout(typeEffect, 1000);
  }

  // Counter Up

  const counterUp = window.counterUp.default;

  const callback = entries => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains('is-visible')) {
        counterUp(el, {
          duration: 2000,
          delay: 16,
        });
        el.classList.add('is-visible');
      }
    });
  };

  const IO = new IntersectionObserver(callback, { threshold: 1 });

  const el = document.querySelectorAll('.counter');
  for (let count = 0; count < el.length; count++) {
    IO.observe(el[count]);
  }

  $(".project-wrapper").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      '<span class="p-2">&larr; Previous</span>',
      '<span class="p-2">Next &rarr;</span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

});