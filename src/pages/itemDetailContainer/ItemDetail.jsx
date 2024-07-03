import CounterContainer from "../../components/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <img src={item.img} alt="Imagen del producto" />
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <h4>{item.price}</h4>

        <CounterContainer />
      </div>
    </>
  );
};

export default ItemDetail;
