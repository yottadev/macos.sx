import CodeMirror from 'codemirror'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/jsx/jsx'

import fileSaver from 'file-saver'
import domToImage from 'dom-to-image'

const quotes: string[] = [
	'this mvp was made in a evening',
	'created by html programmers',
	'semicolons are noise',
	'arrays start at -1',
	'space sensitive syntax ftw',
	'keep it simple stupid'
]

const CodeMirrorSettings: object = {
	mode: 'jsx',
	theme: 'dracula',
	indentWithTabs: true,
	autoCloseBrackets: true,
	indentUnit: 4
}

// Defines DOM elements
const settingsBtn: HTMLElement = document.querySelector('.settings-btn')
const appleIcon: HTMLElement = document.querySelector('.apple-icon')
const screenshotArea: HTMLElement = document.querySelector('.screenshot-area')
const terminalWindowTitle: HTMLElement = document.querySelector('.window-title')
const terminalSettings: HTMLElement = document.querySelector('.terminal-settings')
const screenshotBtn: HTMLElement = document.querySelector('.screenshot-btn')
const textareaContent: string = `import React from 'react'\n\nexport default () => <h1>Hello World!</h1>`.trim()
const codeTextarea: HTMLTextAreaElement = document.querySelector('.terminal-code textarea')

// Initialize CodeMirror instance
const terminalCodeMirror: CodeMirror.EditorFromTextArea = CodeMirror.fromTextArea(codeTextarea, CodeMirrorSettings)

// Set terminal placeholder code
terminalCodeMirror.getDoc().setValue(textareaContent)

// Open the settings panel
function toggleTerminalSettings() {
	if (terminalSettings.classList.contains('opened-terminal-settings')) {
		screenshotBtn.setAttribute('disabled', 'false')
		terminalSettings.classList.remove('opened-terminal-settings')
		settingsBtn.dataset.icon = ''
		terminalWindowTitle.style.opacity = '0'
	} else {
		terminalSettings.classList.add('opened-terminal-settings')
		screenshotBtn.setAttribute('disabled', 'true')
		settingsBtn.dataset.icon = ''
		terminalWindowTitle.style.opacity = '1'
	}
}

function downloadScreenshot() {
	domToImage.toBlob(screenshotArea).then(blob => fileSaver.saveAs(blob, 'macos-sx-screenshot.png'))
}

// Sets a random quote under the apple logo
const quoteIndex = Math.round(Math.random() * Math.floor(quotes.length - 1))
appleIcon.dataset.quote = quotes[quoteIndex]

settingsBtn.addEventListener('click', () => toggleTerminalSettings())

// Downloads the terminal screenshot as png
screenshotBtn.addEventListener('click', () => downloadScreenshot())
