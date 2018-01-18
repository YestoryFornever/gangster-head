import React, { Component, PropTypes } from 'react';
const Topic = ({ match }) => { 
    return (<div>
        <h3>
            {match?match.params.topicId:"not match"+Math.random()}
        </h3>
    </div>) 
};
export default Topic;