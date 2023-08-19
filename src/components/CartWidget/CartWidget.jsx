import {TbShoppingCart} from "react-icons/tb";
import {useCartContext} from "../../state/Cart.context";
import { useNavigate} from "react-router-dom";

export const CartWidget = () => {
    const {getCartQty} = useCartContext();
    const navigate = useNavigate();

    return (
        <div style={{display:"flex", alignItems: "center"}} onClick={() => navigate("/cart")}>
                <TbShoppingCart style={{fontSize: 35}} />
                <p style={{color: "blue", fontSize: 25, fontWeight:"bold"}}>({getCartQty()})</p>
        </div>


      );
  };