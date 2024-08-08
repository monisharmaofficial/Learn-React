import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info;
    return(
        <div className="res-card">
            <img className="res-logo"src={CDN_URL +cloudinaryImageId} />
            <div className="restname">
            <h2>{name}</h2>
            <p>{cuisines.join(" , ")}</p>
            </div>
            <div className="restabout">
            <h5>{avgRating}<i className="ri-star-s-fill"></i></h5>
            <h5>{costForTwo}</h5>
            </div>
        </div>
    )
}

export default RestaurantCard;
// .join(", ")
