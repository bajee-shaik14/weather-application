import React from 'react'
import './index.css'

const FavCityList = (props) => {
    const {cityDetails, favCityClick} = props 
    const {cityName} = cityDetails

    const favClickOperation = () => {
        favCityClick(cityName)
    }

  return (
    <li className='list'>
      <button className='fav-city-button btn btn-primary' onClick={favClickOperation}>{cityName}</button>
    </li>
  )
}

export default FavCityList
