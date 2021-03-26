const Card = (props) => {
    const style = 'col-1 col-sm-3';

    return (
        <div className={style}>
            <picture>
                { props.mobileImg && <source media="(max-width:767px)" srcSet={props.mobileImg} /> }
                <source media="(min-width:768px)" srcSet={props.image} />
                <img src={props.image} alt={props.altText} />
            </picture>
        </div>
    );
}

export default Card;
