import { useState } from 'react'
import { Button } from './components/button/Button'
import { CounterBox } from './components/counter/CounterBox'
import './App.css'

function App() {
  const[numClics, setNumClics] = useState(0);

  // Incrementa el contador de clics
  const incrementNum = () => {
    setNumClics(numClics + 1)
  }
  // reiniciar el contador
  const reiniciarNum = () => {
    setNumClics(0)
  }
  
  return (
    <>
      <div className='btnComp'>
        <h1>Counter</h1>
      <CounterBox num={numClics} />
        <Button 
          text="Click" 
          esClick={true} 
          onClick={incrementNum}/>
        <Button 
          text="Reiniciar" 
          esClick={false} 
          onClick={reiniciarNum}/>
      </div>
    </>
  )
}
export default App