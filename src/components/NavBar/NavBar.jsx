import {CartWidget} from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
      <header>
          <div className="container">
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span style={{fontSize: 24, fontFamily: "sans-serif", fontWeight: "bolder"}}> Triton </span>
              <nav style={{display:"flex", gap: 20}}>
                <a href="">Crea Tu evento</a>
                <a href="">Inicio</a>
                <a href="">Contacto</a>
                <a href="">Nosotros</a>
                <a href="">Otros Eventos</a>
              </nav>

              <CartWidget />
          </div>
        </div> 
      </header>
      );
  };