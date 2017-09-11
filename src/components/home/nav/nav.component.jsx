import './nav.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Nav = ({ match }) => {
	return (
		<ul className="navigation">
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
	)
};
export default Nav;