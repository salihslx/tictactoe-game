import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

 //main.jsx is the root file configuration in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  //main component in react app is <App/>
  /* 1) .component start capital latter
    2) .component is colsed  */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
