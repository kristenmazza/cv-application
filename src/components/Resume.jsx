import PropTypes from 'prop-types';

export default function Resume(props) {
    return (
        <>
            <div className="resume-container">
                <ResumeContent {...props} />
            </div>
        </>
    )
}

export function ResumeContent({name, number, email, location, summary, educationEntries}) {
    return (
        <div className="resume-content">
            <ResumeContact
                name={name}
                number={number}
                email={email}
                location={location}
            />
            <ResumeHeading title={"About"} />
            <ResumeSummaryBlock summary={summary} />
            <ResumeHeading title={"Education"} />
            <ResumeEducationBlock educationEntries={educationEntries} />
            <ResumeHeading title={("Experience")} />
            <ResumeExperienceBlock />
        </div>
    )
}

function ResumeContact({name, number, email, location}) {
    return (
        <div className="resume-contact">
            <h1 className="resume-contact-name">{name}</h1>
            <div className="resume-contact-row">
                <span className="contact-phone">{number}</span> | <span className="contact-email">{email}</span> | <span className="contact-location">{location}</span>
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

function ResumeSummaryBlock({summary}) {
    return (
        <div className="resume-block summary">
            {summary}
        </div>
    )
}

// Education section
function ResumeEducationBlock({educationEntries}) {
    return (
        <div className="resume-block">
            {educationEntries.map(entry =>
                <div className="education-entry" key={entry.id}>
                    <EducationEntry
                        school={entry.school}
                        schoolLocation={entry.schoolLocation}
                        schoolDegree={entry.schoolDegree}
                        schoolDateStart={entry.schoolDateStart}
                        schoolDateEnd={entry.schoolDateEnd}
                    />
                </div>
            )}
        </div>
    )
}


function EducationEntry({school, schoolLocation, schoolDegree, schoolDateStart, schoolDateEnd}) {
    return (
        <>
            <EducationEntrySubheading
                school={school}
                schoolLocation={schoolLocation}
            />
            <EducationEntrySubheadingItalics
                schoolDegree={schoolDegree}
                schoolDateStart={schoolDateStart}
                schoolDateEnd={schoolDateEnd}
            />
        </>
    )
}

function EducationEntrySubheading({school, schoolLocation}) {
    return (
        <div className="resume-block-row">
            <div className="subheading-left">{school}</div>
            <div className="subheading-right">{schoolLocation}</div>
        </div>
    )
}

function EducationEntrySubheadingItalics({ schoolDegree, schoolDateStart, schoolDateEnd }) {
    return (
        <div className="resume-block-row">
            <div className="subheading-italics-left">{schoolDegree}</div>
            <div className="subheading-italics-right">
                <span className="degree-date-start">{schoolDateStart}</span> - <span className="degree-date-end">{schoolDateEnd}</span>
            </div>
        </div>
    )
}

// Experience section
function ResumeExperienceBlock() {
    return (
        <div className="resume-block">
            {/* for each experience entry, create entry below */}
            <ExperienceEntry
                jobTitle={"School Psychologist"}
                jobDateStart={"Aug. 2018"}
                jobDateEnd={"Aug. 2021"}
                jobCompany={"Sunnydale High School"}
                jobLocation={"Sunnydale, CA"}
            />
        </div>
    )
}

function ExperienceEntry({jobTitle, jobDateStart, jobDateEnd, jobCompany, jobLocation}) {
    return (
        <div className="education-entry">
            <ExperienceEntrySubheading
                jobTitle={jobTitle}
                jobDateStart={jobDateStart}
                jobDateEnd={jobDateEnd}
            />
            <ExperienceEntrySubheadingItalics
                jobCompany={jobCompany}
                jobLocation={jobLocation}
            />
            <ExperienceEntryListItems />
        </div>
    )
}

function ExperienceEntrySubheading({jobTitle, jobDateStart, jobDateEnd}) {
    return (
        <div className="resume-block-row">
            <div className="subheading-left">{jobTitle}</div>
            <div className="subheading-right">
                <span className="job-date-start">{jobDateStart}</span> - <span className="degree-date-end">{jobDateEnd}</span>
            </div>
        </div>
    )
}

function ExperienceEntrySubheadingItalics({ jobCompany, jobLocation }) {
    return (
        <div className="resume-block-row">
            <div className="subheading-italics-left">{jobCompany}</div>
            <div className="subheading-italics-right">{jobLocation}</div>
        </div>
    )
}

function ExperienceEntryListItems() {
    return (
        <div className="resume-entry-list">
            Conducted comprehensive psychoeducational assessments to identify student learning and behavioral needs. Implemented evidence-based interventions and strategies to support students with diverse learning needs.
        </div>
    )
}

// Prop types
ResumeHeading.propTypes = {
    title: PropTypes.string
}

ResumeContact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
}

ResumeSummaryBlock.propTypes = {
    summary: PropTypes.string
}

EducationEntry.propTypes = {
    school: PropTypes.string,
    schoolDegree: PropTypes.string,
    schoolLocation: PropTypes.string,
    schoolDateStart: PropTypes.string,
    schoolDateEnd: PropTypes.string
}

EducationEntrySubheading.propTypes = {
    school: PropTypes.string,
    schoolLocation: PropTypes.string
}

EducationEntrySubheadingItalics.propTypes = {
    schoolDegree: PropTypes.string,
    schoolDateStart: PropTypes.string,
    schoolDateEnd: PropTypes.string
}

ExperienceEntry.propTypes = {
    jobTitle: PropTypes.string,
    jobDateStart: PropTypes.string,
    jobDateEnd: PropTypes.string,
    jobCompany: PropTypes.string,
    jobLocation: PropTypes.string,
}

ExperienceEntrySubheading.propTypes = {
    jobTitle: PropTypes.string,
    jobDateStart: PropTypes.string,
    jobDateEnd: PropTypes.string,
}

ExperienceEntrySubheadingItalics.propTypes = {
    jobCompany: PropTypes.string,
    jobLocation: PropTypes.string,
}

ResumeContent.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    email: PropTypes.string,
    location: PropTypes.string,
    summary: PropTypes.string,
    educationEntries: PropTypes.array,
}

ResumeEducationBlock.propTypes = {
    educationEntries: PropTypes.array,
}