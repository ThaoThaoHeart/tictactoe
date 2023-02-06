import { useState } from "react"

const Square = ({square, onClick}) => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    onClick(square)
    setClicked(true)
  }

  return (
    <div className={clicked ? "square clicked" : "square"} onClick={handleClick}>{square.value}</div>
  )
}

export default Square
