import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

const [listOfRestaurants,setListOfResttaurants] = useState(resList)

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

  return (
    <div className="body">
      <div className="search">Search Here</div>
      <div className="filter">
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
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
