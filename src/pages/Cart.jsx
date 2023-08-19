import {useEffect, useState} from "react";
import {useCartContext} from "../state/Cart.context";
import {addOrder} from "../lib/orders.requests";
import {Swal} from "sweetalert2";
import "./Cart.css"

export const Cart = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [mail2, setMail2] = useState("");

    const {cart, cleanCart, getTotalPrice, removeProduct} = useCartContext();
    useEffect(()=>{
        console.log({cart})
    },[cart])

    const createOrder = async () => {
        const items = cart.map (({id, title, qty, price})=> ({id, title, qty, price}));
        const order = {
            buyer: {name, phone, mail},
            items,
            total: getTotalPrice,
        };
        
        console.log (order);

        const id= await addOrder ( order );
        console.log (id);
        /* Swal.fire("su id es:"+ id);
        cleanCart(); */
    }

    return (
        <div>
            <div>
            
            <div>
              <div className="cart">
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Precio</span>
                <span>Subtotal</span>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="cart">
                  <span>{item.title}</span>

                  <span>{item.qty}</span>
                  <span>$ {item.price}</span>
                  <span>$ {item.qty * item.price}</span>
                </div>
              ))}
            </div>
          </div>

            <button onClick= {cleanCart}> Vaciar Carrito</button>
            <span>Total $ {getTotalPrice().toLocaleString("es-CO", {maximumFractionsDigits: 2, minimumFractionsDigits: 2,})}</span>
            {
                cart.map((item)=> <div key={item.id} onClick={()=> removeProduct(item.id)}>Eliminar --- {item.title}</div>)
            }

            <div className="Input">

                <div>
                    <span>Nombre</span>
                    <input placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <span>Mail</span>
                    <input placeholder="Mail" onChange={(e) => setMail(e.target.value)} />
                </div>
                <div>
                    <span>Repetir Mail</span>
                    <input placeholder="Repetir Mail" onChange={(e) => setMail2(e.target.value)} />
                </div>
                <div>
                    <span>Telefono</span>
                    <input placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} />
                </div>

                <button onClick={createOrder}>Realizar pedido</button>

            </div>

        </div>
        );
    };
