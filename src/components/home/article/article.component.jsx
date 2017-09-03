import './article.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import ArticleList from './article-list/article-list.container'
import ArticleHit from './article-hit/article-hit.container'
import ArticleRun from './article-run/article-run.container'
const Home = ({match}) => {
	return (
		<div>
            <Route exact path={match.url} component={ArticleList} />
		</div>
	)
};
export default Home;