import './article-list.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Button, Timeline } from 'antd'

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
							<Link to={`../article-run/${item._id}`}>
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