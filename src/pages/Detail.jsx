import { useEffect, useState } from "react";
import { ItemCount } from "../components";
import { getEvento } from "../lib/evento.requests";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const {id} = useParams();
  const [evento, setEvento] = useState({});


  useEffect(() => {
    getEvento(+id).then((res) => {
      setEvento(res);
    });
  }, []);

  if(!Object.keys(evento).length) return

  return (
    <div className="container">
      <div className="detail">
        <div>
          <img src={evento.img} style={{height: 400}}/>
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{evento.title} </span>

          <p className="detail__info-description">{evento.description}</p>

          <span className="detail__info-price">
            $
            {(evento.price || 0).toLocaleString("es-CO", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <span className="detail__info-stock">¡Quedan solo {evento.stock}!</span>

          <ItemCount stock={evento.stock} onAdd={() => alert("Comprados")} />
        </div>
      </div>
    </div>
  );
};