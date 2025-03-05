// For Theme toggle
// Icons
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// Theme vars
const userTheme = localStorage.getItem('theme');
// const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Icon toggling
const iconToggle = () => {
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
};

// Initial theme check
const themeCheck = () => {
    if (userTheme === 'light' || (!userTheme && 'light')) {
        document.documentElement.classList.add('light');
        sunIcon.classList.add('hidden'); // Hide sun icon when light theme
    } else {
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
themeCheck();
