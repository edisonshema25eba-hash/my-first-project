// ==============================
// JAVASCRIPT — adds behaviour to our page
// ==============================

// 1. NAVBAR — changes style when you scroll down
// "window.addEventListener" means: "when something happens on the page, do this"
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    // user has scrolled — make navbar more solid
    navbar.style.padding = '1rem 4rem';
    navbar.style.borderBottomColor = 'rgba(201, 168, 76, 0.3)';
  } else {
    // back at top — restore original style
    navbar.style.padding = '1.5rem 4rem';
    navbar.style.borderBottomColor = 'rgba(201, 168, 76, 0.15)';
  }
});


// 2. SKILL CARDS — show a message when you click a skill
// "document.querySelectorAll" means: "find all elements with this class"
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(function (card) {
  card.addEventListener('click', function () {
    const skillName = card.getAttribute('data-skill');
    alert('You clicked: ' + skillName + ' — keep learning it! 💪');
  });
});


// 3. FADE IN SECTIONS — sections appear as you scroll to them
// This uses "IntersectionObserver" — it watches when elements appear on screen
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // section is now visible — add the fade-in class
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Set initial hidden state for each section, then observe it
sections.forEach(function (section) {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(section);
});
