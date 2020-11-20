const Breadcrumbs = (props) => {
    const topLevel = props.topLevel.replace('-', ' ');
    const category = props.category.replace('-', ' ');

    return(
        <div className="breadcrumbs">
            <a href="/">Home</a>
            <a href="/toplevel">{topLevel}</a>
            {props.category && <span>{category}</span>}
        </div>
    )
};

export default Breadcrumbs;
