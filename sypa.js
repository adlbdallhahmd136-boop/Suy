document.addEventListener("DOMContentLoaded", function() {
  const openMenuBtn = document.getElementById('openMenuBtn');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const dropdownLinks = document.querySelectorAll('.dropdown-links a');
  
  if (openMenuBtn && dropdownMenu) {
    openMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
      if (!dropdownMenu.contains(e.target) && e.target !== openMenuBtn) {
        dropdownMenu.classList.remove('active');
      }
    });

    dropdownLinks.forEach(link => {
      link.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutFlipCard = document.getElementById('aboutFlipCard');
  if (aboutFlipCard) {
    setInterval(() => {
      aboutFlipCard.classList.toggle('flipped');
    }, 7000);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const featureCards = document.querySelectorAll('.feature-card');
  
  if (window.innerWidth > 768) {
    const featureObserverOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    };
    
    const featureObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-reveal');
          observer.unobserve(entry.target); 
        }
      });
    }, featureObserverOptions);
    
    featureCards.forEach(card => {
      featureObserver.observe(card);
    });
  } else {
    featureCards.forEach(card => {
      card.classList.add('active-reveal');
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const track = document.getElementById('testimonialTrack');
  if (track) {
    let index = 0;
    
    function slideTestimonials() {
      const cards = document.querySelectorAll('.testimonial-card-item');
      if (cards.length === 0) return;
      
      const cardWidth = cards[0].offsetWidth + 25;
      index++;
      
      let visibleCards = window.innerWidth > 768 ? 3 : 1;
      
      if (index > cards.length - visibleCards) {
        index = 0;
      }
      
      track.style.transform = `translateX(${index * cardWidth}px)`;
    }
    
    setInterval(slideTestimonials, 4000);
    
    window.addEventListener('resize', () => {
      track.style.transform = `translateX(0px)`;
      index = 0;
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const aboutSection = document.querySelector('.scroll-reveal-about');
  
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear-now');
      }
    });
  }, {
    threshold: 0.15
  });
  
  if (aboutSection) {
    aboutObserver.observe(aboutSection);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.method-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.15
  });
  
  cards.forEach(card => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const teachers = document.querySelectorAll('.teacher-card');
  
  const teacherObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, {
    threshold: 0.15
  });
  
  teachers.forEach(teacher => {
    teacherObserver.observe(teacher);
  });
});

// 9. العداد التلقائي لقسم الأرقام والإحصائيات
document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.stat-number');
  
  const countUp = (counter) => {
    const target = +counter.getAttribute('data-target');
    const speed = target / 40;
    
    const updateCount = () => {
      const count = +counter.innerText;
      if (count < target) {
        counter.innerText = Math.ceil(count + speed);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };
  
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  counters.forEach(counter => {
    statsObserver.observe(counter);
  });
});

// 10. إنميشن خطوات التسجيل
document.addEventListener("DOMContentLoaded", function() {
  const steps = document.querySelectorAll('.step-item');
  
  const stepsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, {
    threshold: 0.2
  });
  
  steps.forEach(step => {
    stepsObserver.observe(step);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const typewriterTitles = document.querySelectorAll('.typewriter-title');
  
  const typeEffect = (element) => {
    const fullText = element.textContent.trim();
    element.textContent = '';
    element.style.visibility = 'visible';
    let characterIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (characterIndex < fullText.length) {
        element.textContent += fullText.charAt(characterIndex);
        characterIndex++;
      } else {
        clearInterval(typingInterval);
        element.style.borderLeft = 'none';
      }
    }, 75);
  };
  
  const titleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeEffect(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  typewriterTitles.forEach(title => {
    titleObserver.observe(title);
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const currentAnswer = this.nextElementSibling;
            
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            
            currentItem.classList.toggle('active');
            if (currentItem.classList.contains('active')) {
                currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
            } else {
                currentAnswer.style.maxHeight = null;
            }
        });
    });
});
