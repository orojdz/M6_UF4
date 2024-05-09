import React from "react"

export function Welcome(prop) {
    return(
      <>
        <h1>Bienvenido { prop.username }</h1>
        <h2>Pel·lícules per a l’estiu.</h2>
      </>
    );
}