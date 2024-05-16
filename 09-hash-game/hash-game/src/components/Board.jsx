import { useState, useEffect } from 'react'
import Square from './Square'

const Board = () => {
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null))
  const winner = false;

  const handleClick = (i) => {
    console.log(i)
  }

  return (
    <div>
      <div className="status">
        Status: { winner
          ? <p className="winner">O vencedor é: { winner }!</p>
          : (`Próximo a jogar: ${ isNext ? "X" : "O" }`)
         }
      </div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <button className="reset-button">Reiniciar jogo</button>
    </div>
  )
}

export default Board