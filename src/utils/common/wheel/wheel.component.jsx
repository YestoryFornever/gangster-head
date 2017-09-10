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
				if(e.deltaY<0){
					wheelingPause();
				}else{
					wheelingRun();
				}
				setWheelDeg(e.deltaY>0);
			}
		}>
			<div className="path" >
				<div id="yuan"></div>
				<div className={"avatar "+(wheeling===true?"":"on-pause")} 
				style={{
					transform:`rotate(${deg}) 
						translateY(-12rem) translateY(50%) 
						rotate(-${deg})`
				}}
				onMouseEnter={(e)=>{
					wheelingPause();
				}} 
				onMouseLeave={(e)=>{
					wheelingRun();
				}}>
					<img src={Anarchy} alt="" />
				</div>
			</div>
		</div>
	)
};
export default Wheel;