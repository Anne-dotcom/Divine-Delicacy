document.querySelectorAll('.service-card').forEach(card => {
    const truck = card.querySelector('.fast-truck');
    if (truck) {
        card.addEventListener('mouseenter', () => {
            truck.classList.add('animate');
            truck.addEventListener('animationend', () => {
                truck.classList.remove('animate');
            }, { once: true });
        });
    }
});


const track = document.querySelector(".carousel-track");

track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
});

document.addEventListener("DOMContentLoaded", () => {
    const truck = document.querySelector(".fast-truck");
  
    truck.addEventListener("mouseenter", () => {
      truck.classList.add("animate");
      setTimeout(() => {
        truck.classList.remove("animate");
      }, 1000);
    });
  });

  const stars = document.querySelectorAll('#starRating i');
  const ratingInput = document.getElementById('ratingInput');
  
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const ratingValue = parseInt(star.getAttribute('data-value'));
      ratingInput.value = ratingValue;
  
      stars.forEach((s, index) => {
        if (index < ratingValue) {
          s.classList.add('fa-solid', 'filled');
          s.classList.remove('fa-regular');
        } else {
          s.classList.add('fa-regular');
          s.classList.remove('fa-solid', 'filled');
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    const toastElement = document.getElementById("reserveToast");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
    
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
  
      
      form.reset();
    });
  });

  AOS.init({ once: true });

  // Counter animation
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.stat').forEach(stat => {
      const target = +stat.getAttribute('data-count');
      let count = 0;
      const step = target / 100;
      const update = () => {
        count += step;
        if (count < target) {
          stat.textContent = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          stat.textContent = target;
        }
      };
      update();
    });
  });
  