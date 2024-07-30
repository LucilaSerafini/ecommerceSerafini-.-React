import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DotLoader } from "react-spinners";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
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

  if (items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 100px)", // Ajusta según la altura de tu navbar y footer
          marginTop: "50px", // Altura del navbar
          marginBottom: "50px", // Altura del footer
        }}
      >
        <DotLoader color="#a1a8be" size={30} margin={5} />
      </div>
    );
  }

  // const addProducts = () => {
  //   let productsCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(productsCollection, elemento);
  //   });
  // };

  return (
    <div>
      {/* <Button onClick={addProducts}>Agregar products</Button> */}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
