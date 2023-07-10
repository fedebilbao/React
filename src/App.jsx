import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TritonLogo from './assets/LOGO TRITON CIRCULAR PNG.png'
import './App.css'
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <NavBar />
      <div className="container">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={TritonLogo} className="logo" alt="Triton logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
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
