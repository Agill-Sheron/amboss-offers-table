import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: "2rem",
  		screens: {
  			"2xl": "1400px",
  		},

  	},
  	fontSize: {
  		xs: ["12px", { lineHeight: "16px" }],
  		sm: ["14px", { lineHeight: "20px" }],
  		base: ["16px", { lineHeight: "24px" }],
  		lg: ["18px", { lineHeight: "28px" }],
  		xl: ["20px", { lineHeight: "28px" }],
  		"2xl": ["24px", { lineHeight: "32px" }],
  		"3xl": ["30px", { lineHeight: "36px" }],
  		"4xl": ["36px", { lineHeight: "40px" }],
  		"5xl": ["48px", { lineHeight: "48px" }],
  		"6xl": ["60px", { lineHeight: "60px" }],
  	},
  	extend: {
  		colors: {
  			border: {
  				DEFAULT: "rgb(255 255 255 / 0.17)",
  				input: "hsl(var(--input))",
  			},
  			text: {
  				white: "#FFFFFF",
  				light: "#A3A3A3",
  				muted: "#D4D4D4",
  			},
  			input: {
  				DEFAULT: "hsl(var(--input))",
  				invalid: "hsl(var(--input-invalid))",
  			},
  			ring: {
  				DEFAULT: "hsl(var(--ring))",
  			},
  			background: {
  				DEFAULT: "hsl(var(--background))",
  				secondary: "hsl(var(--secondary))",
  			},
  			foreground: {
  				DEFAULT: "hsl(var(--foreground))",
  			},
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
			hover: {
				DEFAULT: "#171717",
			},
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)",
  		},
  		keyframes: {
  			"accordion-down": {
  				from: { height: "0" },
  				to: { height: "var(--radix-accordion-content-height)" },
  			},
  			"accordion-up": {
  				from: { height: "var(--radix-accordion-content-height)" },
  				to: { height: "0" },
  			},
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  		},
  	}
  },
  plugins: [animate],
};
export default config;
