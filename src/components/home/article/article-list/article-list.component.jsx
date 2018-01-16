import './article-list.less'
import React, { Component, PropTypes } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { history } from 'alias_utils/js/history'

import { Button, Timeline } from 'antd'

import { Path, DateTime } from 'alias_utils/js/lib';

import Wheel from 'alias_utils/common/wheel/wheel.container';

let calcDate = (d)=>{
	// return "周" + "日一二三四五六".charAt(new Date(d).getDay());
	return DateTime.dateformat(new Date(d),'yyyy-MM-dd h:m:s')
}

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
							<i className="fa fa-plus-circle" aria-hidden="true"></i>
						</Link>
					</li>
				</ul>
				<main className="article-list-main">
					<ul className="article-list-ul">
						{this.props.articles.map((item, index) =>
							<li key={index}>
								<Link className="article-title" to={`${Path.relative(this.props.match.url, 1)}/article-run/${item._id}`}>
									{item.title}
								</Link>
								<span className="article-del">
									<i className="fa fa-trash" aria-hidden="true"
									onClick={e=>{
										this.props.deleteArticle({
											id:item._id
										});
									}}></i>
								</span>
								<Link className="article-edit" to={`${Path.relative(this.props.match.url, 1)}/article-hit/${item._id}`}>
									<i className="fa fa-pencil" aria-hidden="true"></i>
								</Link>
								<div className="article-date">{calcDate(item.create_time)}</div>
							</li>
						)}
					</ul>
				</main>
				<nav className="nav-wheel">
					<Wheel />
				</nav>
			</div>
		)
	}
}