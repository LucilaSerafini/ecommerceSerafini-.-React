import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div className="itemDetailContainer">
      <div className="itemDetail">
        <img
          src={item.img}
          className="cardDetailImg"
          alt="Imagen del producto"
        />
        <p>{item.title}</p>
        <p>{item.price}</p>

        <CounterContainer onAdd={onAdd} stock={item.stock} initial={initial} />
      </div>
    </div>
  );
};

export default ItemDetail;
