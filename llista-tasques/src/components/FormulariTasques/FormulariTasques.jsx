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
        <input className="formInput" type="text"
          value={textTasca}
          onChange={canviTextTasca} 
          placeholder="New task"/>
        <button type="submit">Add task</button>
      </form>
    </>
  );
}