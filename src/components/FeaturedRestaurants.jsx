import "./FeaturedRestaurants.css";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../data/restaurants";

function FeaturedRestaurants() {
  return (
    <section className="featuredRestaurants">

      <div className="container">

        <div className="sectionHeading">

          <h2>Featured Restaurants</h2>

          <p>
            Handpicked restaurants loved by thousands of food lovers.
          </p>

        </div>

        <div className="restaurantGrid">

          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedRestaurants;