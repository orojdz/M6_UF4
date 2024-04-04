import React from 'react'

export function Button(prop) {
  const btnClassName = prop.esClick ? "btnClick" : "btnReiniciar"
    return (
      <button className={btnClassName} onClick={ prop.onClick }>
        { prop.text }
      </button>
    )
}