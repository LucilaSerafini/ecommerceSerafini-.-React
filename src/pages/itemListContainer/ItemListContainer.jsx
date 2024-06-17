import "./itemListContainer.css";
import { products } from "../../products";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;

      if (x) {
        resolve(products);
      } else {
        reject("Error de carga");
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })

      .catch((error) => {
        setError(error);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
