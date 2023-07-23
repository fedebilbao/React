import { Item } from "../Item/Item";
import "./ItemListContainer.css";

/* 
export const ItemListContainer = ({greeting, imagen}) => {
    return (
      <div className="container">
        <img src={imagen} alt="producto" style={{width: 1000 }}/>
        <h2>{greeting}</h2>
      </div>
      );
  }; 
  */

export const ItemListContainer = ({ products }) => (
  <div className="item-list">
    {products.map((product) => (
      <Item
        key={product.id}
        id={product.id}
        img={product.img}
        category={product.category}
        title={product.title}
        price={product.price}
      />
    ))}
  </div>
);