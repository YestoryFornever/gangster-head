import './article-list.less'
import React, { Component, PropTypes } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { history } from 'alias_utils/js/history'

import { Button, Timeline } from 'antd'

import { Path } from 'alias_utils/js/lib';

export default class ArticleList extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.getArticleList();
	}
	render(){
		return (
			<div className="article-list-component">
				<ul className="article-aside">
					<li>
						<Link to={`${Path.relative(this.props.match.url, 1)}/article-hit`}>
							<i className="fa fa-pencil" aria-hidden="true"></i>
						</Link>
					</li>
				</ul>
				<main className="article-list-main">
					<Timeline>
						{this.props.articles.map((item, index) =>
							<Timeline.Item color="#28c" key={index}>
								<Link to={`${Path.relative(this.props.match.url, 1)}/article-run/${item._id}`}>
									{item.title} {item.time}
								</Link>
								<Link to={`${Path.relative(this.props.match.url, 1)}/article-hit/${item._id}`}>
									edit
							</Link>
							</Timeline.Item>)
						}
					</Timeline>
					<Button type="primary" onClick={e => {
						e.preventDefault();
						history.push(`${Path.relative(this.props.match.url, 1)}/article-hit`);
					}} >添加</Button>
					{/* <h1 className="test-text">测试用文本，words for test</h1> */}
				</main>
			</div>
		)
	}
}