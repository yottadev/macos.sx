import CodeMirror from 'codemirror'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/jsx/jsx'

const textareaContent = `
import React from 'react'

const App = () => {
    return (
        <div>
            <p>Hello World</p>
        </div>
    )
}
`.trim()

const codeTextarea: HTMLTextAreaElement = document.querySelector(
	'.terminal-code textarea'
)

const myCodeMirror = CodeMirror.fromTextArea(codeTextarea, {
	mode: 'jsx',
	theme: 'dracula',
	indentWithTabs: true,
	autoCloseBrackets: true,
})

myCodeMirror.getDoc().setValue(textareaContent)
