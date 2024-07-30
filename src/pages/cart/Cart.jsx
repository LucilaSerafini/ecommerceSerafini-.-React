import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
import "./cartStyle.css";
import { TfiTrash } from "react-icons/tfi";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div className="cartDetailContainer">
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="cartContainer">
            <img
              className="cartImg"
              src={elemento.img}
              alt="imagen del producto"
            />
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <h2>{elemento.price}</h2>
            <TfiTrash
              onClick={() => deleteProduct(elemento.id)}
              size={"1.75rem"}
            ></TfiTrash>
          </div>
        );
      })}
      <h2>El total a pagar es {total}</h2>
      <div>
        <Button
          onClick={clearCart}
          variant="outlined"
          style={{
            color: "#2e3038",
            fontWeight: "bold",
            borderColor: "#a1a8be",
            margin: "50px",
          }}
        >
          Limpiar carrito
        </Button>
        <Link to="/checkout">
          <Button
            variant="contained"
            style={{
              color: "#2e3038",
              fontWeight: "bold",
              backgroundColor: "#a1a8be",
              margin: "50px",
            }}
          >
            Finalizar compra{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
