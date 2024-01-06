import React, {Fragment} from "react"
import { useState } from "react"

function App() {
  const [title, setTitle] = useState("my name is Collapse");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  

  return (
    
      <div>
        <button onClick={updateTitle}>click me to change the title</button>
        <Header title={title}></Header>
        <Header title="Collapse "></Header>
      </div>
      
  )
}

const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})



export default App
