import React from "react";
import IconButton from '@mui/material/IconButton';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

export function Tasca({id, text, completada, eliminarTasca, completarTasca}) {
    const tascaClassName = completada ? "tascaCompletada" : "tascaComp"
    
    const btnEliminar = (e) => {
      e.stopPropagation();
      eliminarTasca(id)
    }

    const tachaTasca = () => {
      completarTasca(id)
      console.log('feta')
    }
 
    return(
        <>
          <div className={tascaClassName} onClick={tachaTasca}>
            <div className="tascaComponents">
                <span>{text}</span>
              <div className="btnTasca">
                <IconButton className="btnIcon" size="small" onClick={btnEliminar}>
                  <HighlightOffOutlinedIcon fontSize="inherit"/>
                </IconButton>
              </div>
            </div>
          </div>
        </>
    );
}