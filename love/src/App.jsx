import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [newPos , setNewPos] = useState({x : "500" , y : "500"});

  function setNewNoPos(){
      const value1 = Math.random() * 500
      const value2 = Math.random() * 500
      setNewPos({x : value1 , y : value2});
  }

   return (
    <section>
      <section style={{position: "absolute",
      top : `${400}px`,
      left: `${420}px`  
      }}>Do you want to marry me?</section>
      <button style={{position: "absolute",
      top : `${500}px`,
      left: `${420}px`  
      }}>Yes</button>
      <button style={{position:"absolute" , top: `${newPos.x}px` , left: `${newPos.y}px`}} onMouseOver={() => {
          setNewNoPos();        
      }}>No</button>
    </section>
  )
}

export default App
