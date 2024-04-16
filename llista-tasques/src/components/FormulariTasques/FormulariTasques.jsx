import { useState } from 'react'
import { IconButton,  InputAdornment, TextField } from '@mui/material';
import {Tooltip} from "@nextui-org/react";
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
    funcAfegirTasca(tascaNova)
    setTextTasca('')
  }

  return(
    <>
      <form className="formComp" onSubmit={enviarForm}>
      <TextField 
          className="formInput customTextField" 
          value={textTasca}
          onChange={canviTextTasca} 
          label="New task"
          color="secondary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip content="Add task">
                  <IconButton type='submit' aria-label="add">
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </>
  );
}