
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Paleta personalizada crypto
				'crypto-red': {
					'dark': '#690000',
					'medium': '#a80000',
					'light': '#cc0000'
				},
				'glass': {
					'light': 'rgba(255, 255, 255, 0.1)',
					'medium': 'rgba(255, 255, 255, 0.2)',
					'dark': 'rgba(0, 0, 0, 0.3)'
				},
				// Cores específicas para tema claro
				'light-glass': {
					'primary': 'rgba(255, 255, 255, 0.7)',
					'secondary': 'rgba(248, 250, 252, 0.8)',
					'accent': 'rgba(241, 245, 249, 0.9)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backdropBlur: {
				'xs': '2px',
				'sm': '4px',
				'md': '8px',
				'lg': '12px',
				'xl': '16px',
				'2xl': '24px',
				'3xl': '32px'
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.8s ease-out',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				glow: {
					'0%': { boxShadow: '0 0 5px rgba(168, 0, 0, 0.5)' },
					'100%': { boxShadow: '0 0 20px rgba(168, 0, 0, 0.8), 0 0 30px rgba(168, 0, 0, 0.4)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				pulseGlow: {
					'0%, 100%': { opacity: '0.8' },
					'50%': { opacity: '1' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
