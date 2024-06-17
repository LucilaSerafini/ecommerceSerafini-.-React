export const ProductCard = ({ title, description, price, img }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h4>{price}</h4>
      <div> {img}</div>
    </div>
  );
};
