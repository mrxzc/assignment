import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "640px",
      sm: "768px",
      md: "992px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        blank: {
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.2)",
          300: "rgba(255, 255, 255, 0.3)",
          400: "rgba(255, 255, 255, 0.4)",
          500: "rgba(255, 255, 255, 0.5)",
          DEFAULT: "#ffffff",
          600: "rgba(255, 255, 255, 0.6)",
          700: "rgba(255, 255, 255, 0.7)",
          800: "rgba(255, 255, 255, 0.8)",
          900: "rgba(255, 255, 255, 0.9)",
        },
        secondary: {
          light: "#c4f3ff",
          DEFAULT: "#44C2D8",
          dark: "#276d7c",
        },
        grey: {
          50: "#FAFAFA",
          100: "#F3F3F4",
          200: "#E6E7E9",
          light: "#E6E7E9",
          300: "#CED0D3",
          400: "#9CA1A6",
          500: "#838990",
          600: "#6B727A",
          DEFAULT: "#6B727A",
          700: "#39434D",
          800: "#081421",
          dark: "#081421",
        },
        primary: {
          light: "#F7F9FE",
          DEFAULT: "#3662E3",
          700: "#3051c6",
          800: "#2745ae",
          dark: "#08287D",
        },
        success: {
          light: "#E4F1E9",
          DEFAULT: "#107E1B",
          dark: "#036407",
        },
        turquoise: {
          light: "#d4ffe5",
          DEFAULT: "#68F3A8",
          dark: "#3c9162",
        },
        brown: {
          light: "#64524e",
          DEFAULT: "#513c38",
          dark: "#3e2723",
        },
        warning: {
          light: "#FFEDC0",
          DEFAULT: "#FFD361",
          dark: "#805D05",
        },
        danger: {
          light: "#FDF1F2",
          DEFAULT: "#E14F62",
          dark: "#7e2934",
        },
        accent: {
          blue: "#24BDFF",
          orange: "#FB7930",
          red: "#E14F62",
          green: "#107E1B",
          yellow: "#FFBB45",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
