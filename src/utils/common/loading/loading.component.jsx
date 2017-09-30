import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './loading.less'

// import Animation from 'alias_utils/demo/animation'

const Loading = ({}) => {
	return (
		<div className="f-container">
			<div className="loading"></div>
		</div>
	)
};
export default Loading;