import { useState } from 'react'
import '../styles/App.css'
import '../styles/Resume.css'
import '../styles/Editor.css'
import Editor from './Editor'
import Resume from './Resume'

function App() {
  const [name, setName] = useState("Liam Benson");
  const [number, setNumber] = useState("(555) 555-2535");
  // const [email, setEmail] = useState("demo@gmail.com");
  // const [location, setLocation] = useState("Los Angeles, CA");

  return (
    <div className="content">
      <Editor
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
      />
      <Resume
        name={name}
        number={number}
      />
    </div>
  )
}

export default App
