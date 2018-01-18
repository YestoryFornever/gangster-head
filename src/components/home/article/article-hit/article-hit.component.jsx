import './article-hit.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import CodeMirror from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

import Modal from 'antd/lib/modal'
import Input from 'antd/lib/input'
import message from 'antd/lib/message'

import CodeBlock from 'alias_utils/common/code-block/code-block.component';

import { Path } from 'alias_utils/js/lib';

let options = {
	lineNumbers: true,
	mode: 'markdown',
	theme: 'monokai',
	scrollbarStyle: 'null',
	lineWrapping: true
};
export default class ArticleHit extends Component{
	constructor(props) {
		super(props);
		// console.log('constructor')
	}
	/* componentWillMount(){
		console.log('will mount')
	} */
	componentDidMount() {
		// console.log('did mount')
		if(this.props.match.params.id){
			this.props.getArticle({
				id: this.props.match.params.id
			});
		}
	}
	componentWillReceiveProps(nextProps){
		// console.log('receive')
		if (this.props.match.params.id!==nextProps.match.params.id){
			if(nextProps.match.params.id){
				this.props.getArticle({
					id: nextProps.match.params.id
				});
			}else{
				this.props.dispatchContent("");
				this.props.dispatchTitle("");
				this.props.dispatchSource("");
			}
		}
	}
	/* componentWillUpdate(){
		console.log('will update')
	}
	componentDidUpdate(){
		console.log('did update')
	} */
	componentWillUnmount(){
		// console.log('will unmount')
		this.props.dispatchContent("");
		this.props.dispatchTitle("");
		this.props.dispatchSource("");
	}
	render(){
		return (
			<div className="article-hit-component">
				<ul className="article-aside">
					<li>
						<Link to={`${Path.backto(this.props.match.url, '/article')}/article-list`}>
							<i className="fa fa-list" aria-hidden="true"></i>
						</Link>
					</li>
					<li>
						<i className="fa fa-save" aria-hidden="true" onClick={this.props.openSaveModal}></i>
					</li>
				</ul>
				<main className="article-hit-main">
					<div className='output'>
						<ReactMarkdown
							source={this.props.content}
							className="markdown-output"
							renderers={
								Object.assign({}, ReactMarkdown.renderers, {
									CodeBlock: CodeBlock
								})
							}
						/>
					</div>
					<div className="input">
						<CodeMirror className="code-mirror" 
							value={this.props.source} 
							options={options} 
							onChange={(editor, metadata, value)=>{
								this.props.dispatchContent(value);
							}}
						/>
					</div>
				</main>
				<Modal
					title="save"
					visible={this.props.saveModalStatus}
					onOk={e => {
						if(!this.props.title){
							message.error('木有【标题】不让存');
							return false;
						}
						if (this.props.match.params.id) {
							this.props.updateArticle({
								id:this.props.match.params.id,
								title: this.props.title,
								content: this.props.content
							});
						}else{
							this.props.createArticle({
								title: this.props.title,
								content: this.props.content
							});
						}
					}}
					onCancel={this.props.closeSaveModal}
				>
					<Input placeholder="title" 
						value={this.props.title} 
						onChange={e=>{
							this.props.dispatchTitle(e.target.value);
						}} />
				</Modal>
			</div>
		)
	}
};