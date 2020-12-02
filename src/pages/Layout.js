const Layout = () => {
    const style = 'col-1 col-sm-2 col-md-3 col-lg-4 col-xl-6';
    return (
        <main className="layout">
            <div className="container">
                <h1>Layout</h1>
            </div>

            <div className="container">
                .container
                <div className="row">
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                    <div className={style}>.col</div>
                </div>
            </div>

            <div className="container">
                .container
                <div className="row">
                    <div className={style}>
                        <img src="https://via.placeholder.com/800x1200" alt="" />
                    </div>
                    <div className={style}>
                        <img src="https://via.placeholder.com/800x1200" alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Layout;


