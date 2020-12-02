const Breadcrumbs = (props) => {
    let topLevel = '';
    if (props.topLevel) {
        topLevel = props.topLevel.replace('-', ' ');
    }

    return(
        <div className="breadcrumbs">
            <a href="/">Home</a>
            {topLevel && <a href="/toplevel">{topLevel}</a>}
            {props.category && <span>{props.category.replace('-', ' ')}</span>}
        </div>
    )
};

export default Breadcrumbs;
