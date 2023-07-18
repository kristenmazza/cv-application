import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Editor(props) {
    return (
        <div className="editor-container">
            <Form {...props} />
        </div>
    )
}

function Form(props) {
    const [isEduAddButtonShown, setIsEduAddButtonShown] = useState(false);
    const [isExpAddButtonShown, setIsExpAddButtonShown] = useState(false);

    return (
        <form>
            <section>
                <h2 className="editor-heading">Personal Details</h2>
                <div className="form-group">
                    <label htmlFor="input-name">
                        <div className="hidden">name</div>
                        <input
                            type="text"
                            id="input-name"
                            name="name"
                            placeholder="Name"
                            value={props.name}
                            onChange={(e) => props.setName(e.target.value)}
                        ></input>
                    </label>
                    <label htmlFor="input-number">
                        <div className="hidden">phone number</div>
                        <input
                            type="text"
                            id="input-number"
                            name="number"
                            placeholder="Phone Number"
                            value={props.number}
                            onChange={(e) => props.setNumber(e.target.value)}
                        ></input>
                    </label>
                    <label htmlFor="input-email">
                        <div className="hidden">email</div>
                        <input
                            type="text"
                            id="input-email"
                            name="email"
                            placeholder="Email"
                            value={props.email}
                            onChange={(e) => props.setEmail(e.target.value)}
                        ></input>
                    </label>
                    <label htmlFor="input-location">
                        <div className="hidden">location</div>
                        <input
                            type="text"
                            id="input-location"
                            name="location"
                            placeholder="Location"
                            value={props.location}
                            onChange={(e) => props.setLocation(e.target.value)}
                        ></input>
                    </label>
                    <label htmlFor="input-about">
                        <div className="hidden">about</div>
                        <textarea
                            id="input-about"
                            name="about"
                            placeholder="About"
                            value={props.summary}
                            onChange={(e) => props.setSummary(e.target.value)}
                        ></textarea>
                    </label>
                </div>
            </section>
            <section>
                <h2 className="editor-heading">Education</h2>
                <FormEducation {...props} isEduAddButtonShown={isEduAddButtonShown} setIsEduAddButtonShown={setIsEduAddButtonShown} />
                <h2 className="editor-heading">Experience</h2>
                <FormExperience {...props} isExpAddButtonShown={isExpAddButtonShown} setIsExpAddButtonShown={setIsExpAddButtonShown} />
            </section>
        </form>
    )
}

// Education Editor

function handleSchoolInputChange(e, id, educationEntries, setEducationEntries, item) {
    const currentEducationEntryIndex = educationEntries.findIndex((entry) => entry.id === id);
    const updatedEducationEntry = { ...educationEntries[currentEducationEntryIndex], [item]: e.target.value };
    const newEducationEntries = [...educationEntries.slice(0, currentEducationEntryIndex),
        updatedEducationEntry,
        ...educationEntries.slice(currentEducationEntryIndex + 1)]

    setEducationEntries(newEducationEntries);
}

function handleRemoveEducation({ entryId, educationEntries, setEducationEntries, setIsEduAddButtonShown }) {
    const newEducationList = educationEntries.filter((entry) => entry.id !== entryId);
    setEducationEntries(newEducationList);

    // Show add button if there are no education entries
    if (newEducationList.length === 0) {
        setIsEduAddButtonShown(true);
    }
}

function handleAddEducation(e, { setEducationEntries, setIsEduAddButtonShown }) {
    e.preventDefault();
    const newItem = {
        school: "",
        schoolLocation: "",
        schoolDegree: "",
        schoolDateStart: "",
        schoolDateEnd: "",
        id: crypto.randomUUID(),
    }
    setEducationEntries(educationEntries => [...educationEntries, newItem]);
    setIsEduAddButtonShown(false);
}

function DeleteEducationButton({entryId, educationEntries, setEducationEntries, setIsEduAddButtonShown}) {
    return (
        <button
            type="button"
            className="delete-button"
            id={entryId}
            onClick={() => handleRemoveEducation({ entryId, educationEntries, setEducationEntries, setIsEduAddButtonShown })}
        >Delete</button>
    )
}

function AddEducationButton({ educationEntries, setEducationEntries, setIsEduAddButtonShown }) {
    return (
        <button className="add-button" onClick={(e) => handleAddEducation(e, { educationEntries, setEducationEntries, setIsEduAddButtonShown })}>Add</button>
    )
}

