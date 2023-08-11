/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            height: {
                table: 'calc(100vh - 16rem)',
                container: 'calc(100vh - 13rem)',
                screen: ['100vh', '100dvh'],
            },
            width: {
                screen: ['100vw', '100dvw'],
            },
            container: {
                padding: {
                    DEFAULT: '2rem',
                },
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light'],
    },
};
