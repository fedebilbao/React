import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import './App.css'
import {NavBar, ItemListContainer, ItemCount, Item } from "./components"
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { CartProvider } from "./state/Cart.context";
import { ThemeProvider } from "./state/Theme.context";
import { Cart } from "./pages/Cart";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}>

        <Route path="/" element={<Home />} />
         <Route path="/item/:id" element={<Detail />} />
         <Route path="/category/:id" element={<Category />} />
         <Route path="/cart" element={<Cart />} />
         

    </Route>
  )
);

function App() {
  return (
    <div>
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={routes} />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}
/*
function App() {
  const [count, setCount] = useState(0)
  const handleCart= (q) => { 
    console.loq ("la cantidad es", q)
  }

  return (
      
    <div>
      <RouterProvider router={routes}/>
      
      <ItemCount stock={10} onAdd= {handleCart}/>
      <ItemListContainer imagen="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  greeting= "Eventos de calidad al alcance de tu mano" />
      <div className="container">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={TritonLogo} className="logo" alt="Triton logo" style={{width: 300, height: "auto"}}/>
        </a>
      </div>
      <h1>Creá tu evento de forma sencilla</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>

    </div>
    
  )
}*/

export default App
