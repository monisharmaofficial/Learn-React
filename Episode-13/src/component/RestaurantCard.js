import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) =>{
    const {resData} = props;
    // console.log(resData)
    const{cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info;
    return(
        <div className="res-card m-3 w-[270] hover:border border-slate-400 rounded-lg bg-slate-100 hover:bg-slate-200" >
            <img className="res-logo object-cover object-center h-[250] w-full px-2 py-2 rounded-xl"src={CDN_URL +cloudinaryImageId} />
            <div className="restname gap-y-2 px-2 py-3">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p>{cuisines.join(" , ")}</p>
            </div>
            <div className="restabout flex justify-between text-lg px-3 py-3">
            <h5>{avgRating}<i className="ri-star-s-fill"></i></h5>
            <h5>{costForTwo}</h5>
            </div>
        </div>
    )
}

//higher order function

//input => RestaurantCard ==> RestaurantCardVeg

export const withVegLabel = (RestaurantCard) =>{
    return(props) =>{
        return(
            <div>
                <label className="absolute bg-slate-800 text-white rounded-md px-2 py-0 font-semibold">Veg</label>
                <RestaurantCard {...props}/>        
            </div>
        );
    };
};


export default RestaurantCard;
// .join(", ")
