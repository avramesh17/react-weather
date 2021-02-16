import React from 'react'
import { Table } from 'reactstrap';
import moment from 'moment'

const WeatherTable = ({cities, newCities}) => {

const tableData = () => {
    if(newCities.length < 1){
 return cities.map(city => (
        <tr key={city.dt}>
           <td>{city.name}</td>
            <td>{city.main.temp}</td>
            <td>{city.main.temp_min}</td>
            <td>{moment().format('h:mm:ss a')}</td>
          </tr> 
    ))} else{
        return newCities.map(city => (
            <tr key={city.dt}>
               <td>{city.name}</td>
                <td>{city.main.temp}</td>
                <td>{city.main.temp_min}</td>
                <td>{moment().format('h:mm:ss a')}</td>
              </tr> 
        ))
    }
}
    return (
        <Table>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Temperature</th>
            <th>Minimum Temperature</th>
            <th>Local Time</th>
          </tr>
        </thead>
        <tbody>
    
            {tableData()}
         
        </tbody>
      </Table>
    )
}

export default WeatherTable