function FormEducation(props) {
    return (
        <>
            {props.educationEntries.map((entry, i) => (
                <div className="form-group education-entry" key={entry.id}>
                    <label htmlFor={`input-school-name-${entry.id}`}>
                        <div className="hidden">university</div>
                        <input
                            type="text"
                            id={`input-school-name-${entry.id}`}
                            name="school-name"
                            placeholder="University"
                            value={entry.school}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "school")}
                        ></input>
                    </label>
                    <label htmlFor={`input-school-location-${entry.id}`}>
                        <div className="hidden">location</div>
                        <input
                            type="text"
                            id={`input-school-location-${entry.id}`}
                            name="school-location"
                            placeholder="Location"
                            value={entry.schoolLocation}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "schoolLocation")}
                        ></input>
                    </label>
                    <label htmlFor={`input-school-degree-${entry.id}`}>
                        <div className="hidden">degree</div>
                        <input
                            type="text"
                            id={`input-school-degree-${entry.id}`}
                            name="school-degree"
                            placeholder="Degree"
                            value={entry.schoolDegree}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "schoolDegree")}
                        ></input>
                    </label>
                     <label htmlFor={`input-school-date-start-${entry.id}`}>
                        <div className="hidden">start date</div>
                        <input
                            type="text"
                            id={`input-school-date-start-${entry.id}`}
                            name="school-date-start"
                            placeholder="Start Date"
                            value={entry.schoolDateStart}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "schoolDateStart")}
                        ></input>
                    </label>
                    <label htmlFor={`input-school-date-end-${entry.id}`}>
                        <div className="hidden">end date</div>
                        <input
                            type="text"
                            id={`input-school-date-end-${entry.id}`}
                            name="school-date-end"
                            placeholder="End Date"
                            value={entry.schoolDateEnd}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "schoolDateEnd")}
                        ></input>
                    </label>
                    <div className="button-group">
                        <DeleteEducationButton entryId={entry.id} educationEntries={props.educationEntries} setEducationEntries={props.setEducationEntries} setIsEduAddButtonShown={props.setIsEduAddButtonShown} />
                        {i === props.educationEntries.length - 1 && <AddEducationButton educationEntries={props.educationEntries} setEducationEntries={props.setEducationEntries} setIsEduAddButtonShown={props.setIsEduAddButtonShown} />}
                    </div>
                </div>
            ))}
            {props.isEduAddButtonShown === true && <AddEducationButton educationEntries={props.educationEntries}  setEducationEntries={props.setEducationEntries} setIsEduAddButtonShown={props.setIsEduAddButtonShown}/>}
        </>
    )
}

// Experience Editor

function handleJobInputChange(e, id, jobEntries, setJobEntries, item) {
    const currentJobEntryIndex = jobEntries.findIndex((entry) => entry.id === id);
    const updatedJobEntry = { ...jobEntries[currentJobEntryIndex], [item]: e.target.value };
    const newJobEntries = [...jobEntries.slice(0, currentJobEntryIndex),
        updatedJobEntry,
        ...jobEntries.slice(currentJobEntryIndex + 1)]

    setJobEntries(newJobEntries);
}

function handleRemoveJob({ entryId, jobEntries, setJobEntries, setIsExpAddButtonShown }) {
    const newExperienceList = jobEntries.filter((entry) => entry.id !== entryId);
    setJobEntries(newExperienceList);

    // Show add button if there are no job entries
    if (newExperienceList.length === 0) {
        setIsExpAddButtonShown(true);
    }
}

function handleAddJob(e, { setJobEntries, setIsExpAddButtonShown }) {
    e.preventDefault();
    const newItem = {
        school: "",
        schoolLocation: "",
        schoolDegree: "",
        schoolDateStart: "",
        schoolDateEnd: "",
        id: crypto.randomUUID(),
    }
    setJobEntries(jobEntries => [...jobEntries, newItem]);
    setIsExpAddButtonShown(false);
}

function DeleteJobButton({entryId, jobEntries, setJobEntries, setIsExpAddButtonShown}) {
    return (
        <button
            type="button"
            className="delete-button"
            id={entryId}
            onClick={() => handleRemoveJob({ entryId, jobEntries, setJobEntries, setIsExpAddButtonShown })}
        >Delete</button>
    )
}

function AddJobButton({ jobEntries, setJobEntries, setIsExpAddButtonShown }) {
    return (
        <button className="add-button" onClick={(e) => handleAddJob(e, { jobEntries, setJobEntries, setIsExpAddButtonShown })}>Add</button>
    )
}

