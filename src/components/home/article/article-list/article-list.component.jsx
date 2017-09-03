import './article-list.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Timeline } from 'antd'

const ArticleList = ({match}) => {
	return (
		<div>
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01
                    <a href="#">asdf</a>
                </Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
		</div>
	)
};
export default ArticleList;