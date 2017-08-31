import './login.less';
import React, { Component, PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';

import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

const Login = ({ onLogin, authenticated }) => {
	return (
		<div className="login-component">
			<header>
				<h3>login</h3>
			</header>
			<main>
				<section className="login-dialog">
					<Form layout="inline" >
						<FormItem>
							<Input placeholder="Username" />
						</FormItem>
						<FormItem>
							<Button type='primary' onClick={e => {
								e.preventDefault();
								onLogin(true);
							}}>登录</Button>
						</FormItem>
					</Form>
					{ authenticated && ( <span>asdf</span> ) }
				</section>
			</main>
		</div>
	)
};
export default Login;
