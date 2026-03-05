/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy cyber tokens kept for compatibility
        cyber: {
          dark: '#0a0f1d',
          darker: '#050811',
          light: '#1e293b',
          green: '#00ff41',
          blue: '#00f0ff',
        },
        // iOS 26 Liquid Glass Design Tokens
        ios: {
          bg: '#F2F2F7',
          bg2: '#FFFFFF',
          surface: 'rgba(255,255,255,0.72)',
          surface2: 'rgba(242,242,247,0.8)',
          surfaceDark: 'rgba(255,255,255,0.18)',
          label: '#1C1C1E',
          label2: '#636366',
          label3: '#AEAEB2',
          separator: 'rgba(60,60,67,0.12)',
          // System colors
          blue: '#007AFF',
          indigo: '#5856D6',
          purple: '#AF52DE',
          pink: '#FF2D55',
          red: '#FF3B30',
          orange: '#FF9500',
          green: '#34C759',
          teal: '#32ADE6',
          // Glass
          glass: 'rgba(255,255,255,0.55)',
          glassHover: 'rgba(255,255,255,0.80)',
          glassStrong: 'rgba(255,255,255,0.90)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Roboto Mono', 'monospace'],
        display: ['Inter', '-apple-system', 'BlueMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        '3xl': '60px',
        '4xl': '80px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        'glass-md': '0 12px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.7)',
        'glass-lg': '0 20px 60px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
        'ios-blue': '0 4px 20px rgba(0,122,255,0.3)',
        'ios-blue-lg': '0 8px 40px rgba(0,122,255,0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'spring-in': 'springIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        springIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
}
