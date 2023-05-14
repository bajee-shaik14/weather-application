import React from "react"; 
import { WeatherIcons } from "../HomeComponent";
import './index.css'

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};


const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <div className="InfoContainer">
            <img src={WeatherInfoIcons[name]} alt="weather info icon"/>
            <span className="InfoLabel">
                {value}
                <span className="name">{name}</span>
            </span>
        </div>
    );
};

const WeatherComponent = (props) => {
    const {weather} = props

    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    return (
        <>
            <div className="WeatherContainer">
                <span className="Condition">
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </span>
                <img className="WeatherIcon" src={WeatherIcons[weather?.weather[0].icon]} alt="weather icon"/>
            </div>
            <span className="location">{`${weather?.name}, ${weather?.sys?.country}`}</span>

            <span className="WeatherInfoLabel">Weather Info</span>
            <div className="WeatherInfoContainer">
                {/* <WeatherInfoComponent name={"sunrise" || "sunset"}
                                      value={`${Math.floor(weather?.main?.temp_max - 273)} - ${Math.floor(weather?.main?.temp_min - 273)}`}/> */}
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </div>
        </>
    );
};

export default WeatherComponent;



