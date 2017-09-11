const devConfig = require('./eslintrc.js')

const config = Object.assign({}, devConfig, {})

config.extends = [ 'prettier' ]
config.plugins.push('prettier')
config.rules = Object.assign({}, config.rules, {
	'no-console': 'warn',
	'no-debugger': 'warn',
	
	'space-infix-ops': 'warn',
	'import/newline-after-import': [ 'warn', { 'count': 2 } ],
	'no-confusing-arrow': [ 'warn', { 'allowParens': false } ],
	'operator-linebreak': [ 'warn', 'none', { 'overrides': { ':': 'before', '?': 'before' } } ],
	'generator-star-spacing': [ 'error', { 'before': false, 'after': true } ],
	'array-bracket-spacing': [ 'warn', 'always' ],
	'arrow-spacing': [ 'warn', { 'before': true, 'after': true } ],
	'arrow-parens': [ 'warn', 'always' ],
	'arrow-body-style': [ 'warn', 'as-needed' ],
	'space-unary-ops': [ 'warn', { 'words': true, 'nonwords': false } ],
	'space-in-parens': [ 'warn', 'never' ],
	'space-before-function-paren': [ 'warn', {
		'anonymous': 'always',
		'named': 'always',
		'asyncArrow': 'always'
	} ],
	'space-before-blocks': [ 'warn', 'always' ],
	'semi': [ 'warn', 'never' ],
	'quotes': [ 'warn', 'single' ],
	'object-curly-spacing': [ 'warn', 'always' ],
	'no-multiple-empty-lines': 'error',
	'no-lonely-if': 'warn',
	'newline-per-chained-call': [ 'warn', { 'ignoreChainWithDepth': 3 } ],
	'max-len': [ 'warn', 120, 4 ],
	'linebreak-style': [ 'warn', 'unix' ],
	'keyword-spacing': [ 'warn', { 'before': true, 'after': true } ],
	'key-spacing': [ 'warn', { 'beforeColon': false } ],
	'jsx-quotes': [ 'warn', 'prefer-double' ],
	'indent': [ 'warn', 'tab', { 'SwitchCase': 1 } ],
	'eol-last': [ 'warn', 'always' ],
	'func-call-spacing': [ 'warn', 'never' ],
	'block-spacing': [ 'warn', 'always' ],
	'computed-property-spacing': [ 'warn', 'never' ],
	'comma-spacing': [ 'warn', { 'before': false, 'after': true } ],
	'brace-style': [ 'warn', 'stroustrup', { 'allowSingleLine': true } ],
	'dot-location': [ 'warn', 'property' ],
	'new-parens': 'warn',
	'no-whitespace-before-property': 'warn',
	
	'react/jsx-curly-spacing': [ 'warn', 'never' ],
	'react/jsx-indent': [ 'warn', 'tab' ],
	'rest-spread-spacing': [ 'warn', 'never' ],
	'react/jsx-equals-spacing': [ 'warn', 'never' ],
})

module.exports = config
