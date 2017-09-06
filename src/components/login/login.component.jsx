import './login.less';
import React, { Component, PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';

import { Form, Icon, Input, Button, DatePicker } from 'antd';
const FormItem = Form.Item;

const Login = ({ onLogin, authenticated }) => {
	return (
		<div className="login-component">
			<form className="login-dialog" onSubmit={e => {
					e.preventDefault();
					onLogin(true);
				}}>
				<input type="text" className="username" placeholder="aloha" />
				<br/>
				<input type="password" className="password" placeholder="······" />
				<br/>
				<Button htmlType="submit" type='primary' style={{display:'none'}} onClick={e => {
					e.preventDefault();
					onLogin(true);
				}}>登录</Button>
				{ authenticated && ( <span>asdf</span> ) }
			</form>
			{/*<DatePicker />*/}
		</div>
	)
};
export default Login;
