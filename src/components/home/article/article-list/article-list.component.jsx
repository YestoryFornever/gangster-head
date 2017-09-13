import './article-list.less'
import React, { Component, PropTypes } from 'react'
import { Redirect, Link } from 'react-router-dom'

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
			<div>
				<Timeline>
					{this.props.articles.map((item, index) =>
						<Timeline.Item color="#28c" key={index}>
							<Link to={`${Path.relative(this.props.match.url,1)}/article-run/${item.articleId}`}>
								{item.title} {item.time}
							</Link>
						</Timeline.Item>)
					}
				</Timeline>
				{/* <h1 className="test-text">测试用文本，words for test</h1> */}
			</div>
		)
	}
}