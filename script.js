// Animate sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'animated' to animate on scroll
  const sections = document.querySelectorAll('.animated');

  // Create an IntersectionObserver to detect when elements come into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Check if the observed element is visible in the viewport (threshold 20%)
      if (entry.isIntersecting) {
        // Set a slight delay before animation starts
        entry.target.style.animationDelay = '0.2s';
        // Add a 'visible' class to trigger CSS animations
        entry.target.classList.add('visible');
        // Set opacity to 1 to ensure element is fully visible
        entry.target.style.opacity = 1;
        // Stop observing this element once animated to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // Trigger callback when 20% of element is visible
  });

  // Start observing each animated section
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Smooth scrolling for internal navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  // Add click event listener to all nav links pointing to page anchors
  anchor.addEventListener('click', function (e) {
    // Get the target element referenced by the href attribute
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Prevent default jump to anchor
      e.preventDefault();
      // Smoothly scroll to the target element
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
