import './article-hit.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

import { Modal } from 'antd'

import CodeBlock from 'alias_utils/common/code-block/code-block.component';

import { Path } from 'alias_utils/js/lib';

let options = {
	lineNumbers: true,
	mode: 'markdown',
	theme: 'monokai'
};
const ArticleHit = ({ match, code, sync, saveModalStatus, openSaveModal, closeSaveModal}) => {
	return (
		<div className="article-hit-component">
			<ul className="article-aside">
				<li>
					<Link to={`${Path.relative(match.url, 2)}/article-list`}>
						<i className="fa fa-list" aria-hidden="true"></i>
					</Link>
				</li>
				<li>
					<i className="fa fa-save" aria-hidden="true" onClick={openSaveModal}></i>
				</li>
			</ul>
			<main className="article-hit-main">
				<div id="output" className='result-pane'>
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
			</main>
			<Modal
				title="save"
				visible={saveModalStatus}
				onOk={e => { }}
				onCancel={closeSaveModal}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	)
};
export default ArticleHit;