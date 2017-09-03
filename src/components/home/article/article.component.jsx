import './article.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import {} from 'antd'

const Home = ({}) => {
	return (
		<div>
            <Route path={`${match.url}/:topicId`} component={Topic}/>
            <Route exact path={match.url} render={()=>(
                Article
            )}/>
		</div>
	)
};
export default Home;