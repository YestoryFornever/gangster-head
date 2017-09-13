import './article.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import ArticleList from './article-list/article-list.container'
import ArticleHit from './article-hit/article-hit.container'
import ArticleRun from './article-run/article-run.container'
const Home = ({ match, saveModalStatus, openSaveModal, closeSaveModal}) => {
	return (
		<div className="article-component">
			<article className="article-article">
				<Route exact path={match.url} render={() => (
					<Redirect to={`${match.url}/article-list`} />
				)} />
				<Route path={`${match.url}/article-list`} component={ArticleList} />
				{/* 顺序很重要，自上而下匹配 */}
				<Route path={`${match.url}/article-hit/:id?`} component={ArticleHit} />
				{/* <Route path={`${match.url}/article-hit`} component={ArticleHit} /> */}
				<Route path={`${match.url}/article-run/:id`} component={ArticleRun} />
			</article>
		</div>
	)
};
export default Home;