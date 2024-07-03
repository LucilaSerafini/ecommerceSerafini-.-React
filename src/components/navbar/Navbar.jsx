import "./navbar.css";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <>
        <div className="NavbarContainer">
          <div>
            <Link to="/">
              <img
                className="mainIcon"
                src="https://res.cloudinary.com/dmsa4jynu/image/upload/v1719962337/MainIcon_v4zojt.png"
                alt="MainIcon"
              />
            </Link>
          </div>
          <ul className="categoriesList">
            <Link to="/category/Interior">Interior</Link>
            <Link to="/category/Exterior">Exterior</Link>
          </ul>

          <CartWidget />
        </div>
      </>
    </div>
  );
};

export default Navbar;
