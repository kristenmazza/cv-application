import { useState } from 'react'
import '../styles/App.css'
import '../styles/Resume.css'
import '../styles/Editor.css'
import Editor from './Editor'
import Resume from './Resume'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [name, setName] = useState("Liam Benson");
  const [number, setNumber] = useState("(555) 555-2535");
  const [email, setEmail] = useState("demo@gmail.com");
  const [location, setLocation] = useState("Los Angeles, CA");
  const [summary, setSummary] = useState("Results-oriented and compassionate psychologist with a proven track record in providing exceptional psychological services. Seeking a rewarding opportunity in a private practice setting to apply my expertise and dedication to empowering students and fostering their well-being.")

  const initialEducationEntries = [
    {
      school: "California State University, Northridge",
      schoolLocation: "Northridge, CA",
      schoolDegree: "Master of Science in Psychology",
      schoolDateStart: "Aug. 2019",
      schoolDateEnd: "May 2021",
      id: uuidv4(),
    },
    {
      school: "University of California, Sunnydale",
      schoolLocation: "Sunnydale, CA",
      schoolDegree: "Bachelor of Science in Psychology",
      schoolDateStart: "Aug. 2016",
      schoolDateEnd: "Aug. 2018",
      id: uuidv4(),
    },
      {
      school: "Sunnydale College",
      schoolLocation: "Sunnydale, CA",
      schoolDegree: "Associate of Arts in Child Development",
      schoolDateStart: "Aug. 2014",
      schoolDateEnd: "Aug. 2018",
      id: uuidv4(),
    },
  ];

  const initialJobEntries = [
    {
      jobTitle: "School Psychologist",
      jobDateStart: "Aug. 2021",
      jobDateEnd: "Aug. 2023",
      jobCompany:"Sunnydale High School",
      jobLocation: "Sunnydale, CA",
      jobDescription: "Conducted comprehensive psychoeducational assessments to identify student learning and behavioral needs. Implemented evidence-based interventions and strategies to support students with diverse learning needs.",
      id: uuidv4(),
    },
    {
      jobTitle: "Administrative Assistant",
      jobDateStart: "Aug. 2015",
      jobDateEnd: "Jul. 2018",
      jobCompany:"Sunnydale Elementary School",
      jobLocation: "Sunnydale, CA",
      jobDescription: "Provided comprehensive administrative support to the school administration, including handling correspondence, scheduling appointments, managing calendars, and organizing meetings.",
      id: uuidv4(),
    },
    {
      jobTitle: "Crew Member",
      jobDateStart: "Jan. 2014",
      jobDateEnd: "Apr. 2015",
      jobCompany:"Doublemeat Palace",
      jobLocation: "Sunnydale, CA",
      jobDescription: "Successfully contributed to the efficient operation of a fast-paced restaurant by delivering exceptional customer service and maintaining high standards of cleanliness and food preparation.",
      id: uuidv4(),
    },
    {
      jobTitle: "Childcare Provider",
      jobDateStart: "Jan. 2013",
      jobDateEnd: "Apr. 2014",
      jobCompany:"Daily Daycare",
      jobLocation: "Sunnydale, CA",
      jobDescription: "Provided attentive supervision and maintained a secure and nurturing environment for children aged infants to toddlers within a dynamic daycare facility.",
      id: uuidv4(),
    },
    //   {
    //   jobTitle: "Babysitter",
    //   jobDateStart: "Dec. 2011",
    //   jobDateEnd: "Mar. 2013",
    //   jobCompany:"Babysitter Club",
    //   jobLocation: "Sunnydale, CA",
    //   jobDescription: "Established a trusting and reliable relationship with parents and children as a dedicated member of the Babysitter Club, ensuring a safe and engaging environment during evening and weekend childcare sessions.",
    //   id: uuidv4(),
    // }
  ]

  const [educationEntries, setEducationEntries] = useState(initialEducationEntries);
  const [jobEntries, setJobEntries] = useState(initialJobEntries);

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
        jobEntries={jobEntries}
        setJobEntries={setJobEntries}
      />
      <Resume
        name={name}
        number={number}
        email={email}
        location={location}
        summary={summary}
        educationEntries={educationEntries}
        jobEntries={jobEntries}
      />
    </div>
  )
}

export default App
