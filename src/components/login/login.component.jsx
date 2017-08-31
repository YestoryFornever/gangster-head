import './login.less';
import React, { Component, PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';

import { Button, DatePicker } from 'antd';

const Login = ({ onLogin, authenticated }) => {
	return (
		<div>
			<header>
				<h3>login</h3>
			</header>
			<main>
				<section className="login-dialog">
					<Button type='primary' onClick={e=>{
						e.preventDefault();
						onLogin(true);}
					}>登录</Button>
					{ authenticated && ( <span>asdf</span> ) }
					<Button>
						<Link to="/error">错误</Link>
					</Button>
					<DatePicker />
				</section>
			</main>
		</div>
	)
};
export default Login;
