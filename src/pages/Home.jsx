import { useState, useEffect } from "react";
import { getEventos } from "../lib/evento.requests";
import { ItemListContainer, Loader } from "../components";
/* import { cargarData} from "../lib/evento.requests" */

export const Home = () => {
  
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /* cargarData() */

   getEventos() 
    .then(res => {
      setIsLoading(false); 
      setProducts(res)} 
      
      ) 

  }, []);


  if(isLoading) return <Loader />

  return (
    <div>
      <div className="container">
        <ItemListContainer products={products}/>
      </div>
    </div>
  );
};