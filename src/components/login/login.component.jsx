import 'alias_utils/styles/recovery.less'
import './login.less';
import React, { Component, PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';

import { Form, Icon, Input, Button, DatePicker } from 'antd';
const FormItem = Form.Item;

const Login = ({ onLogin, authenticated }) => {
	return (
		<div className="login-component">
			{/*<header>
				<h3>login</h3>
			</header>*/}
			<form className="login-dialog">
				<input type="text" className="username" placeholder="aloha" />
				<br/>
				<input type="password" className="password" placeholder="······" />
				{ authenticated && ( <span>asdf</span> ) }
			</form>
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
				<DatePicker />
			</Form>
		</div>
	)
};
export default Login;
