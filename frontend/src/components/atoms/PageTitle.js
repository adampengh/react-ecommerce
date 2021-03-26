const PageTitle = (props) => {
    return(
        <section className="page-title">
            <h2 className="capitalize">{props.title.replace('-', ' ')}</h2>
        </section>
    )
};

export default PageTitle;
