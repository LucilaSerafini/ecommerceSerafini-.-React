import "./itemListContainer.css";
import { products } from "../../products";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = products.filter(
        (product) => product.category === name
      );

      if (x) {
        resolve(name ? arrayFiltered : products);
      } else {
        reject({ message: "error" });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })

      .catch((error) => {
        setError(error);
      });
  }, [name]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
