import './satellite.less'
import React, { Component, PropTypes } from 'react'

const Satellite = ({wheeling, deg, wheelingPause, wheelingRun, skew}) => (
	< div className={"satellite " + (wheeling === true ? "" : "on-pause")}
		style={{
			transform: `rotate(${deg + skew + "deg"}) 
						translateY(-10.4rem) translateY(50%) 
						rotate(${(0 - deg - skew) + "deg"})`
		}}
		onMouseEnter={(e) => {
			wheelingPause();
		}}
		onMouseLeave={(e) => {
			wheelingRun();
		}}>
	</div >
)
export default Satellite