function FormExperience(props) {
    return (
        <>
            {props.jobEntries.map((entry, i) => (
                <div className="form-group job-entry" key={entry.id}>
                    <label htmlFor={`input-job-title-${entry.id}`}>
                        <div className="hidden">title</div>
                        <input
                            type="text"
                            id={`input-job-title-${entry.id}`}
                            name="job-title"
                            placeholder="Title"
                            value={entry.jobTitle}
                            onChange={(e) => handleJobInputChange(e, entry.id, props.jobEntries, props.setJobEntries, "jobTitle")}
                        ></input>
                    </label>
                    <label htmlFor={`input-job-date-start-${entry.id}`}>
                        <div className="hidden">start date</div>
                        <input
                            type="text"
                            id={`input-job-date-start-${entry.id}`}
                            name="job-date-start"
                            placeholder="Start Date"
                            value={entry.jobDateStart}
                            onChange={(e) => handleJobInputChange(e, entry.id, props.jobEntries, props.setJobEntries, "jobDateStart")}
                        ></input>
                    </label>
                    <label htmlFor={`input-job-date-end-${entry.id}`}>
                        <div className="hidden">end date</div>
                        <input
                            type="text"
                            id={`input-job-date-end-${entry.id}`}
                            name="job-date-end"
                            placeholder="End Date"
                            value={entry.jobDateEnd}
                            onChange={(e) => handleJobInputChange(e, entry.id, props.jobEntries, props.setJobEntries, "jobDateEnd")}
                        ></input>
                    </label>
                    <label htmlFor={`input-job-company-${entry.id}`}>
                        <div className="hidden">company</div>
                        <input
                            type="text"
                            id={`input-job-company-${entry.id}`}
                            name="job-company"
                            placeholder="Company"
                            value={entry.jobCompany}
                            onChange={(e) => handleJobInputChange(e, entry.id, props.jobEntries, props.setJobEntries, "jobCompany")}
                        ></input>
                    </label>
                    <label htmlFor={`input-job-location-${entry.id}`}>
                        <div className="hidden">location</div>
                        <input
                            type="text"
                            id={`input-job-location-${entry.id}`}
                            name="job-location"
                            placeholder="Location"
                            value={entry.jobLocation}
                            onChange={(e) => handleJobInputChange(e, entry.id, props.jobEntries, props.setJobEntries, "jobLocation")}
                        ></input>
                    </label>
                    <label htmlFor={`input-job-description-${entry.id}`}>
                        <div className="hidden">description</div>
                          <textarea
                            id={`input-job-description-${entry.id}`}
                            name="job-description"
                            placeholder="Description"
                            value={entry.jobDescription}
                            onChange={(e) => handleJobInputChange(e, entry.id, props.jobEntries, props.setJobEntries, "jobDescription")}
                        ></textarea>
                    </label>
                     <div className="button-group">
                        <DeleteJobButton entryId={entry.id} jobEntries={props.jobEntries} setJobEntries={props.setJobEntries} setIsExpAddButtonShown={props.setIsExpAddButtonShown} />
                        {i === props.jobEntries.length - 1 && <AddJobButton jobEntries={props.jobEntries} setJobEntries={props.setJobEntries} setIsExpAddButtonShown={props.setIsExpAddButtonShown} />}
                    </div>
                </div>
            ))}
            {props.isExpAddButtonShown === true && <AddJobButton jobEntries={props.jobEntries}  setJobEntries={props.setJobEntries} setIsExpAddButtonShown={props.setIsExpAddButtonShown}/>}
        </>
    )
}

// Prop types
Form.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
    number: PropTypes.string,
    setNumber: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    location: PropTypes.string,
    setLocation: PropTypes.func,
    summary: PropTypes.string,
    setSummary: PropTypes.func,
}

FormEducation.propTypes = {
    educationEntries: PropTypes.array,
    setEducationEntries: PropTypes.func,
    isEduAddButtonShown: PropTypes.bool,
    setIsEduAddButtonShown: PropTypes.func,
}

DeleteEducationButton.propTypes = {
    entryId: PropTypes.string,
    educationEntries: PropTypes.array,
    setEducationEntries: PropTypes.func,
    isEduAddButtonShown: PropTypes.bool,
    setIsEduAddButtonShown: PropTypes.func,
}

AddEducationButton.propTypes = {
    educationEntries: PropTypes.array,
    setEducationEntries: PropTypes.func,
    setIsEduAddButtonShown: PropTypes.func,
}

FormExperience.propTypes = {
    jobEntries: PropTypes.array,
    setJobEntries: PropTypes.func,
    isExpAddButtonShown: PropTypes.bool,
    setIsExpAddButtonShown: PropTypes.func,
}

DeleteJobButton.propTypes = {
    entryId: PropTypes.string,
    jobEntries: PropTypes.array,
    setJobEntries: PropTypes.func,
    setIsExpAddButtonShown: PropTypes.func,
}

AddJobButton.propTypes = {
    jobEntries: PropTypes.array,
    setJobEntries: PropTypes.func,
    setIsExpAddButtonShown: PropTypes.func,
}