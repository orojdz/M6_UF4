import React from "react";
import { useState } from 'react'
import { FormulariTasques } from "../FormulariTasques/FormulariTasques";
import { Tasca } from "../Tasca/Tasca";

export function LlistatTasques() {
    const[tasques, setTasques]= useState([]);

    const afegirTasca = (tasca) => {
      const tasquesActuals = tasques
      setTasques([
        ...tasques,
        {id: tasquesActuals.length, text: tasca.text, completada: false}
      ])
    };

    const eliminarTasca = id => {
      const tasquesRestants = tasques
      setTasques(
        tasquesRestants.filter(t => t.id !== id)
      );
    }

    const completarTasca = id => {
        const tasquesActuals = tasques.map(t => {
          if (t.id === id) 
            return { ...t, completada: !t.completada } 
          else
            return t
        });
        setTasques(tasquesActuals);
    }

    return(
      <>
        <h1>Mis tareas</h1>
        <FormulariTasques
          funcAfegirTasca={afegirTasca}
        />
        <div className="tascaComp">
          { tasques.map(tasca => (
            <Tasca 
              key={tasca.id}
              id={tasques.indexOf(tasca)} 
              text={tasca.text}
              completada={tasca.completada}
              eliminarTasca={eliminarTasca} 
              completarTasca={completarTasca}/>
          ))
          }
        </div>
      </>
    );
}