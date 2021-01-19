import React, {useState, useEffect} from 'react'
import courses from '../courses'
import {Link} from 'react-router-dom'
import { 
    Collapse, 
    CardBody, 
    Card, 
    CardHeader
} from 'reactstrap'


const Curriculum = ({match}) => {

    const course = courses.find(c => c.name === match.params.courseName)
    const [toggleContent, setToggleContent] = useState(1)

    const others = courses.filter(c => c.name !== match.params.courseName)

    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, [])

    return (
        <>
            <div className="logo-header">
                <Link to="/">
                    Big<span>j</span>ar<span>a</span>
                </Link>
            </div>
            
            <section className="curriculum">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="row course-box card-row">
                                <div className="col-md-3 summary mb-4">
                                    <h5>{course.name}</h5>
                                    <hr />
                                    <p>
                                        <b>Duration:</b>
                                        <span className="ml-2">{course.duration}</span>
                                    </p>
                                    <p>
                                        <b>Cost:</b>
                                        <span className="ml-2">&#8358; {course.price.toLocaleString()}</span>
                                    </p>
                                    <hr />
                                    <p>
                                        {course.details}
                                    </p>
                                    <hr />
                                    <div className="text-center">
                                        <a href="/" className="btn btn--primary hvr-shine">Register</a>
                                    </div>
                                </div>
                                <div className="col-md-6 details mb-4">
                                    <h5 className="text-center">Curriculum</h5>
                                    {course.curriculum.map((cur, i) => (
                                        <Card key={i}>
                                            <CardHeader onClick={() => setToggleContent(i + 1)} className="faq-head">
                                                <span className="font-weight-bold float-left">
                                                    {cur.section}
                                                </span>
                                                <span className="font-weight-bold float-right">
                                                    <i className="fa fa-angle-right"></i>
                                                </span>
                                                <span className="clearfix"></span>
                                            </CardHeader>
                                            <Collapse isOpen={toggleContent === i + 1 ? true : false}>
                                                <CardBody>
                                                    <ul className="faq-list">
                                                        {cur.details.map((d, i) => (
                                                            <li key={i}>
                                                                {d}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardBody>
                                            </Collapse>
                                        </Card>
                                    ))}
                                </div>
                                <div className="col-md-3 courses mb-4">
                                    <h5>Other Courses</h5>
                                    <hr />
                                    {others.map((o, i) => (
                                        <>
                                            <p key={i}>
                                                <i className="fa fa-certificate mr-1"></i>
                                                <Link to={`/course/${o.name}`}>{o.name}</Link>
                                            </p>
                                            <hr />
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </>
    )
}

export default Curriculum