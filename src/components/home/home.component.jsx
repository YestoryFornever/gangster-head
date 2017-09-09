import 'alias_utils/styles/recovery.less'
import './home.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import { Button } from 'antd'

import Nav from './nav/nav.container'
import Article from './article/article.container'

import audio from 'alias_materials/videoes/ding.mp3'

const Home = ({ match, onLogin, onLogout, authenticated, test }) => {
	return (
		<div className="home-component">
			<audio id="audio" src={audio} ></audio>
			<aside className="home-aside">
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
						document.getElementById('audio').play();
					}
					}>test</Button>
				</header>
				<Nav match={match} />
			</aside>
			<section className="home-section">
				<Route path={`${match.url}/article`} component={Article} />
				<Route exact path={match.url} render={()=>(
					<Redirect to={`${match.url}/article`} />
				)} />
			</section>
		</div>
	)
};
export default Home;