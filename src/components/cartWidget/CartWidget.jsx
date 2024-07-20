import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <Link to="/carrito">
      <Badge badgeContent={total} showZero={true} className="customBadge">
        <RiShoppingBag4Line size="1.6rem" color="#2e3038" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
