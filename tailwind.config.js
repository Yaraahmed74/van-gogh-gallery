// tailwind.config.js
export const theme = {
    extend: {
        keyframes: {
            buzzle: {
                '0%, 100%': { transform: 'translateY(0) scale(1)' },
                '50%': { transform: 'translateY(-10px) scale(1.05)' },
            },
        },
        animation: {
            buzzle: 'buzzle 1.5s ease-in-out infinite',
        },
    },
};
