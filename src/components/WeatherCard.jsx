function WeatherCard({ weather }) {

    return (

        <div>

            <h2>Weather</h2>

            <p>City : {weather.city}</p>

            <p>Temperature : {weather.temperature}°C</p>

            <p>Wind : {weather.windSpeed}</p>

            <p>Weather Code : {weather.weatherCode}</p>

        </div>

    );

}

export default WeatherCard;