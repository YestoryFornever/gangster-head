import './article.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import {} from 'antd'

const Home = ({}) => {
	return (
		<div>
            Article
            {/* <Route path={`${match.url}/:topicId`} component={Topic}/>
            <Route exact path={match.url} render={()=>(
                <Timeline>
                    <Timeline.Item>Create a services site 2015-09-01
                        <a href="#">asdf</a>
                    </Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
            )}/> */}
		</div>
	)
};
export default Home;