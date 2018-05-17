import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sends from './Sends';
const propTypes = {}

const defaultProps = {}

class LeftPane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="pane">
        <Sends />
      </div>
    )
  }
};

LeftPane.defaultProps = defaultProps;
LeftPane.propTypes = propTypes;

export default LeftPane;