import './article.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ArticleList from './article-list/article-list.container'
import ArticleHit from './article-hit/article-hit.container'
import ArticleRun from './article-run/article-run.container'
const Home = ({ match, saveModalStatus, openSaveModal, closeSaveModal}) => {
	return (
		<Route render={({ location }) => {
			return (
				<div className="article-component">
					<Route exact path={match.url} render={() => (
						<Redirect to={`${match.url}/article-list`} />
					)} />
					<ReactCSSTransitionGroup
						transitionName="cartoon-fade" 
						transitionEnterTimeout={500}
						transitionLeaveTimeout={0}
						>
						<Route location={location}
							key={location.key} 
							path={`${match.url}/article-list`} 
							component={ArticleList} />
					</ReactCSSTransitionGroup>
					<ReactCSSTransitionGroup
						transitionName="cartoon-fade" 
						transitionEnterTimeout={500}
						transitionLeaveTimeout={0}
						>
						{/* 顺序很重要，自上而下匹配 */}
						<Route location={location}
							key={location.key} 
							path={`${match.url}/article-hit/:id?`} 
							component={ArticleHit} />
					</ReactCSSTransitionGroup>
					<ReactCSSTransitionGroup
						transitionName="cartoon-fade" 
						transitionEnterTimeout={500}
						transitionLeaveTimeout={0}
						>
						<Route location={location}
							key={location.key} 
							path={`${match.url}/article-run/:id`} 
							component={ArticleRun} />
					</ReactCSSTransitionGroup>
				</div>
			)
		}} />
	)
};
export default Home;