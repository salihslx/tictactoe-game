import './styles.scss'
import Board from './components/Board'
import { useState } from "react";
import {calculateWinner} from "./winner"

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  
  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : '0';
  const statusMessage = winner ? 'Winner is '+ winner : "Next Player is " + nextPlayer;
  

  //dirived(computed) value  from  state
  
  const handleSquareClick = clickedPosition => {
   //null , "x", "0"
    if(squares[clickedPosition] || winner){
       return
    }

    setSquares(currentSquares => {

      return currentSquares.map((squareValue,position) => {
       //condition checkeing
        if(clickedPosition == position){
          return isXNext ? 'X' : '0';
        }
        return squareValue;

      });

    });
    setIsXNext(currentIsXNext => !currentIsXNext);

  };
  

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  )
}

export default App
