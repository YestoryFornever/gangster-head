import './wheel.less'
import $ from 'jquery'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import { history } from 'alias_utils/js/history'

import Anarchy from 'alias_materials/images/anarchy.jpg'
const Wheel = ({ match, wheeling, wheelingPause, wheelingRun, onWheel, deg }) => {
	return (
		<div className="wheel-component"
			onWheel={e=>{
				e.preventDefault();
				e.stopPropagation();
				onWheel(e.deltaY>0)
			}
		}>
			<div className="path" >
				<div className={"avatar "+(wheeling==="RUN"?"":"on-pause")} 
				style={{
					transform:'translate(95px, 95px) rotate('+deg+') translate(-95px,-95px)'
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