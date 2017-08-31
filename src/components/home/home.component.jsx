import './home.less';
import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Button, DatePicker } from 'antd';
const Home = ({ match, onLogout, authenticated, test }) => {
	return (
		<div>
			Home
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
			<h2>二级路由</h2>
			<ul>
				<li>
					<Link to={`${match.url}/rendering`}>
						Rendering with React
					</Link>
				</li>
				<li>
					<Link to={`${match.url}/components`}>
						Components
					</Link>
				</li>
				<li>
					<Link to={`${match.url}/state`}>
						state
					</Link>
				</li>
			</ul>
			<Route path={`${match.url}/:topicId`} component={Topic}/>
			<Route exact path={match.url} render={()=>(
				<h3>Please select a topic.</h3>
			)}/>
		</div>
	)
};
const Topic = ({match})=>{return (<div><h3>{match.params.topicId}</h3></div>)};
export default Home;