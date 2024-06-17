import "./navbar.css";
import { GiPlantRoots } from "react-icons/gi";
import { PiShoppingCart } from "react-icons/pi";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <div className="icon">
        <IconContext.Provider value={{ color: "black", size: "60px" }}>
          <GiPlantRoots />
        </IconContext.Provider>{" "}
      </div>
      <ul className="categoriesList">
        <li>Interior</li>
        <li>Exterior</li>
      </ul>
      <span className="cartNumber">0</span>
      <div className="cartIcon">
        <IconContext.Provider value={{ color: "black", size: "30px" }}>
          <PiShoppingCart />
        </IconContext.Provider>{" "}
      </div>
    </div>
  );
};

export default Navbar;
