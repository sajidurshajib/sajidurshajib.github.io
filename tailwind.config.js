/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*.{html,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: ['Inter', 'sans-serif'],
        },
    },
    safelist: [
        'hidden',
        'mt-1',
        'mb-3',
        'px-3',
        'py-1',
        'text-xs',
        'text-sm',
        'text-gray-500',
        'text-gray-700',
        'bg-gray-100', 
        'text-justify',
        'tracking-widest',
        'rounded-md',
        'dark:text-white',
        'dark:text-gray-300',
        'dark:bg-blue-950', 
      ],
    plugins: [],
};
