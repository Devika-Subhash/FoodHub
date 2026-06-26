import "./Categories.css";
import categories from "../data/categories";

function Categories() {
  return (
    <section className="categories">
      <div className="wrapper">

        <div className="sectionTitle">
          <h2>Popular Categories</h2>
          <p>
            Discover your favorite cuisines from a wide variety of options.
          </p>
        </div>

        <div className="categoryGrid">
          {categories.map((item) => (
            <div className="categoryCard" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;