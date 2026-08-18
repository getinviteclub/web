import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // shadcn semantic tokens
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        // brand tokens (direct hex/rgb — usable as bg-ink, text-ink, etc.)
        ink: "var(--c-ink-strong)",
        inverse: "var(--c-inverse)",
        paper: "var(--c-paper)",
        bone: "var(--c-bone)",
        clay: "var(--c-clay)",
        forest: "var(--c-forest)",
        rule: "var(--c-rule)",
        soft: "var(--c-soft)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        ui: ["var(--font-ui)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-ui)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        max: "1440px",
      },
      letterSpacing: {
        tight: "-0.025em",
        body: "var(--ls-body)",
        label: "var(--ls-label)",
      },
      borderRadius: {
        lg: "0px",
        md: "0px",
        sm: "0px",
        pill: "var(--r-pill)",
      },
    },
  },
  plugins: [],
};
export default config;
