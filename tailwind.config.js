/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        obsidian: {
          DEFAULT: '#09090b',
          subtle: '#121215',
          card: '#18181b',
          border: '#27272a',
          hover: '#222226',
        },
        paper: {
          DEFAULT: '#ffffff',
          subtle: '#f8f8fa',
          card: '#f4f4f5',
          border: '#e4e4e7',
          hover: '#ebebeb',
        },
        brand: {
          DEFAULT: '#ea580c',
          hover: '#c2410c',
          muted: '#9a3412',
          light: '#ffedd5',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.15em',
        technical: '0.08em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        cornerBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'corner-blink': 'cornerBlink 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
