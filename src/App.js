import { useState } from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = '703b15535a185358863d02177a02f25b';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${apiKey}`;
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(location);
      })
      setLocation('')
    }
  }
  
  return (
    <div className="App">   
      <div className="search">
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location..."
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}/{data.sys.country}</p>
          </div>
          <div className="temp">            
            {
              data.main ? 
                <span>
                  <h1>
                    {data.main.temp.toFixed()}ºF/
                    {((data.main.temp-32)/1.8).toFixed()}ºC
                  </h1>
                </span>
                :
                null
            }
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}    
          </div>
        </div>

        {data.name !== undefined && 
          <div className="bottom">
          <div className="feels">
            {
              data.main ? 
                <span>
                  <p className="bold">
                    {data.main.feels_like.toFixed()}ºF/ 
                    {((data.main.feels_like-32)/1.8).toFixed()}ºC
                  </p>
                </span>
                :
                null
            }
            <p>Feels Like</p>
          </div>          
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}            
            <p>Hummidity</p>
          </div> 
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div> 
        </div>
        }

      </div>

    </div>
  );
}

export default App;
