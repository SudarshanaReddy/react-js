import RestaurentCard from "./RestaurentCard";
import { Link } from "react-router-dom";
import restaurents from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurants, setFilteredRestaurats] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const respose = await data.json();

    //optional chaining
    setListOfRestaurents(
      respose?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurats(
      respose?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //conditional rendering
  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="search"
          onClick={() => {
            const searchList = listOfRestaurents.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestaurats(searchList);
          }}
        >
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />{" "}
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (rest) => rest.info.avgRating > 4
            );
            setListOfRestaurents(filteredList);
          }}>
          Top Rate Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((rest) => (
         <Link to="/restaurant/123"><RestaurentCard key={rest.info.id} restData={rest} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
