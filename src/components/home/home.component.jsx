import 'alias_utils/styles/recovery.less'
import './home.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import { Button } from 'antd'

import Wheel from 'alias_utils/common/wheel/wheel.container';
import Nav from './nav/nav.container'
import Article from './article/article.container'

const Home = ({ match, onLogin, onLogout, authenticated, test }) => {
	return (
		<div className="home-component">
			<Wheel />
			{/* <aside className="home-aside">
				<header>
					Home
					<Button type='primary' onClick={e => {
						e.preventDefault();
						onLogin(true);
					}
					}>登录</Button>
					<Button type='primary' onClick={e => {
						e.preventDefault();
						onLogout(false);
					}
					}>注销</Button>
					{authenticated && (<span>asdf</span>)}
					<Button onClick={e => {
						e.preventDefault();
						document.getElementById('audio_ding').play();
					}
					}>test</Button>
				</header>
				<Nav match={match} />
			</aside> */}
			<section className="home-section">
				<Route path={`${match.url}/article`} component={Article} />
				{/* <Route exact path={match.url} render={()=>(
					<Redirect to={`${match.url}/article`} />
				)} /> */}
			</section>
		</div>
	)
};
export default Home;