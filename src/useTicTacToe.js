import { useState } from 'react'

const useTicTacToe = (initState = []) => {

  const [board, setBoard] = useState(initState)
  const [nextPlayer, setNextPlayer] = useState(true)
  const [win, setWin] = useState(false)

  //When spot is clicked on
  const handleClick = (chosenSpot) => {

    const copyBoard = [...board]
    const newBoard = copyBoard.map(spot => {
      if (spot.id === chosenSpot.id) {
        //which player placed
        spot.value = nextPlayer ? "X" : "O"
        return spot
      } else {
        return spot
      }
    })

    checkWin(newBoard)
    setBoard(newBoard)
    setNextPlayer(!nextPlayer)
  }

  //New game
  const newGame = () => {
    setWin(false)
    setBoard(initState)
  }

  //Check if there is a winner
  const checkWin = (board) => {
    //winning indexes
    const winningLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for (let i = 0; i < winningLines.length; i++) {
      const [a,b,c] = winningLines[i]
      //if winning spots are the same value
      if (board[a].value === board[b].value && board[b].value === board[c].value) {
        setWin(true)
      }
    }
  }

  return {
    board,
    nextPlayer,
    win,
    handleClick,
    newGame
  }
}

export default useTicTacToe