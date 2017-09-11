import './wheel.less'
import $ from 'jquery'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import Planet from './planet/planet.component'

import { history } from 'alias_utils/js/history'

import Anarchy from 'alias_materials/images/anarchy.jpg'
const Wheel = ({ match, wheeling, deg, wheelingPause, wheelingRun, setWheelDeg }) => {
	return (
		<div className="wheel-component"
			onWheel={e=>{
				e.preventDefault();
				e.stopPropagation();
				setWheelDeg(e.deltaY>0);
				document.getElementById('audio_diu').play();
			}
		}>
			<div className="star-system" >
				<div className="path"></div>
				<div className="fixed-star"></div>

				{/* <div className={"planet " + (wheeling === true ? "" : "on-pause")}
					style={{
						transform: `rotate(${deg - 15 + "deg"}) 
						translateY(-12rem) translateY(50%) 
						rotate(${(0 - deg + 15) + "deg"})`
					}}
					onMouseEnter={(e) => {
						wheelingPause();
					}}
					onMouseLeave={(e) => {
						wheelingRun();
					}}>
					<i className="fa fa-sign-out" aria-hidden="true"></i>
				</div>

				<div className={"planet " + (wheeling === true ? "" : "on-pause")}
					style={{
						transform: `rotate(${deg + 45 + "deg"}) 
						translateY(-12rem) translateY(50%) 
						rotate(${(0 - deg - 45) + "deg"})`
					}}
					onMouseEnter={(e) => {
						wheelingPause();
					}}
					onMouseLeave={(e) => {
						wheelingRun();
					}}>
					<i className="fa fa-sign-in" aria-hidden="true"></i>
				</div> */}
				<Planet wheeling={wheeling} deg={deg}
					wheelingPause={wheelingPause}
					wheelingRun={wheelingRun}
					skew={-15} 
					icon={"fa-sign-out"}/>

				<Planet wheeling={wheeling} deg={deg}
					wheelingPause={wheelingPause}
					wheelingRun={wheelingRun}
					skew={45} 
					icon={"fa-sign-in"}/>

				<Planet wheeling={wheeling} deg={deg} 
					wheelingPause={wheelingPause} 
					wheelingRun={wheelingRun} 
					skew={105}
					icon={"fa-sign-in"}/>
			</div>
		</div>
	)
};
export default Wheel;