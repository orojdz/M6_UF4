import { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export function FormulariTasques({ funcAfegirTasca, id }) {
  const [textTasca, setTextTasca] = useState('')

  const canviTextTasca = e => {
    setTextTasca(e.target.value)
  }

  const enviarForm = e => {
    e.preventDefault()
    const tascaNova = {
      id: id,
      text: textTasca,
      completada: false
    }
    console.log(id, ' : ', textTasca )
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
        <IconButton type='submit' className='afegirTasca' aria-label="add">
          <AddIcon />
        </IconButton>
        {/* <button type="submit">Add task</button> */}
      </form>
    </>
  );
}