import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  
  const e = useRef(0);
  const i = useRef(0);
  const [s, setS] = useState(0)

  return (
    <>
      <div>
        <input type="number" onChange={(eve) => {e.current = (Number(eve.target.value))}}/>
        <input type="number" onChange={(eve) => {i.current = (Number(eve.target.value))}}/>
        <button onClick={() => {setS(e.current+i.current)}}>Somar</button>
        <p>Soma = {s}</p>
      </div>
    </>
  )
}

export default App
