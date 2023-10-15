import { CDN_URL } from "../utils/constants"

const RestaurentCard = (props) => {

    const { restData } = props; 

    const { name, cuisines, avgRating, costForTwo } = restData?.info;

    return (
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src={CDN_URL}>
            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{restData.info.sla.deliveryTime} mins</h4>    
        </div>
    )
}

export default RestaurentCard;