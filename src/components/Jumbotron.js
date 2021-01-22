
const Jumbotron = () => {
    return (
        <section className="hero-area" style={{background: `url('/images/bg2.jpg')`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                        <div className="hero-content">
                            <h1 className="title h2">Learn and Grow with Bigjara</h1>
                            <p>Learn Software development, Ethical Hacking, Blockchain, ML and IOT; then grow using those skills with Bigjara.</p>
                            <div className="hero-btn">
                                <a href="/register" className="btn btn--primary hvr-shine">Get Started</a>
                                <span className="text--info">No credit card required</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jumbotron