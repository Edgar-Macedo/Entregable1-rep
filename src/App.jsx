import { useState } from 'react'
import "./components/Quotebx"
import './App.css'
import Quotebx from './components/Quotebx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Quotebx/>
    </div>
  )
}

export default App
