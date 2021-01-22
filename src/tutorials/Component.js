import courses from '../courses'
import Basics from './Basics'
import Props from './Props'
import {Link} from 'react-router-dom'

const Component = () => {

    const products = [
        {
            image: '/images/p12.jpg',
            price: 100000,
            name: 'Iphone 6'
        },
        {
            image: '/images/p1.jpg',
            price: 300000,
            name: 'Iphone 11'
        },
        {
            image: '/images/p12.jpg',
            price: 500000,
            name: 'Iphone 12'
        },
    ]
    
    return (
        <>
            <div id="price-section" class="pricing-section section-padding-top mb--60 mb-md--80">
                <div class="pricing-section-bg">
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-9 col-xl-8 mb--35">
                            <div class="section-title">
                                <h2 class="title h3">Our Current Courses</h2>
                                <p>We are currently accepting registration to enroll in the courses below</p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="custom-tab-wrapper" id="pricing-tab-1">
                                <div class="row mb-d-30 justify-content-center card-row">
                                    {courses.map((course, index) => (
                                        <div class="col-xl-4 col-lg-5 col-md-6" key={index}>
                                            <div class="card card-p01 card-active">
                                                <div class="card-head">
                                                    <h6>{course.name}</h6>
                                                    <h2>
                                                        <span class="small-title">&#8358; {course.price.toLocaleString()}</span>
                                                        <span class="time-default">{course.duration}</span>
                                                        <span className="clearfix"></span>
                                                    </h2>
                                                    <p>
                                                        Our course content is designed to teach this and lots more:
                                                    </p>
                                                </div>
                                                <div class="card-content">
                                                    <div className="card-box">
                                                        <p>{course.details}</p>
                                                    </div>
                                                    <div class="card-btn">
                                                        <a href={`/course/${course.name}`} class="btn btn--primary hvr-shine">Read the Curriculum</a>
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
            {/* <Basics />
            <Link to="/event">Go to event</Link>
            <div className="container mb-5">
                <div className="row">
                    {products.map((p, i) => (
                        <div className="col-md-4" key={i}>
                            <Props product={p} />
                        </div>
                    ))}

                </div>
            </div> */}
        </>
    )
}

export default Component