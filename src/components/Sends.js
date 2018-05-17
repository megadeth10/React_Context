import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useSample } from '../context/SampleContext';
const propTypes = {}

const defaultProps = {}

class Sends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setValue(this.state.input);
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            input: value
        });
    }
    //test main branch 적용
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange} />
                <button type="submit">설정 </button>
            </form>
        )
    }
};

Sends.defaultProps = defaultProps;
Sends.propTypes = propTypes;

export default useSample(Sends);