import { useState } from 'react'
import Board from './Board';
import useTicTacToe from './useTicTacToe';
import { game } from './var';

const App = () => {

  const {board, nextPlayer, win, handleClick, newGame} = useTicTacToe(game)

  return (
    <div className="App">
      <Board board={board} onClick={handleClick}/>
      <h2> {win ? "Winner: " + (!nextPlayer ? "X" : "O") : (nextPlayer ? "X" : "O") + "'s turn!"} </h2>
      <button onClick={newGame}>New Game</button>
    </div>
  );
}

export default App;
