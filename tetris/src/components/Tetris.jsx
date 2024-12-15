import React, { useState, useEffect } from 'react'
import './Tetris.css'

const ROWS = 20
const COLS = 10

const createEmptyBoard = () => {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0))
};

export function Tetris() {
  const [board, setBoard] = useState(createEmptyBoard())
  const [currentPiece, setCurrentPiece] = useState(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        movePieceDown()
      }
    }, 500)
    return () => clearInterval(interval)
  }, [board, gameOver])

  const movePieceDown = () => {
    // Lógica para mover la pieza hacia abajo
  }

  return (
    <div className="tetris">
      <h1>Tetris</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className={`cell ${cell ? 'filled' : ''}`}></div>
            ))}
          </div>
        ))}
      </div>
      <div className="score">Score: {score}</div>
      {gameOver && <div className="game-over">Game Over</div>}
    </div>
  )
}