import { useState } from 'react';
import './index.css'
import axios from 'axios'
import FavCityList from '../FavCityList';
import WeatherComponent from '../WeatherComponent'

const apiKey = "54c42059c4b16f702367e1755e88529c"

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const HomeComponent = () => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [favCityList, updateFavCityList] = useState([])

  const fetchWeather = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    );
    
    updateWeather(response.data);
  }

  const addFavCity = () => {

    if(city === '') {
      alert("Enter the city")
      updateCity('')
    } 
    
    else {
      const favCity = {
        id: favCityList.length,
        cityName: city
      }
      updateFavCityList([...favCityList,favCity])
      updateCity('')
    }
  }

  const favCityClickOperation = (clickedFavCityName) => {
    updateCity(clickedFavCityName)
  }

  
  const renderHomePage = () => {

    return (
      <>
        <img className="WelcomeWeatherLogo" src={"/icons/perfect-day.svg"} alt="home logo"/>
        <span>Find Weather of your city</span>
        <form className="SearchBox" onSubmit={fetchWeather}>
          <input className="input"
            onChange={(e) => updateCity(e.target.value)}
            placeholder="City"
            value={city}
          />
          <button className="button" type={"submit"}>Search</button>
          <button className="fav-button" type='button' onClick={addFavCity}>Fav</button>
        </form>
        
        <div className='favourites-card mt-3'>
        <p className='favourite'>Favourite cities</p>
        <div className='fav-list'>
          {favCityList.length === 0 ? (null) : (favCityList.map((each) => 
        <FavCityList cityDetails={each} key={each.id} favCityClick={favCityClickOperation}/>
        ))}
        </div>
        </div>
      </>
    )
    }

    return (
      <div className='App'>
      <span className='AppLabel'>Weather App</span>
      <p></p>
      {city && weather ? (<WeatherComponent weather={weather} city={city}/>) : (renderHomePage())}
    </div>
    )
    
  };
  export default HomeComponent;