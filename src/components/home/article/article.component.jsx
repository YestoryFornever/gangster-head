import './article.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import { history } from 'alias_utils/js/history'

import ArticleList from './article-list/article-list.container'
import ArticleHit from './article-hit/article-hit.container'
import ArticleRun from './article-run/article-run.container'
const Home = ({match}) => {
	return (
		<div>
			{/* <button type="button" onClick={e=>{
					history.push('./article-hit')
				}
			}>article-hit</button> */}
			<ul>
				<li>
					<Link to={`${match.url}/article-list`}>
						list
					</Link>
				</li>
				<li>
					<Link to={`${match.url}/article-hit`}>
						hit
					</Link>
				</li>
				<li>
					<Link to={`${match.url}/article-run`}>
						run
					</Link>
				</li>
			</ul>
			<Route exact path={match.url} render={()=>(
				<Redirect to={`${match.url}/article-list`} />
			)} />
            <Route path={`${match.url}/article-list`} component={ArticleList} />
			<Route path={`${match.url}/article-hit`} component={ArticleHit} />
			<Route path={`${match.url}/article-run`} component={ArticleRun} />
		</div>
	)
};
export default Home;