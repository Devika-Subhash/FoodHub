import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

function Navbar({ searchText, setSearchText }) {
  const navItems = ["Home", "Explore", "Login"];

  return (
    <header className="navbar">
      <div className="navContainer">

        <div className="logo">
          <h2>FoodHub</h2>
        </div>

        <div className="searchBox">
          <FaSearch className="searchIcon" />

          <input
            type="text"
            placeholder="Search restaurants or dishes"
             value={searchText}

  onChange={(event) => {
  const value = event.target.value;
  setSearchText(value);
  if (value.trim().length > 0) {
    document.getElementById("restaurants").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}}
/>
        </div>

        <nav className="navMenu">
          {navItems.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}

          <button className="signupBtn">
            Sign Up
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;