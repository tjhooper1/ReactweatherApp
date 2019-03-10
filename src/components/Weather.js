import React from 'react'

export default function Weather (props) {
    return (
        <div className="main-container">
            <div className="heading">Weather app</div>
            <div className="weather-container">
                <div className="weather-title">Weather for {props.city}</div>    
                <div className="weather-temperature">{props.temp} degrees Fahrenheit</div>    
                <div className="weather-icon"><img src={props.icon} alt="icon" /></div>
                <form className="form" onSubmit={props.handleClick}>
                    <input onChange={props.handleChange} placeholder="Change city" />
                    <button className="btn">Submit</button>    
                </form>
            </div>
        </div>
    )
}