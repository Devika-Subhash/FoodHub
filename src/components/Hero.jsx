import "./Hero.css";

function Hero() {
  return (
    <section className="heroSection">
      <div className="heroContent">

        <span className="heroTag">
          Discover • Eat • Enjoy
        </span>

        <h1>
          Find Your Perfect Meal,
          <br />
          Anytime, Anywhere.
        </h1>

        <p>
          Browse restaurants, discover trending dishes, and order
          your favourite food from nearby places.
        </p>

        <div className="heroButtons">
          <button className="primaryBtn" onClick={() => document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" })}>
            Explore Restaurants
          </button>

          <button className="secondaryBtn" onClick={() => document.getElementById("collections").scrollIntoView({ behavior: "smooth" })}>
            View Collections
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;