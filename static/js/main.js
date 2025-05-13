document.addEventListener('DOMContentLoaded', function() {
    const staticStars = document.querySelector('.static-stars');
    
    if (!staticStars) {
        console.error("Star container not found");
        return;
    }

    // Clear existing stars
    staticStars.innerHTML = '';

    // Colored light palette (using box-shadow for glow)
    const starColors = [
        '0 0 5px 1px hsl(200, 100%, 80%)',  // Light blue glow
        '0 0 5px 1px hsl(0, 100%, 80%)',    // Light red glow
        '0 0 5px 1px hsl(270, 100%, 80%)',  // Light purple glow
        '0 0 5px 1px hsl(60, 100%, 80%)',   // Light yellow glow
        '0 0 8px 2px hsl(240, 100%, 60%)',  // Bright blue glow
        '0 0 8px 2px hsl(0, 100%, 60%)'     // Bright red glow
    ];

    // Create stars
    for (let i = 0; i < 500; i++) {
        const star = document.createElement('div');
        star.className = 'star-point';
        
        // Position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Size - smaller for better light effect
        const size = 0.5 + Math.random() * 1.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Colored light effect
        const colorIndex = Math.floor(Math.random() * starColors.length);
        star.style.boxShadow = starColors[colorIndex];
        star.style.backgroundColor = 'white'; // Core remains white
        
        // Animation
        star.style.animation = `twinkle ${3 + Math.random() * 4}s infinite`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        staticStars.appendChild(star);
    }
});
    
    
    
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




  function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Positioning
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * -200 + 'px';
  
  // Random properties
  const duration = 1.5 + Math.random() * 1.5;
  star.style.animationDuration = duration + 's';
  
  // Dynamic opacity
  const maxOpacity = 0.7 + Math.random() * 0.3; // 0.7-1.0
  star.style.opacity = (Math.random() * 0.3).toFixed(2); // Start dim
  
  container.appendChild(star);

  // Animate opacity
  let startTime = null;
  function fadeIn(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = (timestamp - startTime) / 500; // 0.5s fade in
    
    if (progress < 1) {
      star.style.opacity = (progress * maxOpacity).toFixed(2);
      requestAnimationFrame(fadeIn);
    } else {
      star.style.opacity = maxOpacity.toFixed(2);
      // Start fade out later
      setTimeout(() => {
        let fadeTime = null;
        function fadeOut(timestamp) {
          if (!fadeTime) fadeTime = timestamp;
          const fadeProgress = (timestamp - fadeTime) / 1000; // 1s fade out
          
          if (fadeProgress < 1) {
            star.style.opacity = (maxOpacity * (1 - fadeProgress)).toFixed(2);
            requestAnimationFrame(fadeOut);
          } else {
            star.remove();
          }
        }
        requestAnimationFrame(fadeOut);
      }, duration * 800); // Start fade out at 80% of animation
    }
  }
  requestAnimationFrame(fadeIn);
}


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

