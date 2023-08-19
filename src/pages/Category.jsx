import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventos } from "../lib/evento.requests";
import { ItemListContainer, Loader } from "../components";

export const Category = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
  
     getEventos(id) 
      .then(res => {
        setIsLoading(false); 
        setProducts(res)} 
        
        ) 
    }, [id]);
  
    if(isLoading) return <Loader />

    return (
      <div>
        <div className="container">
          <ItemListContainer products={products} />
        </div>
      </div>
    );

}