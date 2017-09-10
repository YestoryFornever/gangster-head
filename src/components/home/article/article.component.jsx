import './article.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import { history } from 'alias_utils/js/history'

import ArticleList from './article-list/article-list.container'
import ArticleHit from './article-hit/article-hit.container'
import ArticleRun from './article-run/article-run.container'
const Home = ({match}) => {
	return (
		<div className="article-component">
			<aside className="article-aside">
				{/* <button type="button" onClick={e=>{
						history.push('./article-hit')
					}
				}>article-hit</button> */}
				<ul>
					<li>
						<Link to={`${match.url}/article-list`}>
							<i className="fa fa-list" aria-hidden="true"></i>
						</Link>
					</li>
					<li>
						<Link to={`${match.url}/article-hit`}>
							<i className="fa fa-pencil" aria-hidden="true"></i>
						</Link>
					</li>
					<li>
						<Link to={`${match.url}/article-run`}>
							<i className="fa fa-file-text" aria-hidden="true"></i>
						</Link>
					</li>
				</ul>
			</aside>
			<article className="article-article">
				<Route exact path={match.url} render={() => (
					<Redirect to={`${match.url}/article-list`} />
				)} />
				<Route path={`${match.url}/article-list`} component={ArticleList} />
				<Route path={`${match.url}/article-hit`} component={ArticleHit} />
				<Route path={`${match.url}/article-run`} component={ArticleRun} />
			</article>
		</div>
	)
};
export default Home;