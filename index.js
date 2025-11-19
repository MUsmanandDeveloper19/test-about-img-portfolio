// Frontend-developer
    const phrases = [
      "Freelancer",
      "Frontend Developer",
      "MERN Stack Developer"
    ];

    const dynamicText = document.getElementById("dynamic");

    let i = 0;   // phrase index
    let j = 0;   // character index
    let deleting = false;

    function typeEffect() {
      let current = phrases[i];

      if (!deleting) {
        dynamicText.textContent = current.substring(0, j++);
        if (j > current.length) {
          deleting = true;
          setTimeout(typeEffect, 1200); // wait before deleting
          return;
        }
      } else {
        dynamicText.textContent = current.substring(0, j--);
        if (j < 0) {
          deleting = false;
          i = (i + 1) % phrases.length; // next phrase
        }
      }

      // smoother speed
      let speed = deleting ? (50 + Math.random() * 50) : (100 + Math.random() * 70);
      setTimeout(typeEffect, speed);
    }

    typeEffect();
// Frontend-developer

// WEB-SOLUTIONS
const card = document.getElementById('card');
  const topBorder = card.querySelector('.border.top');
  const bottomBorder = card.querySelector('.border.bottom');
  const leftBorder = card.querySelector('.border.left');
  const rightBorder = card.querySelector('.border.right');

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X inside card
    const y = e.clientY - rect.top;  // Mouse Y inside card

    // Snake-like animation: gradually expand borders towards cursor
    topBorder.style.width = x + 'px';
    bottomBorder.style.width = x + 'px';
    leftBorder.style.height = y + 'px';
    rightBorder.style.height = y + 'px';

    // Optional glow effect following cursor
    card.style.boxShadow = `0 0 20px rgba(255, 0, 0, ${x/rect.width})`;
  });

  card.addEventListener('mouseleave', () => {
    // Reset borders
    topBorder.style.width = '0';
    bottomBorder.style.width = '0';
    leftBorder.style.height = '0';
    rightBorder.style.height = '0';
    card.style.boxShadow = '0 0 0px rgba(0,0,0,0)';
  });
// WEB-SOLUTIONS