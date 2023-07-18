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
            </section>
        </form>
    )
}

function handleSchoolInputChange(e, id, educationEntries, setEducationEntries, item) {

    const currentEducationEntryIndex = educationEntries.findIndex((entry) => entry.id === id);
    const updatedEducationEntry = { ...educationEntries[currentEducationEntryIndex], [item]: e.target.value };
    const newEducationEntries = [...educationEntries.slice(0, currentEducationEntryIndex),
        updatedEducationEntry,
        ...educationEntries.slice(currentEducationEntryIndex + 1)]

    setEducationEntries(newEducationEntries);
}

function handleRemoveEducation(entryId, educationEntries, setEducationEntries, isEduAddButtonShown, setIsEduAddButtonShown) {
    const newEducationList = educationEntries.filter((entry) => entry.id !== entryId);
    setEducationEntries(newEducationList);

    // Show add button if there are no education entries
    if (newEducationList.length === 0) {
        setIsEduAddButtonShown(true);
    }
}

function DeleteEducationButton(props) {
    return (
        <button
            type="button"
            className="delete-button"
            id={props.entryId}
            onClick={() => handleRemoveEducation(props.entryId, props.educationEntries, props.setEducationEntries, props.isEduAddButtonShown, props.setIsEduAddButtonShown)}
        >Delete</button>
    )
}

function AddEducationButton() {
    return (
        <button className="add-button">Add</button>
    )
}

function FormEducation(props) {
    return (
        <>
            {props.educationEntries.map((entry, i) => (
                <div className="form-group education-entry" key={entry.id}>
                    <label htmlFor="input-school-name">
                        <div className="hidden">university</div>
                        <input
                            type="text"
                            id="input-school-name"
                            name="school-name"
                            placeholder="University"
                            value={entry.school}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "school")}
                        ></input>
                    </label>
                    <label htmlFor="input-school-location">
                        <div className="hidden">location</div>
                        <input
                            type="text"
                            id="input-school-location"
                            name="school-location"
                            placeholder="Location"
                            value={entry.schoolLocation}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "schoolLocation")}
                        ></input>
                    </label>
                    <label htmlFor="input-school-degree">
                        <div className="hidden">degree</div>
                        <input
                            type="text"
                            id="input-school-degree"
                            name="school-degree"
                            placeholder="Degree"
                            value={entry.schoolDegree}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "schoolDegree")}
                        ></input>
                    </label>
                     <label htmlFor="input-school-date-start">
                        <div className="hidden">start date</div>
                        <input
                            type="text"
                            id="input-school-date-start"
                            name="school-date-start"
                            placeholder="Start Date"
                            value={entry.schoolDateStart}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "schoolDateStart")}
                        ></input>
                    </label>
                    <label htmlFor="input-school-date-end">
                        <div className="hidden">end date</div>
                        <input
                            type="text"
                            id="input-school-date-end"
                            name="school-date-end"
                            placeholder="End Date"
                            value={entry.schoolDateEnd}
                            onChange={(e) => handleSchoolInputChange(e, entry.id, props.educationEntries, props.setEducationEntries, "schoolDateEnd")}
                        ></input>
                    </label>
                    <div className="button-group">
                        <DeleteEducationButton entryId={entry.id} educationEntries={props.educationEntries} setEducationEntries={props.setEducationEntries} isEduAddButtonShown={props.isEduAddButtonShown} setIsEduAddButtonShown={props.setIsEduAddButtonShown} />
                        {i === props.educationEntries.length - 1 && <AddEducationButton />}
                    </div>
                </div>
            ))}
            {props.isEduAddButtonShown === true && <AddEducationButton />}
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