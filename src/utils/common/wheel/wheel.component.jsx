import './wheel.less'
import $ from 'jquery'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import Planet from './planet/planet.component'
import Satellite from './satellite/satellite.component'

import { history } from 'alias_utils/js/history'

import Anarchy from 'alias_materials/images/anarchy.jpg'
const Wheel = ({ match, wheeling, deg, wheelingPause, wheelingRun, setWheelDeg, onLogin, onLogout, authenticated }) => {
	return (
		<div className="wheel-component"
			onWheel={e=>{
				e.preventDefault();
				e.stopPropagation();
				setWheelDeg(e.deltaY>0);
			}
		}>
			<div className="star-system" >
				<div className="path"></div>
				<div className="fixed-star"></div>

				<Planet wheeling={wheeling} deg={deg}
					wheelingPause={wheelingPause}
					wheelingRun={wheelingRun}
					skew={-15} 
					tooltip={"blog列表"}
					icon={"fa-list"}
					onPlanetClick={e=>{
						history.push('/home/article/article-list')
					}}/>
				
				<Satellite wheeling={wheeling} deg={deg}
					wheelingPause={wheelingPause}
					wheelingRun={wheelingRun}
					skew={45} />

				<Planet wheeling={wheeling} deg={deg} 
					wheelingPause={wheelingPause} 
					wheelingRun={wheelingRun} 
					skew={105}
					tooltip={"新增blog"}
					icon={"fa-plus-circle"}
					onPlanetClick={e=>{
						history.push('/home/article/article-hit')
					}}/>

				<Satellite wheeling={wheeling} deg={deg}
					wheelingPause={wheelingPause}
					wheelingRun={wheelingRun}
					skew={165} />

				<Planet wheeling={wheeling} deg={deg}
					wheelingPause={wheelingPause}
					wheelingRun={wheelingRun}
					skew={225} 
					tooltip={authenticated?"注销":"登录"}
					icon={authenticated ? "fa-sign-out" : "fa-sign-in"}
					onPlanetClick={e=>{
						if (authenticated){
							onLogout()
						}else{
							onLogin()
						}
					}}/>
				
				<Satellite wheeling={wheeling} deg={deg}
					wheelingPause={wheelingPause}
					wheelingRun={wheelingRun}
					skew={285} />
			</div>
		</div>
	)
};
export default Wheel;