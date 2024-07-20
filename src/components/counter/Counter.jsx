import { Button } from "@mui/material";

import "./counter.css";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div className="counterContainer">
      <Button
        onClick={sumar}
        style={{
          fontSize: "24px",
          minWidth: "40px",
          minHeight: "40px",
          color: "#2e3038   ",
        }}
      >
        +
      </Button>
      <p> {contador} </p>
      <Button
        onClick={restar}
        style={{
          fontSize: "34px",
          minWidth: "40px",
          minHeight: "40px",
          color: "#2e3038   ",
        }}
      >
        -
      </Button>
      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};
