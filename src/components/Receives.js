import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useSample } from '../context/SampleContext';

const propTypes = {}

const defaultProps = {}

class Receives extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                현재 설정된 값 : {this.props.value}
            </div>
        )
    }
};

Receives.defaultProps = defaultProps;
Receives.propTypes = propTypes;

export default useSample(Receives);