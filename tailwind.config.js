/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', 'class'],
  theme: {
  	extend: {
  		colors: {
  			'pastel-pink': '#F9C5D1',
  			'pastel-blue': '#CFE0E8',
  			'pastel-purple': '#D5BFFF',
  			'pastel-green': '#C8E6C9',
  			'pastel-orange': '#FFD4A3',
  			'pastel-yellow': '#FFF3C4',
  			'warm-gray': '#F5F5F0',
  			'deep-navy': '#1A1B23',
  			'soft-charcoal': '#2D2E36',
  			'dark-bg': '#0F0F14',
  			'dark-surface': '#1A1B23',
  			'dark-card': '#252631',
  			'dark-border': '#2D2E36',
  			'dark-text': '#E5E7EB',
  			'dark-text-secondary': '#9CA3AF',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			serif: [
  				'Playfair Display',
  				'serif'
  			],
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem'
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			gradient: 'gradient 8s ease infinite',
  			'fade-up': 'fadeUp 0.8s ease-out'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			gradient: {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			},
  			fadeUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'grid-pattern': '',
  			'grid-pattern-light': ''
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};