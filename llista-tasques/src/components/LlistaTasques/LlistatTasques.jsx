import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import { useState } from 'react'
import { FormulariTasques } from "../FormulariTasques/FormulariTasques";
import { Tasca } from "../Tasca/Tasca";

export function LlistatTasques() {
    const[tasques, setTasques]= useState([]);

    const afegirTasca = (tasca) => {
      const tasquesActuals = tasques
      if (tasca.text.trim() !== "") {
        setTasques([
          ...tasquesActuals,
          {id: tasquesActuals.length, text: tasca.text, completada: false}
        ])
      }
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
      <Card>
        <CardBody className="llistaTascas">   
          <CardHeader>
            <h2>To-Do list</h2>
          </CardHeader> 
          <FormulariTasques
            id={tasques.length}
            funcAfegirTasca={afegirTasca}
          />
          <div className="tascaComp">
            { tasques.map(tasca => (
              <Tasca 
                key={tasca.id}
                id={tasca.id} 
                text={tasca.text}
                completada={tasca.completada}
                eliminarTasca={eliminarTasca} 
                completarTasca={completarTasca}/>
              ))
            }
          </div>
        </CardBody>
      </Card>
      </>
    );
}