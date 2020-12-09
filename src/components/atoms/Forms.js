
const FormField = (props) => {
    return(
        <div className="form-field" {...props}>
            {props.children}
        </div>
    )
}

const InputField = (props) => {
    const handleFocus = (event) => {
        event.target.classList.add('input-field--labelled');
    };

    const handleChange = (event) => {
        if (event.target.value.length) {
            event.target.classList.add('input-field--labelled');
        } else {
            event.target.classList.remove('input-field--labelled');
        }
    }

    return(
        <div>
            <input
                className={`input-field ${props.className ? props.className : ''}`}
                id={props.id}
                name={props.id}
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                required={props.required}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleChange} />
            {props.label &&
                <label>{props.label}</label>
            }
        </div>
    )
}

export {
    FormField,
    InputField
}
