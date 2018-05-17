import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Receives from './Receives';
const propTypes = {}

const defaultProps = {}

class RightPane extends Component {
  render() {
    return (
      <div className="pane">
        <Receives />
      </div>
    )
  }
};

RightPane.defaultProps = defaultProps;
RightPane.propTypes = propTypes;

export default RightPane;