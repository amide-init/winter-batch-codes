import moment from 'moment';
const Content = ({weatherData}) => {
    return (
        <>
            {weatherData && <div className='card-body'>
                <table class="table table-striped">
                    <tr>
                        <th>Country</th>
                        <td>{weatherData.sys.country}</td>
                    </tr>
                    <tr>
                        <th>Temprature</th>
                        <td>{(weatherData.main.temp - 273).toFixed(2)}C</td>
                    </tr>
                    <tr>
                        <th>Sunrise</th>
                        <td>{moment(weatherData.sys.sunrise).format('LTS')}</td>
                    </tr>
                    <tr>
                        <th>Sunset</th>
                        <td>{moment(weatherData.sys.sunset).format('LTS')}</td>
                    </tr>
                    <tr>
                        <th>Pressure</th>
                        <td>{weatherData.main.pressure}Hb</td>
                    </tr>
                </table>
                <hr></hr>
                <div className='row'>
                    <div className='col-6 text-end'>
                        <h5 className='badge bg-primary p-2 mt-2'>{weatherData.weather[0].description}</h5>
                    </div>
                    <div className='col-6'>
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} />
                    </div>
                </div>
            </div>}
        </>
    )
};

export default Content;