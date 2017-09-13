import './article-hit.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import CodeMirror from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

import { Modal, Input } from 'antd'

import CodeBlock from 'alias_utils/common/code-block/code-block.component';

import { Path } from 'alias_utils/js/lib';

let options = {
	lineNumbers: true,
	mode: 'markdown',
	theme: 'monokai'
};
export default class ArticleHit extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getArticle({
			id: this.props.match.params.id
		});
	}
	render(){
		return (
			<div className="article-hit-component">
				<ul className="article-aside">
					<li>
						<Link to={`${Path.relative(this.props.match.url, 2)}/article-list`}>
							<i className="fa fa-list" aria-hidden="true"></i>
						</Link>
					</li>
					<li>
						<i className="fa fa-save" aria-hidden="true" onClick={this.props.openSaveModal}></i>
					</li>
				</ul>
				<main className="article-hit-main">
					<div id="output" className='result-pane'>
						<ReactMarkdown
							source={this.props.code}
							className="result"
							renderers={
								Object.assign({}, ReactMarkdown.renderers, {
									CodeBlock: CodeBlock
								})
							}
						/>
					</div>
					<div id="input">
						<CodeMirror value={this.props.code} options={options} onChange={(editor, metadata, value)=>{
							this.props.sync(value);
						}} />
					</div>
				</main>
				<Modal
					title="save"
					visible={this.props.saveModalStatus}
					onOk={e => { }}
					onCancel={this.props.closeSaveModal}
				>
					<Input placeholder="title" defaultValue={"sdf"} />
				</Modal>
			</div>
		)
	}
};