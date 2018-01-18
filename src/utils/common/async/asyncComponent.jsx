import React from 'react';

export default (loader, collection) => (
    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props);

            this.Component = null;
            this.state = { Component: AsyncComponent.Component };
        }
        componentWillMount() {
            if (!this.state.Component) {
                loader().then((Component) => {
                    AsyncComponent.Component = Component;

                    this.setState({ Component });
                });
            }
        }
        render() {
            if (this.state.Component) {
                if (404 === this.state.Component) { 
                    return (<div>404</div>)
                }
                return (
                    <this.state.Component { ...this.props } { ...collection } />
                )
            }
            return (<div>loa了个ding</div>)||null;
        }
    }
);