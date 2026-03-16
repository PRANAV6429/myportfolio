module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0a0a0a",
          card: "#171717",
          border: "#262626",
          hover: "#1f2937",
        },
        primary: {
          DEFAULT: "#8b5cf6", // Violet 500
          light: "#a78bfa", // Violet 400
          dark: "#7c3aed", // Violet 600
        },
        text: {
          main: "#f3f4f6", // Gray 100
          muted: "#9ca3af", // Gray 400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
