import { createContext, useContext, useState } from "react" ;

const CartContext = createContext ([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const itemInCart = (id) => cart.find((product)=> product.id === id);

    const addProduct = (item, qty) =>{
        const element = itemInCart(item.id);

        if(!element) return setCart([...cart, {...item,qty,},]);

            const newCart = cart.map((product) =>
                product.id === item.id ? {...product,qty: product.qty + qty} : product
            );
            setCart(newCart);
        }; 

    const removeProduct = (id) =>{
        const newCart = cart.filter((product)=> product.id !== id);
        setCart(newCart);
    }

    const cleanCart = ()=> setCart([]);

    const getCartQty = () => cart.reduce((acc, item)=> acc + item.qty ,0);

    const getTotalPrice = () => cart.reduce((acc, item) => acc+ item.price*item.qty, 0);

    return (
    <CartContext.Provider
     value={{cart, addProduct, getCartQty, removeProduct, cleanCart, getTotalPrice, itemInCart}} 
     displayName="CartContext"
     >
      {children}
    </CartContext.Provider>
    );
};