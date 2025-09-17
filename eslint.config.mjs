import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'vue/multi-word-component-names': 'off',
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'@typescript-eslint/no-explicit-any': 'off',
	},
});
