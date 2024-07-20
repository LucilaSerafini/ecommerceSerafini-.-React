import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <>
        <div className="NavbarContainer">
          <div>
            <Link to="/">
              <img
                className="mainIcon"
                src="https://res.cloudinary.com/dmsa4jynu/image/upload/v1721427445/MainIcon-Photoroom_ou8rj5.png"
                alt="MainIcon"
              />
            </Link>
          </div>
          <ul className="categoriesList">
            <Link to="/category/Interior">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#F3D0C3",
                  color: "#2e3038",
                  fontWeight: "bold",
                }}
              >
                {" "}
                INTERIOR{" "}
              </Button>
            </Link>
            <Link to="/category/Exterior">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#F3D0C3",
                  color: "#2e3038",
                  fontWeight: "bold",
                }}
              >
                {" "}
                EXTERIOR{" "}
              </Button>
            </Link>
          </ul>

          <CartWidget />
        </div>
      </>
    </div>
  );
};

export default Navbar;
