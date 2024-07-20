import { Button } from "@mui/material";
import { useState } from "react";
import "./checkoutStyle.css"; // Asegúrate de importar el archivo CSS

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log("Se envió el formulario");
    console.log(user);
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="checkoutContainer">
      <h1>Completá tus datos</h1>
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
    </div>
  );
};

export default Checkout;
