import React, { Component } from 'react';
import './App.scss';
import Weather from './components/Weather'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
let city = 'jacksonville';
let URL = `https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`;

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      city: city,
      temperature: '',
      icon: ''
    }
    
  }
  
  componentDidMount(){
    fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        city: data.location.name,
        temperature: data.current.temp_f,
        icon: data.current.condition.icon
      })
    });
  }
   
  handleClick = (e) => {
    e.preventDefault();
    city = this.state.city
    fetch(`https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {      
      this.setState({
        city: data.location.name,
        temperature: data.current.temp_f,
        icon: data.current.condition.icon
      })
    })
    .catch((err) => {
      if (err) {
        alert("could not find that city");
        this.setState({
          city: ''
        })
      }
    })
    e.target.reset();
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Weather 
        handleChange={this.handleChange} 
        handleClick={this.handleClick} 
        city={this.state.city} 
        temp={this.state.temperature}
        icon={this.state.icon}
        />
        
      </div>
    );
  }
}

export default App;
