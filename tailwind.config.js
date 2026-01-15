/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3C5D', // Aviation Navy Blue
          dark: '#082f49',
          light: '#2a5a7b',
        },
        secondary: {
          DEFAULT: '#1CA7EC', // Sky Blue
        },
        accent: {
          DEFAULT: '#F5C542', // Gold
          dark: '#d9a928',
        },
        dark: {
          DEFAULT: '#0F172A', // Charcoal
          card: '#1E293B',
        },
        neutral: {
          50: '#F8FAFC', // Soft White
          100: '#f1f5f9',
          900: '#0f172a',
        },
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/images/pattern.png')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.25rem',
          lg: '1.5rem',
          xl: '2rem',
        },
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
}