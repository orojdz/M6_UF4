import React from "react";
import IconButton from '@mui/material/IconButton';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
 
export function Tasca({id, text, completada, eliminarTasca, completarTasca}) {
    const tascaClassName = completada ? "tascaCompletada" : "tascaComp"
    
    const btnEliminar = () => {
      eliminarTasca(id)
    }

    const tachaTasca = () => {
      completarTasca(id)
      console.log('feta')
    }
 
    return(
        <>
          <div className={tascaClassName} onClick={tachaTasca}>
            <span>{text}</span>
            <IconButton size="small" onClick={btnEliminar}>
              <HighlightOffOutlinedIcon fontSize="inherit"/>
            </IconButton>
          </div>
        </>
    );
}