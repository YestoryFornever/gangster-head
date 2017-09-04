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
		</div>
	)
};
export default ArticleList;