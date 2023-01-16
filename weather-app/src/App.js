import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Content from './Content';

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "b326d0250896b8840d30cb1bdd5fcf80";

function App() {

  const [cityName, setCityName] = useState("Kolkata");
  const [currentCityName, setCurrentCityName] = useState("kolkata");
  const [weatherData, setWeatherData] = useState();

   

  const fetchData = () => {
    const fetchUrl = `${baseUrl}${currentCityName}&appid=${API_KEY}`
    axios.get(fetchUrl)
      .then((response) => {
        if (response.status === 200) {
          setWeatherData(response.data)
        }
      }).catch((err) => {
        console.log("error", err)
      })
    setCityName(currentCityName)

  }

  useEffect(()=> {
    fetchData();
  }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-8'>
            <div className='card shadow-sm'>
              <div className='card-header bg-info'>
                <h5 className='text-white'>{cityName}</h5>
              </div>
              <Content weatherData={weatherData} />
              <div className='card-footer'>
                <div className='row'>
                  <div className='col-8'>
                    <input value={currentCityName} onChange={(event) =>
                      setCurrentCityName(event.target.value)
                    } className='form-control' />
                  </div>
                  <div className='col-4'>
                    <button className='btn btn-primary w-100 btn-block' onClick={fetchData} >Fetch</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
