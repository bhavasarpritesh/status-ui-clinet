import { useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_DASHBOARD } from "./graphql/queries";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import NewsList from "./components/NewsList";

function App() {
    const handleCityChange = (event) => {
      setCity(event.target.value);
    };
    const [city, setCity] = useState("");

    const [
        getDashboard,
        {
            loading,
            error,
            data,
        }
    ] = useLazyQuery(GET_DASHBOARD);

    function handleSearch() {

        if (!city.trim()) return;

        getDashboard({

            variables: {

                city,

                limit: 5,

            },

        });

    }

    return (

        <div>

            <h1>Dashboard</h1>

            <SearchBar
            city={city}
            onCityChange={handleCityChange}
            onSearch={handleSearch}
            />

            {loading && <h2>Loading...</h2>}

            {error && <h2>{error.message}</h2>}

            {data && (
                <>
                    <WeatherCard weather={data.weather} />

                    <NewsList news={data.latestNews} />
                </>
            )}

        </div>

    );

}

export default App;