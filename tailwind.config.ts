import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-bottom": "slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "slide-in-bottom": {
            "0%": {
                transform: "translateY(1000px)",
                opacity: "0"
            },
            to: {
                transform: "translateY(0)",
                opacity: "1"
            }
        }
      }
    },
  },
  plugins: [],
};
export default config;
