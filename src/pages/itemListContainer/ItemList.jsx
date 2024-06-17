import { ProductCard } from "../../components/productCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((element) => {
        return (
          <ProductCard
            key={element.id}
            title={element.title}
            price={element.price}
            description={element.description}
            img={element.img}
          />
        );
      })}
    </div>
  );
};
