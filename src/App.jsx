import { useState } from 'react'
import TritonLogo from "./assets/LOGO TRITON CIRCULAR PNG.png"
import TritonLogo2 from "./assets/LOGO TRITON PNG.png"
import './App.css'
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"



function App() {
  const [count, setCount] = useState(0)

  return (
      
    <div>
      <NavBar LOGO={TritonLogo2}/>
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
}

export default App
