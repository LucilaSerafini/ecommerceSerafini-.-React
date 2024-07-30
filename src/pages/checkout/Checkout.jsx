import { Button } from "@mui/material";
import { useContext, useState } from "react";
import "./checkoutStyle.css";
import { CartContext } from "../../components/context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const envioDeFormulario = (event) => {
    event.preventDefault();

    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let productCollection = collection(db, "products");
    let ordersCollection = collection(db, "orders");
    cart.forEach((elemento) => {
      let refDoc = doc(productCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });

    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        toast.success(
          `¡Gracias por tu compra! El n° de orden de compra es: ${res.id}`
        );
      })
      .catch()
      .finally(() => {
        clearCart();

        navigate("/");
      });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="checkoutContainer">
      <h1>Completá tus datos</h1>
      {orderId ? (
        <h2>
          ¡Gracias por tu compra! El número de orden de compra es: {orderId}
        </h2>
      ) : (
        <form onSubmit={envioDeFormulario} className="checkoutForm">
          <input
            type="text"
            placeholder="Ingresá tu nombre"
            onChange={handleChange}
            name="nombre"
            className="inputField"
          />
          <input
            type="text"
            placeholder="Ingresá tu mail"
            onChange={handleChange}
            name="email"
            className="inputField"
          />
          <input
            type="text"
            placeholder="Ingresá tu teléfono"
            onChange={handleChange}
            name="telefono"
            className="inputField"
          />
          <div className="buttonGroup">
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#F3D0C3",
                color: "#2e3038",
                fontWeight: "bold",
              }}
            >
              {" "}
              CANCELAR{" "}
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#F3D0C3",
                color: "#2e3038",
                fontWeight: "bold",
              }}
            >
              {" "}
              ENVIAR{" "}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
