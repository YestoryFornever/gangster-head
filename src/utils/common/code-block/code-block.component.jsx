var React = require('react');
var PropTypes = require('prop-types');
var hljs = window.hljs;
var h = React.createElement;

class CodeBlock extends React.Component {
    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        hljs.highlightBlock(this.refs.code);
    }

    render() {
        return (
            <pre>
                <code ref="code" className={this.props.language}>{
                    this.props.literal
                }</code>
            </pre>
        );
    }
}

CodeBlock.propTypes = {
    literal: PropTypes.string,
    language: PropTypes.string
};

module.exports = CodeBlock;
/**
 * demo
 * <CodeBlock literal="function aaa(){}" language="javascript" />
 */