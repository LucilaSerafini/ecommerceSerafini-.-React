import { ProductCard } from "../../components/productCard/ProductCard";

import "./itemListContainer.css";

export const ItemList = ({ items }) => {
  return (
    <div className="cards">
      {items.map((element) => {
        return (
          <ProductCard
            key={element.id}
            title={element.title}
            price={element.price}
            description={element.description}
            img={element.img}
            id={element.id}
          />
        );
      })}
    </div>
  );
};
