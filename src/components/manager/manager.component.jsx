import './manager.less'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Button } from 'antd'
import Topic from './topic.component'

class Manager extends React.Component{
	render(){
		return (
			<div>
				{this.props.authenticated && (<Button type='primary' onClick={e => {
					e.preventDefault();
					this.props.onLogout(false);
				}}>注销</Button>)}
				<br />
				{/* <Button onClick={e => {
					e.preventDefault();
					this.props.test(1);
				}
				}>test</Button> */}
				<h2>二级路由</h2>
				<ul>
					<li>
						<Link to={`${this.props.match.url}/rendering`}>
							Rendering with React
					</Link>
					</li>
					<li>
						<Link to={`${this.props.match.url}/components`}>
							Components
					</Link>
					</li>
					<li>
						<Link to={`${this.props.match.url}/state`}>
							state
					</Link>
					</li>
				</ul>
				<Route path={`${this.props.match.url}/:topicId`} component={Topic} />
				<Route exact path={this.props.match.url} render={() => (
					<h3>Please select a topic.</h3>
				)} />
			</div>
		)
	}
};
export default Manager;