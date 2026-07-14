import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_DASHBOARD } from "./graphql/queries";

function App() {
  const [city, setCity] = useState("");

  const [getDashboard, { loading, error, data }] =
    useLazyQuery(GET_DASHBOARD);

  const handleSearch = () => {
    if (!city.trim()) return;

    getDashboard({
      variables: {
        city,
        limit: 5,
      },
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      <button onClick={handleSearch}>
        Search
      </button>

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error.message}</h2>}

      {data && (
        <>
          <h2>Weather</h2>

          <p>{data.weather.city}</p>

          <p>{data.weather.temperature}°C</p>

          <hr />

          <h2>Latest News</h2>

          {data.latestNews.map((news, index) => (
            <div key={index}>
              <h3>{news.title}</h3>

              <p>{news.by}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;