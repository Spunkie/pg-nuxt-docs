module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: `babel-eslint`,
	},
	extends: [`@nuxtjs`, `prettier`, `prettier/vue`, `plugin:prettier/recommended`, `plugin:nuxt/recommended`],
	plugins: [`html`, `prettier`],
	// add your custom rules here
	rules: {
		'require-await': `off`,
		'prefer-template': `error`,
		quotes: [`error`, `backtick`, { avoidEscape: true }],
		camelcase: [
			`error`,
			{
				properties: `never`,
				allow: [`^[$]_`],
			},
		],
	},
}
