module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
		},
	},
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		semi: ['error', 'never'],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
	},
}
