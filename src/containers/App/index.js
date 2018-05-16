import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';

class App extends Component {
  componentDidMount() {
    console.log('hehehe')
  }
  
  render() {
    return (
      <div className="app">
        <header className="app-header">
        <div className="logo-wrapper">
          <image src={require(`assets/images/message-media-logo-2016.png`)} />
        </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
