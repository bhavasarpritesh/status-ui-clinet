import "./WeatherCard.css";

function WeatherCard({ weather }) {

    return (

        <div className="card">

            <h2>

                🌤 Weather

            </h2>

            <p>

                📍 {weather.city}

            </p>

            <p>

                🌡 {weather.temperature} °C

            </p>


            <p>🌬 {weather.windSpeed} km/h</p>


            <p>

                Weather Code : {weather.weatherCode}

            </p>

        </div>

    )

}

export default WeatherCard;