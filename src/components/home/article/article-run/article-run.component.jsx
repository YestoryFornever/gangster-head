import './article-run.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import {} from 'antd'

import CodeBlock from 'alias_utils/common/code-block/code-block.component';

import { Path } from 'alias_utils/js/lib';

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
				<ul className="article-aside">
					<li>
						<Link to={`${Path.relative(this.props.match.url, 2)}/article-list`}>
							<i className="fa fa-list" aria-hidden="true"></i>
						</Link>
					</li>
					<li>
						<Link to={`${Path.relative(this.props.match.url, 2)}/article-hit`}>
							<i className="fa fa-pencil" aria-hidden="true"></i>
						</Link>
					</li>
				</ul>
				<main className="article-run-main">
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
				</main>
			</div>
		)
	}
};