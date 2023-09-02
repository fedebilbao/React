import {useEffect, useState} from "react";
import {useCartContext} from "../state/Cart.context";
import {addOrder} from "../lib/orders.requests";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./Cart.css"
import { updateManyEvents } from "../lib/evento.requests";

export const Cart = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [mail2, setMail2] = useState("");
    const [focused, setFocused] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [focused3, setFocused3] = useState(false);

    const {cart, cleanCart, getTotalPrice, removeProduct} = useCartContext();
    useEffect(()=>{
        console.log({cart})
    },[cart])

    function validatemail (email) {
        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
        return emailRegex.test(email);
    }
    function validatephone (phone){
        const phoneRegex= /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
        return phoneRegex.test(phone);
    }


    const createOrder = async () => {
            const items = cart.map (({id, title, qty, price})=> ({id, title, qty, price}));
            const order = {
                buyer: {name, phone, mail},
                items,
                total: getTotalPrice (),
            };
    
            console.log (order);

            if(name && phone && mail && mail2){ /* ver items para que el pedido no se genere si esta vacio */
    
            const id= await addOrder ( order );
            
            await updateManyEvents (items);
    
            const MySwal = withReactContent(Swal)
    
            MySwal.fire("Guarde esta información para realizar el seguimiento de su pedido, su id es: "+ id);
            cleanCart(); 
            }

            else{ console.log ("no se cargó correctamente los datos del cliente")}
        }

    return (
        <div>
            {cart.length ? (
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
          ) : (
            <h1>EL carrito esta vacio</h1>
          )}
            <button onClick= {cleanCart}> Vaciar Carrito</button>
            <span>Total $ {getTotalPrice().toLocaleString("es-CO", {maximumFractionsDigits: 2, minimumFractionsDigits: 2,})}</span>
            {
                cart.map((item)=> <div key={item.id} onClick={()=> removeProduct(item.id)}>Eliminar --- {item.title}</div>)
            }

            {cart.length ? (
            <div className="Input">
                <div>
                    <span>Nombre</span>
                    <input placeholder="Nombre" onMouseLeave={ (e) => { setName(e.target.value) }}/>
                </div>
                <div>
                    <span>Mail</span>
                    <input style={{color: focused ? 'red' : ''}} placeholder="Mail" onBlur={(e) => {if(validatemail(e.target.value)) {setMail(e.target.value), setFocused(false)} else {setFocused(true)}}} />
                </div>
                <div>
                    <span>Repetir Mail</span>
                    <input style={{color: focused2 ? 'red' : ''}} placeholder="Repetir Mail" onBlur={(e) => {if(e.target.value == mail) {setMail2(e.target.value), setFocused2(false)} else {setFocused2(true)}}} />
                </div>
                <div>
                    <span>Telefono Celular</span>
                    <input style={{color: focused3 ? 'red' : ''}} placeholder="Telefono de 10 digitos" onBlur={(e) => {if(validatephone(e.target.value)) {setPhone(e.target.value), setFocused3(false)} else {setFocused3(true)}}} />
                </div>

                <button onClick={createOrder}>Realizar pedido</button>
            </div>
            ) : (
                <h1></h1>
              )}
            

        </div>
        );
    };
