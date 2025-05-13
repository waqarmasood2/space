
document.addEventListener('DOMContentLoaded', function() {
     // Generate static stars
  const staticStars = document.querySelector('.static-stars');
  if (staticStars) {
    const starCount = 500;
    staticStars.innerHTML = ''; // Clear existing
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star-point';
      
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${1 + Math.random() * 2}px`;
      star.style.height = star.style.width;
      star.style.animationDelay = `${Math.random() * 2}s`;
      
      staticStars.appendChild(star);
    }
  } else {
    console.error("Could not find .static-stars element");
  }
    
    
    
    const navbar = document.querySelector('.navbar');
    const navLinks = navbar.querySelector('.nav-links');
    const innerNav = navbar.querySelector('.inner-nav');

    // Create the toggle button dynamically
    const toggler = document.createElement('button');
    toggler.classList.add('navbar-toggler');
    toggler.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    `;

    // Insert the toggle button
    innerNav.insertBefore(toggler, navLinks);

    // Toggle functionality
    toggler.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        toggler.classList.toggle('open');
    });




      const container = document.querySelector('.str');

  function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Randomize start position
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * -200 + 'px'; // Start above the screen
    star.style.animationDuration = 1.5 + Math.random() * 1.5 + 's';

    container.appendChild(star);

    // Remove after animation
    setTimeout(() => star.remove(), 3000);
  }

  // Create a new star every 300ms
  setInterval(createStar, 300);




});





















//   if (navbarToggle && navbarMenu) {
//     navbarToggle.addEventListener('click', function() {
//       navbarMenu.classList.toggle('open'); // Add or remove the 'open' class to show/hide the menu
//       navbarToggle.classList.toggle('active'); // Optional: Add/remove an 'active' class for visual feedback on the toggle
//     });

//     // Optional: Close the menu if a link inside is clicked (for single-page apps or specific behavior)
//     const navbarLinks = navbarMenu.querySelectorAll('a');
//     navbarLinks.forEach(function(link) {
//       link.addEventListener('click', function() {
//         navbarMenu.classList.remove('open');
//         navbarToggle.classList.remove('active');
//       });
//     });

//     // Optional: Close the menu if the user clicks outside of it
//     document.addEventListener('click', function(event) {
//       const isClickInsideMenu = navbarMenu.contains(event.target);
//       const isClickInsideToggle = navbarToggle.contains(event.target);

//       if (!isClickInsideMenu && !isClickInsideToggle && navbarMenu.classList.contains('open')) {
//         navbarMenu.classList.remove('open');
//         navbarToggle.classList.remove('active');
//       }
//     });
//   } else {
//     console.error("Navbar toggle button or menu container not found. Please ensure the correct classes are used.");
//   }
// });

