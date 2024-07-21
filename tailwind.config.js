/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['monospace'],
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#0077b6", // Deep Blue
          "secondary": "#48cae4", // Light Blue
          "accent": "#00b4d8", // Cyan
          "base-100": "#ffffff", // White
          "base-200": "#f1f5f9", // Light Gray
          "base-300": "#e2e8f0", // Gray
          "neutral": "#64748b", // Neutral Gray
          "info": "#0284c7", // Info Blue
          "success": "#22c55e", // Green
          "warning": "#f59e0b", // Yellow
          "error": "#ef4444" // Red
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#0a9396", // Deep Teal
          "secondary": "#94d2bd", // Light Teal
          "accent": "#e9d8a6", // Sand
          "base-100": "#1e293b", // Dark Blue
          "base-200": "#0f172a", // Darker Blue
          "base-300": "#334155", // Dark Gray Blue
          "neutral": "#94a3b8", // Neutral Gray
          "info": "#0284c7", // Info Blue
          "success": "#22c55e", // Green
          "warning": "#f59e0b", // Yellow
          "error": "#ef4444" // Red
        },
      },
    ],


  },
  plugins: [
    require('daisyui'),
  ],

};

