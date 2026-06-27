import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import Collections from "./components/Collections";
import Footer from "./components/Footer";

function App() {
const [searchText, setSearchText] = useState("");
console.log(searchText);

  return (
    <>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Hero />

      <Categories />

      <FeaturedRestaurants
        searchText={searchText}
      />

      <Collections />

      <Footer />
    </>
  );
}
export default App;