import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const Verification = ({history}) => {

    const userRegister = useSelector((state) => state.userRegister)
    const { userReg } = userRegister

    useEffect(() => {
        document.body.classList.add("signup-page")
        if(!userReg){
           history.push('/')
        }
    }, [history, userReg])

    return (
        <section className="reg-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card card-area">
                            {userReg && (
                                <div className="card-body">
                                    <h5>Hello, {userReg.name}</h5>
                                    <hr />
                                    <p>
                                        Welcome to Bigjara. Please check your Email ({userReg.email}) for a verification link. You will be contacted soon.
                                        Feel free to go through your chosen course curriculum. You can send a WhatsApp message to +2347032660676 if you have any questions.
                                    </p>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <Link to="/" className="btn btn--primary hvr-shine">Home</Link>
                                        <Link to="/sign-in" className="btn btn--primary hvr-shine">Login</Link>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Verification