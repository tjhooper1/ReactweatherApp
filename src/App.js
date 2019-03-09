import React, { Component } from 'react';
import './App.scss';
import Weather from './components/Weather'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  
  constructor(proprs){
    super()
    this.state = {}
  }
  
  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
