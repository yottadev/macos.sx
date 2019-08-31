import CodeMirror from 'codemirror'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/jsx/jsx'

const textareaContent: string = `
import React from 'react'

export default () => <h1>Hello World!</h1>
`.trim()

const codeTextarea: Element = document.querySelector('.terminal-code textarea')
const terminalCodeMirror = CodeMirror.fromTextArea(codeTextarea, {
	mode: 'jsx',
	theme: 'dracula',
	indentWithTabs: true,
	autoCloseBrackets: true,
	indentUnit: 4
})
terminalCodeMirror.getDoc().setValue(textareaContent)
