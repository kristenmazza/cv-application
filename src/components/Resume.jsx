export default function Resume() {
    return (
        <>
            <div className="resume-container">
                <ResumeContent />
            </div>
        </>
    )
}

export function ResumeContent() {
    return (
        <div className="resume-content">
            <ResumeContact />
            <ResumeHeading title={"Education"} />
            <ResumeEducationBlock />
        </div>
    )
}

function ResumeContact() {
    return (
        <div className="resume-contact">
            <h1 className="resume-contact-name">First Last Name</h1>
            <div className="resume-contact-row">
                <span className="contact-phone">(555) 555-5555</span> | <span className="contact-email">demo@gmail.com</span> | <span className="contact-location">City, St.</span>
            </div>
        </div>
    )
}

function ResumeHeading({title}) {
    return (
        <div>
            <h2 className="resume-heading">{title}</h2>
            <hr/>
        </div>
    )
}

function ResumeEducationBlock() {
    return (
        <div className="resume-education-block">
            <EducationEntry />
            <EducationEntry />
        </div>
    )
}

function EducationEntry() {
    return (
        <div className="education-entry">
            <EducationSchool />
            <EducationDegree />
        </div>
    )
}

function EducationSchool() {
    return (
        <div className="resume-block-row">
            <div className="school-name">School Name</div>
            <div className="school-location">City, St.</div>
        </div>
    )
}

function EducationDegree() {
    return (
        <div className="resume-block-row">
            <div className="degree">Bachelor of Science in Computer Science</div>
            <div className="degree-year">
                <span className="degree-year-start">Aug. 2018</span> - <span className="degree-year-end">Aug. 2021</span>
            </div>
        </div>
    )
}