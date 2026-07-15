import { useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { GET_DASHBOARD } from "./graphql/queries";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import NewsList from "./components/NewsList";
import "./App.css";

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

<div className="app">

<h1 className="title">

Weather Dashboard

</h1>

<SearchBar
  city={city}
  onCityChange={handleCityChange}
  onSearch={handleSearch}
/>
{loading && <h2>Loading...</h2>}

{error && <h2>{error.message}</h2>}

{
data &&

<div className="dashboard">

<WeatherCard
weather={data.weather}
/>

<NewsList
news={data.latestNews}
/>

</div>

}

</div>

);

}

export default App;