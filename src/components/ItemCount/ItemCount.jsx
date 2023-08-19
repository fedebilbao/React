import {useState} from "react";

export const ItemCount = ({stock, onAdd}) =>{
    const [count, setCount] = useState(1);

    const handleSum = () => {
        if(stock > count) setCount(count + 1)        
    }

    const handleSub = () => {
        if(count > 1) setCount(count - 1)
    }

    return (
        <div>
            <div>
                <button onClick = {()=> handleSub()}>-</button>
                <span>{count}</span>
                <button onClick={()=> handleSum()}>+</button>
            </div>
            <button disabled={!stock} onClick={()=>{onAdd(count); setCount(1);}}>Agregar a carrito</button>
        </div>
    );
};