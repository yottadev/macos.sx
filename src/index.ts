import CodeMirror from 'codemirror'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/jsx/jsx'

const quotes: string[] = [
	'this mvp was made in a evening',
	'created by html programmers',
	'semicolons are noise',
	'arrays start at -1'
]

const appleIcon: HTMLElement = document.querySelector('.apple-icon')
const textareaContent: string = `
import React from 'react'

export default () => <h1>Hello World!</h1>
`.trim()

const codeTextarea: HTMLTextAreaElement = document.querySelector(
	'.terminal-code textarea'
)
const terminalCodeMirror: CodeMirror.EditorFromTextArea = CodeMirror.fromTextArea(
	codeTextarea,
	{
		mode: 'jsx',
		theme: 'dracula',
		indentWithTabs: true,
		autoCloseBrackets: true,
		indentUnit: 4
	}
)
terminalCodeMirror.getDoc().setValue(textareaContent)

// Sets a random quote under the apple logo
const quoteIndex = Math.round(Math.random() * Math.floor(quotes.length - 1))
appleIcon.dataset.quote = quotes[quoteIndex]
