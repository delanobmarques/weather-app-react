import axios from "axios";

function App() {
  const apiKey = '703b15535a185358863d02177a02f25b';
  const cityName = 'Halifax';
  const url = `https://api.openweathermap.org/data/2.5/weather?q={${cityName}}&appid{${apiKey}}`;
  
  return (
    <div className="App">   
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{cityName }</p>
          </div>
          <div className="temp">
            <h1>60ºF</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65ºF</p>
            <p>Feels Like</p>
          </div>          
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Hummidity</p>
          </div> 
          <div className="wind">
            <p className="bold">35 MPH</p>
            <p>Wind Speed</p>
          </div> 
        </div>
      </div>

    </div>
  );
}

export default App;
