import { useState } from 'react'

export function FormulariTasques({ funcAfegirTasca }) {
  const [textTasca, setTextTasca] = useState('')

  const canviTextTasca = e => {
    setTextTasca(e.target.value)
  }

  const enviarForm = e => {
    e.preventDefault()
    const tascaNova = {
      text: textTasca,
      completada: false
    }
    funcAfegirTasca(tascaNova)
    setTextTasca('')
  }

  return(
    <>
      <form className="formComp" onSubmit={enviarForm}>
        <input type="text"
          value={textTasca}
          onChange={canviTextTasca} 
          placeholder="Aprender React"/>
        <button type="submit">Agregar tarea</button>
      </form>
    </>
  );
}