function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}




// Detect scroll event
window.addEventListener('scroll', function() {
  // Get the scroll position
  var scrollPosition = window.scrollY;

  // Apply rotation based on scroll position
  var rotationAngle = scrollPosition / 10; // Adjust the divisor for desired rotation speed
  document.querySelectorAll('.icon-container').forEach(function(iconContainer) {
    iconContainer.style.transform = 'rotate(' + rotationAngle + 'deg)';
  });
});
