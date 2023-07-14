// import { useState } from 'react'
import '../styles/App.css'
import '../styles/Resume.css'
import '../styles/Editor.css'
import Editor from './Editor'
import Resume from './Resume'

function App() {


  return (
    <div className="content">
      <Editor />
      <Resume />
    </div>
  )
}

export default App
