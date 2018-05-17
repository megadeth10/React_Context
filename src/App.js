import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import {SampleProvider} from './context/SampleContext';


class App extends Component {
  render() {
    return (
      <SampleProvider>
        <div className="panes">
          <LeftPane />
          <RightPane />
        </div>
      </SampleProvider>
    );
  }
}

export default App;
