import './index.less'
/* 
 * jquery
 */
import $ from 'jquery'
/*
 * React 
 */
import React, { Component, PropTypes } from 'react'
import ReactDOM, { render } from 'react-dom'
/*
 * Redux
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
/*
 * Router
 */
import { history } from 'alias_utils/js/history'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter as Router, routerMiddleware, push } from 'react-router-redux'
/*
 * Components
 */
// import Login from './components/login/login.container'
// import Home from './components/home/home.container'
import Manager from './components/manager/manager.container'
// import Error from './components/error/error.container'
import Loading from 'alias_utils/common/loading/loading.component'
/**
 * 异步加载组件
 */
import asyncComponent from 'alias_utils/common/async/asyncComponent'
const asyncError = asyncComponent(() =>
	System.import('./components/error/error.container.js')
		.then(module => module.default)
		.catch((err) => { return 404 }))

import Async from 'alias_utils/common/async/async.component'
import loadLogin from 'bundle-loader?lazy!./components/login/login.container'
const Login = (xxx) => {
	return (
		<Async load={loadLogin} >
			{(Widget) => {
				return (Widget ? <Widget {...xxx} /> : (<Loading></Loading>))
			}}
		</Async>
	)
}
import loadHome from 'bundle-loader?lazy!./components/home/home.container'
const Home = (xxx) => {
	return (
		<Async load={loadHome} >
			{(Widget) => {
				return (Widget ? <Widget {...xxx} /> : (<Loading></Loading>))
			}}
		</Async>
	)
}
/* 
 * DevTools
 */
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import thunk from 'redux-thunk'

const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
		<LogMonitor theme="tomorrow" preserveScrollTop={false} />
	</DockMonitor>
)

import fnReducers from 'alias_utils/js/reducers';
const middlewares = [routerMiddleware(history),thunk];
let store = createStore(
	fnReducers,
	compose(
		applyMiddleware(...middlewares),
		DevTools.instrument()
	)
);

import 'antd/lib/button/style';
import 'antd/lib/modal/style';
import 'antd/lib/input/style';
import 'antd/lib/message/style';
import 'antd/lib/tooltip/style';

/**
 * audio
 */
/* import audio_ding from 'alias_materials/videoes/ding.mp3'
import audio_du from 'alias_materials/videoes/du.mp3'
import audio_diu from 'alias_materials/videoes/diu.mp3' */

render(
	<Provider store={store}>
		<div className="Provider">
			<Router history={history}>
				<div className="Router">
					{/* <ul>
						<li><Link to="/">Login</Link></li>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/error">Error</Link></li>
					</ul>
					<hr /> */}
					<Switch>
						<Route exact path="/" render={() => <Redirect to="/home" /> } />
						<Route path="/home" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/manager" render={(props) => {//此处必须把父级组件的属性传入子级组件
								return store.getState().commonReducer.auth 
									? ( <Manager {...props}/> ) 
									: ( <Redirect to="/" /> )
							}
						} />
						<Route component={asyncError} />
					</Switch>
				</div>
			</Router>
			{/* <DevTools /> */}
			{/* <audio id="audio_ding" src={audio_ding} ></audio>
			<audio id="audio_du" src={audio_du} ></audio>
			<audio id="audio_diu" src={audio_diu} ></audio> */}
		</div>
	</Provider>,
	document.getElementById('app')
);