import theme from '@nuxt/content-theme-docs'
import tailwindTypography from '@tailwindcss/typography'

export default theme({
	// srcDir: `src/`,
	docs: {
		primaryColor: `#E24F55`,
	},
	loading: { color: `#00CD81` },
	tailwindcss: {
		jit: true,
		plugins: [tailwindTypography],
		config: {
			purge: {
				content: [`content/**/**.md`],
			},
		},
	},
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: `static`,
	/*
	 ** Global CSS
	 */
	css: [`~/assets/scss/global.scss`],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [`~/plugins/vue-tailwind.js`],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		`@nuxtjs/eslint-module`,
		`@nuxtjs/tailwindcss`,
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [],
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
	privateRuntimeConfig: {},
	publicRuntimeConfig: {
		dev: process.env.NODE_ENV !== `production`,
	},
})
