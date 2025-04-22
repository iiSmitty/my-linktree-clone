const STORAGE_KEY = 'theme';
const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme) {
    return savedTheme;
  }
  if (prefersDarkQuery.matches) {
    return 'dark';
  }
  return 'light'; // Default to light
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
};

// Apply theme immediately on load
const initialTheme = getInitialTheme();
applyTheme(initialTheme);


// Wait for the DOM to be fully loaded before adding the listener
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle-button');

    if (toggleButton) {
      toggleButton.addEventListener('click', toggleTheme);
    } else {
        console.error("Theme toggle button not found");
    }
});