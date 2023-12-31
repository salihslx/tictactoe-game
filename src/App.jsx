import './styles.scss'
import Board from './components/Board'
import { useState } from "react";
import {calculateWinner} from "./winner";
import History from './components/History';
import StatusMessage from './components/StatusMessage';




function App() {

  const NEW_GAME = [{squares: Array(9).fill(null), isXNext: false}]

  const [history , setHistory] = useState(NEW_GAME);
   
  const [currentMove , setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

 
  
  const { winner , winningSquares } = calculateWinner(gamingBoard.squares);

  console.log( {historyLength: history.length , currentMove , winningSquares , winner});


  
  

  //dirived(computed) value  from  state
  
  const handleSquareClick = clickedPosition => {
   //null , "x", "0"
    if(gamingBoard.squares[clickedPosition] || winner){
       return;
    }

    setHistory(currentHistory => {

      const isTraversing = currentMove + 1 !== currentHistory.length;

     



      const lastGamingState = isTraversing ? currentHistory[currentMove] : history[history.length - 1];

     const nextSquaresState = lastGamingState.squares.map((squareValue,position) => {
       //condition checkeing
        if(clickedPosition === position){
          return lastGamingState.isXNext ? 'X' : '0';
        }
        return squareValue;

      });

      const base = isTraversing ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState) + 1) : currentHistory;

      return base.concat({
         squares: nextSquaresState ,
         isXNext: !lastGamingState.isXNext
        });

    });
    //setIsXNext(currentIsXNext => !currentIsXNext);
     setCurrentMove(move => move + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  const reset = () =>{
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
 
  

  return (
    <div className="app">
      <h1 className='head'>TIC <span className='text-green'>TAC </span> TOE</h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard}/>
      <Board
       squares={gamingBoard.squares} 
       handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
       />

       <button 
       type='button' 
       className={`btn-reset ${currentMove === 0  ? '' : 'active'}`} onClick={reset} >
         <b>Start new game</b>
      </button>

       <h2 style={{
         fontWeight : "normal"
       }}>Current game history</h2>
       <History history ={history} moveTo ={moveTo} currentMove={currentMove}/>
    </div>
  );
}

export default App;
