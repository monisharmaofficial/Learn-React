import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfResttaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([])
  const [searchText, setsearchText] = useState("");

  //   var listOfRestaurants = [
  //     {
  //         info: {
  //             id: "737964",
  //             name: "Wow! Momo",
  //             cuisines: "yummy food",
  //             cloudinaryImageId: "5a148e63e9c54942e37627da1aa156be",
  //             avgRating: 4.3,
  //             costForTwo: "₹300 for two",
  //           },
  //     },
  //     {
  //         info: {
  //             id: "712380",
  //             name: "Chicago Pizza",
  //             cuisines:"testy food",
  //             cloudinaryImageId: "80f040545552605e33eba09f8fa30be9",
  //             avgRating: 4.5,
  //             costForTwo: "₹500 for two",
  //           },
  //     },
  //     {
  //         info: {
  //             id: "712385",
  //             name: "pudi sbji",
  //             cuisines:"bdhia food",
  //             cloudinaryImageId: "80f040545552605e33eba09f8fa30be9",
  //             avgRating: 4.4,
  //             costForTwo: "₹40 for two",
  //           },
  //     },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfResttaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  console.log("Body rendered");
  return (
    <div className="body">
      \
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn-search"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

            setfilteredRestaurant(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="fitler-btn"
          onClick={() => {
            //filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfResttaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
