import {CartWidget} from "../CartWidget/CartWidget"
import { NavLink, Outlet } from "react-router-dom";
import TritonLogo2 from "../../assets/LOGO TRITON PNG.png"

export const NavBar = () => {
    return (
      <>

      <header>
          <div className="container">
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}> 
            <NavLink to="/">
              <img src={TritonLogo2} alt="Logo" style={{width:150}}/>
            </NavLink>
              <nav style={{display:"flex", gap: 20}}>
              <NavLink to="/category/salones">salones</NavLink>
                <NavLink to="/category/shows">shows</NavLink>
                <NavLink to="/category/servicios">servicios</NavLink>
              </nav>

              <CartWidget />
          </div>
        </div> 
      </header>
      <Outlet />
      </>
      );
  };