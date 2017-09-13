import './article.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import { history } from 'alias_utils/js/history'

import { Modal } from 'antd'

import ArticleList from './article-list/article-list.container'
import ArticleHit from './article-hit/article-hit.container'
import ArticleRun from './article-run/article-run.container'
const Home = ({ match, saveModalStatus, openSaveModal, closeSaveModal}) => {
	return (
		<div className="article-component">
			<ul className="article-aside">
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
				<li>
					<Link to={`/home/article/article-run/23445235`}>
						<i className="fa fa-file-text" aria-hidden="true"></i>
					</Link>
				</li>
				<li>
					<i className="fa fa-save" aria-hidden="true" onClick={openSaveModal}></i>
				</li>
			</ul>
			<article className="article-article">
				<Route exact path={match.url} render={() => (
					<Redirect to={`${match.url}/article-list`} />
				)} />
				<Route path={`${match.url}/article-list`} component={ArticleList} />
				<Route path={`${match.url}/article-hit`} component={ArticleHit} />
				{/* 顺序很重要，自上而下匹配 */}
				<Route path={`${match.url}/article-run/:id`} component={ArticleRun} />
			</article>
			<Modal
				title="save"
				visible={saveModalStatus}
				onOk={e=>{}}
				onCancel={closeSaveModal}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	)
};
export default Home;