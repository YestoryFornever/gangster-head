import './article-list.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Button, Timeline } from 'antd'

const ArticleList = ({ match, articles, getArticleList}) => {
	return (
		<div>
			<Button onClick={e => {
				e.preventDefault();
				getArticleList();
			}
			}>get</Button>
			<Timeline>
				{articles.map((item, index) => 
					<Timeline.Item key={index}>{item.title}</Timeline.Item>)
				}
			</Timeline>
			{/* <h1 className="test-text">测试用文本，words for test</h1> */}
		</div>
	)
};
export default ArticleList;