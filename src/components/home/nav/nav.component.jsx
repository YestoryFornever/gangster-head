import './nav.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Nav = ({ match, onLogin, onLogout, authenticated, test }) => {
	return (
		<nav className="navigation">
			<h2>二级路由</h2>
			<ul>
				<li>
					<Link to={`${match.url}`}>
						主页
					</Link>
				</li>
				<li>
					<Link to={`${match.url}/article`}>
						文章
					</Link>
				</li>
				<li>
					<Link to={`${match.url}/image`}>
						图片
					</Link>
				</li>
			</ul>
		</nav>
	)
};
export default Nav;