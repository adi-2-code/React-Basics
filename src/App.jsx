import { useState } from 'react'
import './App.css'
function App() {
 const [count, setCount] = useState(0);
 const [name,setName] = useState("");
  return (
    <>  
    <div>
    <h1>COUNTER: {count}</h1>  
    <button onClick={() => setCount(count + 1)}>
      +
    </button>
    <button onClick={()=> setCount(count-1)}>
      -
    </button>
    <button onClick={() => setCount(0)}>
      Reset
    </button>
    </div>
    </>
  )
}

export default App
