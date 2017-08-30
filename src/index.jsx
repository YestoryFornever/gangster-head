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
import { history } from './utils/history';
import { BrowserRouter as Router1, Route, Link, Redirect } from 'react-router-dom'
import { ConnectedRouter as Router, routerMiddleware, push } from 'react-router-redux'
/*
 * Components
 */
import Login from './components/login/login.container'
import Home from './components/home/home.container'
import Error from './components/error/error.container'
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

import fnReducers from './utils/reducers';
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
					<ul>
						<li><Link to="/">Login</Link></li>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/error">Error</Link></li>
					</ul>
					<hr />
					<Route exact path="/" component={Login} />
					{/* <Route path="/home" component={Home} /> */}
					<Route path="/home" render={(props) => {//此处必须把父级组件的属性传入子级组件
							return store.getState().login.auth 
								? ( <Home {...props}/> ) 
								: ( <Redirect to="/" /> )
						}
					} />
					<Route path="/error" component={Error} />
				</div>
			</Router>
			{/* <DevTools /> */}
		</div>
	</Provider>,
	document.getElementById('app')
);

// redux-thunk - 实现异步action （ajax）
// redux-gen - 生成器
// react-router-redux - 路由
// react-redux-form - 表单提交