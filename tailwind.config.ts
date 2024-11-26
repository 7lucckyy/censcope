import type { Config } from "tailwindcss";

export default {
  plugins: [],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        light: "var(--light)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      backgroundImage: {
        "dotted-pattern": "radial-gradient(var(--primary) 10%, transparent 10%)",
      },
      backgroundSize: {
        "dotted-size": "4.5px 4.5px",
      },
      backgroundColor: {
        "dark-bg": "#333",
      },
    },
  },
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
} satisfies Config;
