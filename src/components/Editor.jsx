import PropTypes from 'prop-types';

export default function Editor(props) {
    return (
        <div className="editor-container">
            <Form {...props} />
        </div>
    )
}

function Form(props) {
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
                    <FormEducation {...props} />
            </section>
        </form>
    )
}

function FormEducation(props) {
    return (
        <>
            {props.educationEntries.map(entry => (
                <div className="form-group education-entry" key={entry.id}>
                    <label htmlFor="input-school-name">
                        <div className="hidden">university</div>
                        <input
                            type="text"
                            id="input-school-name"
                            name="school-name"
                            placeholder="University"
                            value={entry.school}
                        // onChange={(e) => setName(e.target.value)}
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
                        // onChange={(e) => setName(e.target.value)}
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
                        // onChange={(e) => setName(e.target.value)}
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
                        // onChange={(e) => setName(e.target.value)}
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
                        // onChange={(e) => setName(e.target.value)}
                        ></input>
                    </label>
                </div>
            ))}
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
}