const Swatches = (props) => {
    const prefix = props.prefix || 'product-card';

    return(
        <div className={`${prefix}__swatches`}>
            <ul>
                {props.swatches && props.swatches.map((swatch, index) =>
                    <li className={`${index === 0 ? 'active' : ''}`} key={index}>
                        <span style={{ background: swatch }}></span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Swatches;
