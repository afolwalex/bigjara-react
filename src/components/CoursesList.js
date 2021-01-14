import courses from '../courses'


const CoursesList = () => {
    
    return (
        <div id="price-section" className="pricing-section section-padding-top mb--60 mb-md--80">
            <div className="pricing-section-bg">
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-8 mb--35">
                        <div className="section-title">
                            <h2 className="title h3">Our Current Courses</h2>
                            <p>We are currently accepting registration to enroll in the courses below</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="custom-tab-wrapper" id="pricing-tab-1">
                            <div className="row mb-d-30 justify-content-center card-row">
                                {courses.map((course, index) => (
                                    <div className="col-xl-4 col-lg-5 col-md-6" key={index}>
                                        <div className="card card-p01 card-active">
                                            <div className="card-head">
                                                <h6>{course.name}</h6>
                                                <h2>
                                                    <span className="small-title">&#8358; {course.price.toLocaleString()}</span>
                                                    <span className="time-default">{course.duration}</span>
                                                    <span className="clearfix"></span>
                                                </h2>
                                                <p>
                                                    Our course content is designed to teach this and lots more:
                                                </p>
                                            </div>
                                            <div className="card-content">
                                                <div className="card-box">
                                                    <p>{course.details}</p>
                                                </div>
                                                <div className="card-btn">
                                                    <a href="/" className="btn btn--primary hvr-shine">Read the Curriculum</a>
                                                </div>
                                                <p>No credit card required</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesList