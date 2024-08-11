import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();
  // const params = useParams();
  // console.log(params);

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(0);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
  //   );

  //   const json = await data.json();
  //   console.log(json);
  //   setresInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-5">{name}</h1>
      <p className="text-lg mt-4 font-semibold ">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>

      {categories.map((category,index) => (

        //controlled components
        <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} 
        showItems ={index===showIndex ? true : false}
        setshowIndex ={()=> setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
