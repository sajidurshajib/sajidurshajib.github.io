// For Theme toggle
// Icons
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// Icon toggling
const iconToggle = () => {
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
};

// Initial theme check
const themeCheck = () => {
    let userTheme = localStorage.getItem('theme');
    if (userTheme === 'light' || !userTheme) {
        document.documentElement.classList.add('light');
        sunIcon.classList.add('hidden'); // Hide sun icon when light theme
    } else {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden'); // Hide moon icon when dark theme
    }
};

// Manual theme switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    iconToggle(); // Toggle the icons after switching theme
};

// click switch
sunIcon.addEventListener('click', () => {
    themeSwitch();
});

moonIcon.addEventListener('click', () => {
    themeSwitch();
});

// Initial load
document.addEventListener('DOMContentLoaded', themeCheck);
