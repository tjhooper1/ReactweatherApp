import React from 'react'
import sun from '../icons/sun.png'

export default function Weather () {
    return (
        <div className="main-container">
            <div className="heading">Weather app</div>
            <div className="weather-container">
                <div className="weather-title">Weather for Jacksonville, FL.</div>    
                <div className="weather-temperature">65 degrees farenheit</div>    
                <div className="weather-icon"><img src={sun} alt="icon" /></div>    
            </div>
        </div>
    )
}