import './nav.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Nav = ({ match, onLogin, onLogout, authenticated, test }) => {
	return (
		<nav className="navigation">
			<ul>
				<li>
					<Link to={`${match.url}`}>
						HOME
					</Link>
				</li>
				<li>
					<Link to={`${match.url}/article`}>
						ARTICLE
					</Link>
				</li>
			</ul>
		</nav>
	)
};
export default Nav;