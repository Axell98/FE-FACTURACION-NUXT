// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@vueuse/nuxt',
		'@nuxtjs/google-fonts',
		'@pinia/nuxt',
		'@nuxt/ui',
	],
	ssr: false,
	imports: {
		dirs: ['store', 'composables/**'],
	},
	devtools: { enabled: false },
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		public: {
			apiURL: process.env.BASE_API_URL,
			stage: process.env.STAGE,
		},
	},
	compatibilityDate: '2025-07-15',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				quotes: 'single',
			},
		},
	},
});
