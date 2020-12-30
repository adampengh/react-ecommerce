const Container = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    );
}

const Row = (props) => {
    return(
        <div className="row">
            {props.children}
        </div>
    )
}

export {
    Container,
    Row
}
