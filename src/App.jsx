import './styles.scss'
import Board from './components/Board'
import { useState } from 'react';
function App() {

  const [count, setCount] = useState(1);
  
  //let counter = 1;

  
     const  onBtnClick = () =>{
      setCount(count+1);
   }
  

  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}><h2>Click me please</h2></button>
        
        <div><h1>{count}</h1></div>
      </div>
    </div>
  )
}

export default App
