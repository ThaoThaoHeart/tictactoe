import React from 'react'
import Square from './Square'
import './style.css'

const Board = ({board, onClick}) => {
  
  return (
    <div className="boardWrapper">
      {board.map(square=> {
        return (
            <Square key={square.id} square={square} onClick={onClick}/>
        )
      })}
    </div>
  )
}

export default Board
