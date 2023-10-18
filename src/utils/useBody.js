import { useEffect, useState } from "react";

const useBody = () => {

  useEffect(() => {
    console.log(fetchData());
    const response =  fetchData();

    response.then(data => { 
      return data;
    })
  }, []);
  
};

const fetchData = async () => {
  console.log('inside fetchdata');
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const response = await data.json();
  return response;
};

export default useBody;
