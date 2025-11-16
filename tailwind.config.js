import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1600px',
			},
		},
		extend: {
			colors: {
				// Gold (Primary - Buddhist)
				gold: {
					50: '#FDF8E8',
					500: '#B8860B',
					600: '#9A7209',
					900: '#6B5006',
				},
				// Warm Neutrals
				neutral: {
					50: '#FAFAF8',
					100: '#F5F4F0',
					200: '#E8E6E0',
					500: '#9B9A94',
					700: '#4A4A45',
					900: '#1C1C19',
				},
				// Teal (Medical accent)
				teal: {
					50: '#EFF7F6',
					500: '#2D7A6E',
					700: '#1F5349',
				},
				// Navy (Science accent)
				navy: {
					50: '#EFF2F7',
					500: '#2C4F7C',
					700: '#1E3751',
				},
			},
			fontFamily: {
				serif: ['Playfair Display', 'Georgia', 'serif'],
				sans: ['Lato', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
			},
			fontSize: {
				display: ['72px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
				'h1': ['56px', { lineHeight: '1.15', letterSpacing: '-0.005em' }],
				'h2': ['40px', { lineHeight: '1.2' }],
				'h3': ['28px', { lineHeight: '1.3', letterSpacing: '0.01em' }],
				'h4': ['20px', { lineHeight: '1.35', letterSpacing: '0.02em' }],
				'body-lg': ['20px', { lineHeight: '1.7' }],
				'body': ['16px', { lineHeight: '1.6', letterSpacing: '0.01em' }],
			},
			spacing: {
				'2': '8px',
				'3': '12px',
				'4': '16px',
				'6': '24px',
				'8': '32px',
				'12': '48px',
				'16': '64px',
				'24': '96px',
				'32': '128px',
				'40': '160px',
			},
			borderRadius: {
				'sm': '8px',
				'md': '12px',
				'lg': '16px',
				'full': '9999px',
			},
			boxShadow: {
				'card': '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
				'card-hover': '0 12px 24px rgba(0, 0, 0, 0.12), 0 6px 12px rgba(0, 0, 0, 0.06)',
				'nav': '0 2px 8px rgba(0, 0, 0, 0.06)',
				'modal': '0 24px 48px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.08)',
			},
			transitionDuration: {
				'fast': '300ms',
				'standard': '400ms',
				'slow': '500ms',
				'elegant': '600ms',
			},
			transitionTimingFunction: {
				'standard': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
				'elegant': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			},
			backgroundImage: {
				'gold-metallic': 'linear-gradient(135deg, #D4AF37 0%, #F4E4B5 50%, #C9A961 100%)',
			},
		},
	},
	plugins: [tailwindcssAnimate],
}
