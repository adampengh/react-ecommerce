const Styleguide = () => {
    const style = 'col-1 col-sm-2 col-md-3 col-lg-4 col-xl-6';
    return (
        <main className="">
            <div className="container">
                <h1>Styleguide</h1>
            </div>

            <div className="container">
                <h2>Typography</h2>
                <div className="row">
                    <div className={style}>
                        <p className="serif-xxxl">.serif-xxxl</p>
                        <p className="serif-xxl">.serif-xxl</p>
                        <p className="serif-xl">.serif-xl</p>
                        <p className="serif-l">.serif-l</p>
                        <p className="serif-m">.serif-m</p>
                        <p className="serif-s">.serif-s</p>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Styleguide;


