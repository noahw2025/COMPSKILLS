/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b1220',
        surface: '#111a2e',
        muted: '#9ca3af',
        accent: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 60px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.16), transparent 25%), radial-gradient(circle at 80% 0%, rgba(14,165,233,0.12), transparent 25%)',
        'accent-gradient': 'linear-gradient(120deg, #6366f1, #8b5cf6, #06b6d4)',
      },
    },
  },
  plugins: [],
};
