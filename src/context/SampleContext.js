import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();
const { Provider, Consumer: SampleConsumer } = Context;

const propTypes = {}

const defaultProps = {}

class SampleProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '기본값'
        }
        this.action = {
            setValue: (value) => {
                this.setState({ value });
            }
        }
    }
    render() {
        const { state, action } = this;
        const value = { state, action }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
};

SampleProvider.defaultProps = defaultProps;
SampleProvider.propTypes = propTypes;

function useSample(WrappedComponent) {
    return function UseSample(props) {
      return (
        <SampleConsumer>
          {
            ({ state, action }) => (
              <WrappedComponent
                value={state.value}
                setValue={action.setValue}
              />
            )
          }
        </SampleConsumer>
      )
    }
  }

export { SampleConsumer, SampleProvider, useSample };