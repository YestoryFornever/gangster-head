import './article-list.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Timeline } from 'antd'

const ArticleList = ({match}) => {
	return (
		<div>
            <Timeline>
                {[1, 2, 3, 4].map((item, index) => 
                    <Timeline.Item key={index}>{item}</Timeline.Item>)
                }
            </Timeline>
		</div>
	)
};
export default ArticleList;