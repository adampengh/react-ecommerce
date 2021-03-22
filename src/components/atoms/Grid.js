const Container = (props) => {
    return(
        <div className="container" {...props}>
            {props.children}
        </div>
    );
}

const Row = (props) => {
    return(
        <div className="row" {...props}>
            {props.children}
        </div>
    )
}

export {
    Container,
    Row
}
