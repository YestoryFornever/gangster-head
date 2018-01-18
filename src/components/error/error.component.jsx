import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './error.less'
import Loading from 'alias_utils/common/loading/loading.component';

const Error = ({}) => {
	return (
		<div className="f-container">
			<div className="tips">孩子，你走岔劈了。</div>
		</div>
	)
};
export default Error;