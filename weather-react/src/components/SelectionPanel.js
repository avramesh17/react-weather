import React, {useEffect, useState} from 'react'
import WeatherTable from './WeatherTable'

const api_key = "1a65e11ed22d370658a2d15da7eca7de"

const SelectionPanel = () => {

  const [cities, setCities] = useState([])
  const [newCities, setNewCities] = useState([])
  const cors = "https://cors-anywhere.herokuapp.com/" 
    const handleChange = e => {
  
        const val = e.target.value
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${val}&appid=${api_key}`)
        .then(res => res.json())
        .then(res => setCities((cities) => [...cities, res]))
    }

    console.log(cities, "<===cities")


const reload = () => {
     cities.map(city => { 
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${api_key}`)
        .then(res => res.json())
        .then(res => {
            setNewCities((newCities) => [...newCities, res])
           
        })
   
     })
}


    return (
        <div>
          <select onChange={handleChange}>
              <option>please select a city</option>
              <option  value="4903184">Mundelein</option>
              <option value="4903279">Naperville</option>
              <option value="1796228">Linjiang</option>
              <option value="1006984"> East London</option>
              <option value="1796247"> Shanggu</option>
          </select>

          <WeatherTable cities={cities} newCities={newCities}/>

          <button onClick={reload} >Reload</button>
        </div>
    )
}

export default SelectionPanel

