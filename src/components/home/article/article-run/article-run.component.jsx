import './article-run.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import {} from 'antd'

import CodeBlock from 'alias_utils/common/code-block/code-block.component';

export default class ArticleRun extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getArticle({
			id:this.props.match.params.id
		});
	}
	render(){
		return (
			<div className="article-run-component">
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
			</div>
		)
	}
};