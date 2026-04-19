/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // shadcn tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ── Brand tokens (Global Chain Design System) ──────────
        'gc-cream':        '#F5EFE6',
        'gc-cream-soft':   '#FBF7F1',
        'gc-ivory':        '#EFE6DA',
        'gc-burgundy':     '#6B1F2A',
        'gc-wine':         '#4A141D',
        'gc-burgundy-lt':  '#8B2F3A',
        'gc-emerald':      '#1F6F54',
        'gc-emerald-lt':   '#2D8F6F',
        'gc-gold':         '#C6A15B',
        'gc-gold-lt':      '#E5D199',
        'gc-charcoal':     '#121212',
        'gc-ink':          '#1A1A1A',
        'gc-muted':        '#5F5A55',
        'gc-subtle':       '#B8AEA1',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Premium card radii
        card:    '18px',
        'card-lg': '22px',
        pill:    '9999px',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter':    ['Inter', 'sans-serif'],
        'mono':     ['"JetBrains Mono"', '"Fira Code"', 'Menlo', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          from: { opacity: 0, transform: "translateY(30px)" },
          to:   { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: 0, transform: "translateY(30px)" },
          to:   { opacity: 1, transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        "marquee": {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(198, 161, 91, 0.2)" },
          "50%":      { boxShadow: "0 0 30px rgba(198, 161, 91, 0.5)" },
        },
        "badge-pop": {
          "0%":   { transform: "scale(0) rotate(-15deg)", opacity: 0 },
          "60%":  { transform: "scale(1.15) rotate(3deg)" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in":        "fade-in 1s ease-out",
        "fade-in-up":     "fade-in-up 1s ease-out",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float":          "float 6s ease-in-out infinite",
        "marquee":        "marquee 30s linear infinite",
        "pulse-glow":     "pulse-glow 2s ease-in-out infinite",
        "badge-pop":      "badge-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
    },
  },
  safelist: [
    // Brand color utilities used dynamically
    { pattern: /^(bg|text|border)-gc-(cream|cream-soft|ivory|burgundy|wine|burgundy-lt|emerald|emerald-lt|gold|gold-lt|charcoal|ink|muted|subtle)$/ },
    { pattern: /^(bg|text|border)-gc-(cream|cream-soft|ivory|burgundy|wine|burgundy-lt|emerald|emerald-lt|gold|gold-lt|charcoal|ink|muted|subtle)$/, variants: ['hover', 'focus', 'group-hover'] },
    // Legacy dynamic classes still referenced
    { pattern: /^bg-(yellow|teal|purple|green|blue)-400$/ },
    { pattern: /^bg-(yellow|teal|purple|green|blue)-400\/10$/ },
    { pattern: /^text-(yellow|teal|purple|green|blue)-400$/ },
    { pattern: /^border-(yellow|teal|purple|green|blue)-400$/ },
    { pattern: /^border-(yellow|teal|purple|green|blue)-400$/, variants: ['hover'] },
  ],
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
