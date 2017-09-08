import './article-run.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

import {} from 'antd'

import CodeBlock from './code-block'

let updateCode = function(){
	output = input;
};
let options = {
	lineNumbers: true,
	mode: 'markdown',
	theme: 'monokai'
};
const ArticleRun = ({ match, code, sync}) => {
	return (
		<div>
			<div id="output" className='result-pane'>
				<CodeBlock literal="function aaa(){}" language="javascript" />
				<ReactMarkdown 
					source={code} 
					className="result"
					renderers={
						Object.assign({}, ReactMarkdown.renderers, {
							CodeBlock: CodeBlock
						})
					} 
				/>
			</div>
			<div id="input">
				<CodeMirror value={code} onChange={sync} options={options} />
			</div>
		</div>
	)
};
export default ArticleRun;