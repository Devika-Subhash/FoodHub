import "./FeaturedRestaurants.css";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../data/restaurants";

function FeaturedRestaurants({ searchText }) {
 const filteredRestaurants = restaurants.filter((restaurant) => {
    const keyword = searchText.toLowerCase();
    return (
        restaurant.name.toLowerCase().includes(keyword) ||
        restaurant.cuisine.toLowerCase().includes(keyword)
    );
});


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

    {filteredRestaurants.length ? (

        filteredRestaurants.map((restaurant) => (

            <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
            />

        ))

    ) : (

        <div className="emptyState">

            <h3>No restaurants found</h3>

            <p>Try searching with a different keyword.</p>

        </div>

    )}

</div>

      </div>

    </section>
  );
}

export default FeaturedRestaurants;