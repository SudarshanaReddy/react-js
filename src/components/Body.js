import RestaurentCard from "./RestaurentCard";
import restaurents from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    
  const [listOfRestaurents, setListOfRestaurents] = useState(restaurents);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (rest) => rest.info.avgRating > 4
            );
            setListOfRestaurents(filteredList);
          }}
        >
          Top Rate Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((rest) => (
          <RestaurentCard key={rest.info.id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
