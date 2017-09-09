import './wheel.less'
import $ from 'jquery'
import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import { history } from 'alias_utils/js/history'

import Anarchy from 'alias_materials/images/anarchy.jpg'
const Wheel = ({ match, wheeling, wheelingPause, wheelingRun }) => {
	return (
		<div className="wheel-component">
			<div className="path" >
				<div className={"avatar "+(wheeling==="RUN"?"":"on-pause")} 
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