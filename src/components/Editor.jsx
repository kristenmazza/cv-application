import PropTypes from 'prop-types';

export default function Editor(props) {
    return (
        <div className="editor-container">
            <Form {...props} />
        </div>
    )
}

function Form({name, setName, number, setNumber}) {
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </label>
                    <label htmlFor="input-number">
                        <div className="hidden">phone number</div>
                        <input
                            type="text"
                            id="input-number"
                            name="number"
                            placeholder="Phone Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}>
                        </input>
                    </label>
                    <label htmlFor="input-email">
                        <div className="hidden">email</div>
                        <input type="text" id="input-email" name="email" placeholder="Email" value=""></input>
                    </label>
                    <label htmlFor="input-location">
                        <div className="hidden">location</div>
                        <input type="text" id="input-location" name="location" placeholder="Location" value=""></input>
                    </label>
                    <label htmlFor="input-about">
                        <div className="hidden">about</div>
                        <textarea id="input-about" name="about" placeholder="About"></textarea>
                    </label>
                </div>
            </section>
        </form>
    )
}

// Prop types
Form.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.string,
    number: PropTypes.string,
    setNumber: PropTypes.string
}
