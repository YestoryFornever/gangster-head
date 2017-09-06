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
import Home from './components/home/home.container'
import Manager from './components/manager/manager.container'
// import Error from './components/error/error.container'
/**
 * 异步加载组件
 */
import asyncComponent from 'alias_utils/js/asyncComponent'
const asyncLogin = asyncComponent(() =>
	System.import('./components/login/login.container.js')
		.then(module => module.default)
		.catch((err) => { return 404 }))
const asyncHome = asyncComponent(() =>
	System.import('./components/home/home.container.js')
		.then(module => module.default)
		.catch((err) => { return 404 }))
const asyncError = asyncComponent(() =>
	System.import('./components/error/error.container.js')
		.then(module => module.default)
		.catch((err) => { return 404 }))
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
						<Route path="/home" render={(props) => <Home {...props}/> } />
						<Route path="/login" component={asyncLogin} />
						<Route path="/manager" render={(props) => {//此处必须把父级组件的属性传入子级组件
								return store.getState().loginReducer.auth 
									? ( <Manager {...props}/> ) 
									: ( <Redirect to="/" /> )
							}
						} />
						<Route component={asyncError} />
					</Switch>
				</div>
			</Router>
			{/* <DevTools /> */}
		</div>
	</Provider>,
	document.getElementById('app')
);

/**
 * button audio
 * 路由缓存
 * 富文本编辑器
 * markdown
 * 
 * favicon 404
 * redux-gen - 生成器
 * react-redux-form - 表单提交
 * 
 * #css module
 * #react-router-redux - 路由
 * #extract-text-webpack-plugin
 * #redux-thunk - 实现异步action （ajax）
 */