/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                'white-gray': '#FFFFFF',
                'blue-ocean': '#3A6073',
                'dark-grey': '#CBD6ED',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                colors: {
                    '0%': {
                        transform: 'hue-rotate(0deg)',
                    },
                    '100%': {
                        transform: 'hue-rotate(360deg)',
                    },
                },
                animation: {
                    'cursor-colors': 'colors 5s infinite',
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
