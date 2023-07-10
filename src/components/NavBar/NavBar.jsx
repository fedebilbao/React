import {CartWidget} from "../CartWidget/CartWidget"

export const NavBar = ({LOGO}) => {
    return (
      <header>
          <div className="container">
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <img src={LOGO} alt="Logo" style={{width:150}}/>
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