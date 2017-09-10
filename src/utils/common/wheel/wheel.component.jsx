import './wheel.less'
import $ from 'jquery'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

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
			<div className="path" >
				<div id="yuan"></div>
				<div className={"avatar "+(wheeling===true?"":"on-pause")} 
				style={{
					transform:`rotate(${deg+45+"deg"}) 
						translateY(-12rem) translateY(50%) 
						rotate(${(0-deg-45)+"deg"})`
				}}
				onMouseEnter={(e)=>{
					wheelingPause();
				}} 
				onMouseLeave={(e)=>{
					wheelingRun();
				}}>
					<i className="fa fa-sign-in" aria-hidden="true"></i>
				</div>
				<div className={"avatar "+(wheeling===true?"":"on-pause")} 
				style={{
					transform:`rotate(${deg+105+"deg"}) 
						translateY(-12rem) translateY(50%) 
						rotate(${(0-deg-105)+"deg"})`
				}}
				onMouseEnter={(e)=>{
					wheelingPause();
				}} 
				onMouseLeave={(e)=>{
					wheelingRun();
				}}>
					<img src={Anarchy} alt="" />
					<i className="fa fa-sign-out" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	)
};
export default Wheel;