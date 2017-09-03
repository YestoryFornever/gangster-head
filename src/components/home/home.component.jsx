import './home.less';
import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Button, Timeline } from 'antd';

import Nav from './nav/nav.container'
const Home = ({ match, onLogin, onLogout, authenticated, test }) => {
	return (
		<div>
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
			<br />
			<Button onClick={e => {
				e.preventDefault();
				test(1);
			}
			}>test</Button>
			<Button>
				<Link to="/error">错误</Link>
			</Button>
			<Nav match={match} />
			<Route path={`${match.url}/:topicId`} component={Topic}/>
			<Route exact path={match.url} render={()=>(
				<h3>Please select a topic.</h3>
			)}/>
			<Timeline>
				<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
				<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
				<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
				<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
			</Timeline>
		</div>
	)
};
const Topic = ({match})=>{return (<div><h3>{match.params.topicId}</h3></div>)};
export default Home;