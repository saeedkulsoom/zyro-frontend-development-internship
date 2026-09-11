/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0b1220',
          900: '#0f172a',
          800: '#16213a',
          700: '#1e293b',
        },
        route: {
          amber: '#f59e0b',
          emerald: '#10b981',
          sky: '#3b82f6',
          slate: '#64748b',
        },
        backdrop: '#f8fafc',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.06), 0 8px 24px -12px rgba(15, 23, 42, 0.15)',
        glow: '0 0 0 1px rgba(16, 185, 129, 0.15), 0 8px 30px -8px rgba(16, 185, 129, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'dash': 'dash 1.2s linear infinite',
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: '-16' },
        },
      },
    },
  },
  plugins: [],
}
