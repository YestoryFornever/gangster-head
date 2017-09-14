import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './error.less'

const Error = ({}) => {
	return (
		<div className="f-container">
			<div id="f1" className="fff">f1</div>
			<div id="f2" className="fff">f2</div>
			<div id="f3" className="fff">f3</div>
			<div id="f4" className="fff">f4</div>
			<div id="f5" className="fff">f5</div>
			<h1 className="test-text">测试用文本，words for test</h1>
		</div>
	)
};
export default Error;