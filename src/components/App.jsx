import { useState } from 'react'
import '../styles/App.css'
import '../styles/Resume.css'
import '../styles/Editor.css'
import Editor from './Editor'
import Resume from './Resume'

function App() {
  const [name, setName] = useState("Liam Benson");
  const [number, setNumber] = useState("(555) 555-2535");
  const [email, setEmail] = useState("demo@gmail.com");
  const [location, setLocation] = useState("Los Angeles, CA");
  const [summary, setSummary] = useState("Results-oriented and compassionate psychologist with a proven track record in providing exceptional psychological services. Possesses a deep understanding of diverse learning needs, disabilities, and behavioral challenges. Seeking a rewarding opportunity in a private practice setting to apply my expertise and dedication to empowering students and fostering their well-being.")

  const initialEducationEntries = [
    {
      school: "California State University Los Angeles",
      schoolLocation: "Los Angeles, CA",
      schoolDegree: "Bachelor of Science in Psychology",
      schoolDateStart: "Aug. 2014",
      schoolDateEnd: "Aug. 2018",
      id: crypto.randomUUID(),
    },
    {
      school: "UCLA",
      schoolLocation: "Los Angeles, CA",
      schoolDegree: "Master of Science in Psychology",
      schoolDateStart: "Aug. 2014",
      schoolDateEnd: "Aug. 2018",
      id: crypto.randomUUID(),
    },
  ];

  const [educationEntries, setEducationEntries] = useState(initialEducationEntries);

  return (
    <div className="content">
      <Editor
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        email={email}
        setEmail={setEmail}
        location={location}
        setLocation={setLocation}
        summary={summary}
        setSummary={setSummary}
        educationEntries={educationEntries}
        setEducationEntries={setEducationEntries}
      />
      <Resume
        name={name}
        number={number}
        email={email}
        location={location}
        summary={summary}
        educationEntries={educationEntries}
      />
    </div>
  )
}

export default App
