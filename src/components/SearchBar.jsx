import "./SearchBar.css";

function SearchBar({
city,
onCityChange,
onSearch
}){

return(

<div className="search-container">

<input
value={city}
onChange={onCityChange}
placeholder="Enter city"
/>

<button
onClick={onSearch}
>

Search

</button>

</div>

)

}
export default SearchBar;