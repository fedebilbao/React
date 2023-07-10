import {TbShoppingCart} from "react-icons/tb";

export const CartWidget = () => {
    return (
        <div style={{display:"flex", alignItems: "center"}}>
                <TbShoppingCart style={{fontSize: 35}} />
                <p style={{color: "blue", fontSize: 25, fontWeight:"bold"}}>5</p>
        </div>


      );
  };