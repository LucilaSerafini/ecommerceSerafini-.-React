import { Button } from "@mui/material";

import "./counter.css";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div className="containerCounter">
      <div className="counterContainer">
        <Button
          onClick={sumar}
          style={{
            fontSize: "24px",
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
            color: "#2e3038   ",
          }}
        >
          -
        </Button>
      </div>

      <Button
        onClick={() => onAdd(contador)}
        variant="contained"
        style={{
          backgroundColor: "#a1a8be",
          color: "#2e3038",
          fontWeight: "bold",
          fontSize: "15px",
          borderRadius: "2rem",
        }}
      >
        {" "}
        Agregar al carrito{" "}
      </Button>
    </div>
  );
};
