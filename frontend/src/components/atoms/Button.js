const Button = (props) => {
    return(
        <button
            className={`btn ${props.buttonClass ? `btn-${props.buttonClass}` : ''}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

const ButtonGroup = (props) => {
    return(
        <div className={`btn-group ${props.buttonClass ? props.buttonClass : ''}`}>
            {props.children}
        </div>
    )
};

export default Button;
export {
    ButtonGroup
}
