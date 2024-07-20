import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { products } from "../../products";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { name } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;

    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);
    //Hay que desencriptar el documento con .data para otener toda la información.
    getProducts.then((res) => {
      let validArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(validArray);
    });
  }, [name]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
