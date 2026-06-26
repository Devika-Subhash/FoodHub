import "./RestaurantCard.css";
import { FaHeart, FaStar } from "react-icons/fa";

function RestaurantCard({ restaurant }) {
  return (
    <article className="restaurantCard">

      <div className="cardImage">

        <img
          src={restaurant.image}
          alt={restaurant.name}
        />

        <button className="favoriteBtn">
          <FaHeart />
        </button>

        <span className="ratingBadge">
          <FaStar />
          {restaurant.rating}
        </span>

      </div>

      <div className="cardDetails">

        <h3>{restaurant.name}</h3>

        <p className="cuisine">
          {restaurant.cuisine}
        </p>

        <div className="cardInfo">

          <span>{restaurant.deliveryTime}</span>

          <span>{restaurant.price}</span>

        </div>

      </div>

    </article>
  );
}

export default RestaurantCard;