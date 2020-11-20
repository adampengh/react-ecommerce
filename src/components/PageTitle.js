
const PageTitle = (props) => {
    const category = props.title.replace('-', ' ');

    return(
        <section className="page-title">
            <h2 className="capitalize">{category}</h2>
        </section>
    )
};

export default PageTitle;
