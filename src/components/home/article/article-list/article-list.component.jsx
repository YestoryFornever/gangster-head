import './article-list.less'
import React, { Component, PropTypes } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { history } from 'alias_utils/js/history'

import { Button, Timeline } from 'antd'

import { Path } from 'alias_utils/js/lib';

export default class ArticleList extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.getArticleList();
	}
	render(){
		return (
			<div className="article-list-component">
				<ul className="article-aside">
					<li>
						<Link to={`${Path.relative(this.props.match.url, 1)}/article-hit`}>
							<i className="fa fa-pencil" aria-hidden="true"></i>
						</Link>
					</li>
				</ul>
				<main className="article-list-main">
					<ul className="article-list-ul">
						{this.props.articles.map((item, index) =>
							<li key={index}>
								<Link to={`${Path.relative(this.props.match.url, 1)}/article-run/${item._id}`}>
									{item.title}<br/>{item.create_time}
								</Link>
								<Link to={`${Path.relative(this.props.match.url, 1)}/article-hit/${item._id}`}>
									edit
								</Link>
							</li>)
						}
					</ul>
				</main>
			</div>
		)
	}
}