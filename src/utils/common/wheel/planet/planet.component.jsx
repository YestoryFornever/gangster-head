import './planet.less'
import React, { Component, PropTypes } from 'react'
const Planet = ({wheeling, deg, wheelingPause, wheelingRun, skew, icon, onPlanetClick}) => (
    < div className={"planet " + (wheeling === true ? "" : "on-pause")}
        style={{
            transform: `rotate(${deg + skew + "deg"}) 
						translateY(-12rem) translateY(50%) 
						rotate(${(0 - deg - skew) + "deg"})`
        }}
        onMouseEnter={(e) => {
            wheelingPause();
        }}
        onMouseLeave={(e) => {
            wheelingRun();
        }}
        onClick={onPlanetClick}>
        <i className={"fa "+icon} aria-hidden="true"></i>
    </div >
)
export default Planet