import courses from '../courses'
import {Link} from 'react-router-dom'

const Course = ({match}) => {

    const course = courses.find(c => c.name === match.params.courseName)

    return (
        <section className="curriculum">
`           <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <p>{course.details}</p>
                        <Link to="/">Back to Home</Link>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Course