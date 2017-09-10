import './article-run.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import {} from 'antd'

import CodeBlock from 'alias_utils/common/code-block/code-block.component';

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