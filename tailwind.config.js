/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        'bg-elevated': '#0a0a0a',
        primary: '#F1F1ED',
        secondary: '#8a8a85',
        muted: '#4a4a47',
        accent: '#c4633f',
        'accent-hover': '#d9764f',
        border: '#1a1a1a',
        'border-hover': '#2a2a2a',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.03em',
        'tight': '-0.02em',
        'wide-2': '0.15em',
        'wide-3': '0.2em',
      },
      maxWidth: {
        'editorial': '1400px',
      },
    },
  },
  plugins: [],
};
