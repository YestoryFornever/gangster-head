import './nav.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Nav = ({ match, onLogin, onLogout, authenticated, test }) => {
	return (
		<nav>
			Home
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
		</nav>
	)
};
export default Nav;