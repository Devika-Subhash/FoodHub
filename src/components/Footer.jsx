import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerContainer">

        <div className="footerTop">

          <div className="footerBrand">
            <h2>🍽 FoodHub</h2>

            <p>
              Discover the best restaurants, trending cuisines,
              and delicious meals all in one place.
            </p>
          </div>

          <div className="footerLinks">

            <div>
              <h3>Company</h3>

              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>

            </div>

            <div>
              <h3>Explore</h3>

              <a href="#">Restaurants</a>
              <a href="#">Collections</a>
              <a href="#">Offers</a>

            </div>

            <div>
              <h3>Support</h3>

              <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">FAQs</a>

            </div>

          </div>

        </div>

        <div className="footerBottom">

          <div className="socialIcons">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaGithub />
            </a>

          </div>

          <p>
            © 2026 FoodHub. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;