function SearchBar({
  city,
  onCityChange,
  onSearch,
  loading,
}) {

    function handleKeyDown(event) {

        if (event.key === "Enter") {
            onSearch();
        }

    }

    return (

        <div className="search-container">

            <input
                value={city}
                onChange={onCityChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter city"
            />

            <button
            onClick={onSearch}
            disabled={loading}
            >
            {loading ? "Searching..." : "Search"}
            </button>

        </div>

    );

}

export default SearchBar;