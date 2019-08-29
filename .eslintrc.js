module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		semi: ['error', 'never'],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
	},
}
