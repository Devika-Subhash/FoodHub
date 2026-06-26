import "./Collections.css";
import collections from "../data/collections";

function Collections() {
  return (
    <section className="collections">
      <div className="container">

        <div className="sectionHeading">
          <h2>Featured Collections</h2>
          <p>
            Discover restaurants curated for every mood and occasion.
          </p>
        </div>

        <div className="collectionGrid">
          {collections.map((item) => (
            <div className="collectionCard" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="collectionContent">
                <h3>{item.title}</h3>
                <span>{item.places}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Collections;