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

import CodeBlock from 'alias_utils/common/code-block/code-block.component';

let updateCode = function(){
	output = input;
};
const ArticleRun = ({ match, code }) => {
	return (
		<div className="article-run-component">
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
		</div>
	)
};
export default ArticleRun;