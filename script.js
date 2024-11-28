// Add fade-out effect on navigation click
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent immediate navigation
    const target = event.target.href;

    document.body.classList.add('fade-out'); // Start fade-out animation
    setTimeout(() => {
      window.location.href = target; // Navigate after animation
    }, 1000); // Match this to the CSS fade-out duration
  });
});

// Remove fade-in class on page load
window.addEventListener('load', () => {
  document.body.classList.remove('fade-in');
});


// Highlight the active tab dynamically
document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll(".navbar a");
  const currentPage = window.location.pathname.split("/").pop();

  navbarLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});






// Add event listener to toggle theme
const themeButton = document.getElementById('theme-toggle');
themeButton.addEventListener('click', () => {
  // Toggle between dark and light theme classes
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  // Change navbar, footer, and contact bar colors accordingly
  const navbar = document.querySelector('.navbar');
  const footer = document.querySelector('footer');
  const contactBar = document.querySelector('.contact-bar');

  // Update colors based on the theme
  if (document.body.classList.contains('dark-theme')) {
    navbar.style.backgroundColor = '#333'; // Dark background for navbar
    footer.style.backgroundColor = '#333'; // Dark background for footer
    contactBar.style.backgroundColor = '#333'; // Dark background for contact bar
    themeButton.textContent = 'Light Theme'; // Change button text
  } else {
    navbar.style.backgroundColor = '#fff'; // Light background for navbar
    footer.style.backgroundColor = '#fff'; // Light background for footer
    contactBar.style.backgroundColor = '#fff'; // Light background for contact bar
    themeButton.textContent = 'Dark Theme'; // Change button text
  }

  // Store the user's theme preference in localStorage
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
  localStorage.setItem('theme', currentTheme);
});





// Add event listener to toggle theme
const themeButton = document.getElementById('theme-toggle');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  themeButton.textContent = document.body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
});

// Check for stored theme preference in localStorage
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  document.body.classList.add(storedTheme);
} else {
  document.body.classList.add('light-theme');
}







