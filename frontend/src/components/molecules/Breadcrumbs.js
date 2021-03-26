const Breadcrumbs = (props) => {
    return(
        <div className="breadcrumbs">
            <a href="/">Home</a>
            {props.topLevel && <a href="/toplevel">{props.topLevel.replace('-', ' ')}</a>}
            {props.category && <span>{props.category.replace('-', ' ')}</span>}
        </div>
    )
};

export default Breadcrumbs;
