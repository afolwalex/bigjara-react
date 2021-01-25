import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NaijaStates from 'naija-state-local-government'
import courses from '../courses'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'

const RegisterPage = ({history}) => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [residence, setResidence] = useState('Abia')
    const [lga, setLga] = useState('')
    const [course, setCourse] = useState('')
    const [type, setType] = useState('')
    const [message, setMessage] = useState('')
    const [variant, setVariant] = useState('danger')

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userReg, success } = userRegister

    useEffect(() => {
        document.body.classList.add("signup-page")
        if(success){
            history.push(`/verification?id=${userReg._id}`)
        }
    }, [success, userReg, history])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name !== '' && username !== '' && mobile !== '' && residence !== '' && lga !== ''
        && course !== '' && type !== ''){
            dispatch(register(name, email, mobile, mobile, username, course, type, residence, lga))
            setVariant('success')
            setMessage('Please wait....')
                
        }else{
            setVariant('danger')
            setMessage('Please fill all fields.')
        }
    }

    return (
        <section className="reg-section">
            <div className="container">
                <div className="card card-area">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="logo-header">
                                    <Link to="/">
                                        Big<span>j</span>ar<span>a</span>
                                    </Link>
                                </div>
                                <p className="text-center mb-3">Register for free to get started</p>
                                <form method="POST" onSubmit={handleSubmit}>
                                    <div className="row"> 
                                    <div className="col-md-6 mb-3">
                                        <div className="form-r">
                                            <div className="form-holder">
                                                <fieldset>
                                                    <legend>Name</legend>
                                                    <input 
                                                        type="text" placeholder="Your Full Name" required 
                                                        value={name} onChange={(e) => setName(e.target.value)} 
                                                    />
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-r">
                                            <div className="form-holder">
                                                <fieldset>
                                                    <legend>Username</legend>
                                                    <input 
                                                        type="text" placeholder="Username" required 
                                                        value={username} onChange={(e) => setUsername(e.target.value)}
                                                    />
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-r">
                                            <div className="form-holder">
                                                <fieldset>
                                                    <legend>Email</legend>
                                                    <input 
                                                        type="email" placeholder="Email Address" required 
                                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-r">
                                            <div className="form-holder">
                                                <fieldset>
                                                    <legend>Mobile</legend>
                                                    <input 
                                                        type="text" placeholder="Mobile Number" required 
                                                        value={mobile} onChange={(e) => setMobile(e.target.value)}
                                                    />
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <p className="font-italic">Your phone number will be your default password</p>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-r">
                                                <div className="form-holder">
                                                    <label className="special-label">Residence:</label>
                                                    <select value={residence} onChange={(e) => setResidence(e.target.value)}>
                                                        <option value="" disabled>Select Residence</option>
                                                        {NaijaStates.states().map((s, i) => (
                                                            <option key={i} value={s}>{s}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-r">
                                                <div className="form-holder">
                                                    <label className="special-label">LGA:</label>
                                                    <select value={lga} onChange={(e) => setLga(e.target.value)}>
                                                        <option value="" disabled>Select</option>
                                                        {NaijaStates.lgas(residence).lgas.map((l, i) => (
                                                            <option key={i}>{l}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-r">
                                                <div className="form-holder">
                                                    <label className="special-label">Course:</label>
                                                    <select value={course} onChange={(e) => setCourse(e.target.value)}>
                                                        <option value="" disabled>Select one</option>
                                                        {courses.map((course, index) => (
                                                            <option key={index} value={course.name}>
                                                                {course.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-r">
                                                <div className="form-holder">
                                                    <label className="special-label">Course Location:</label>
                                                    <select value={type} onChange={(e) => setType(e.target.value)}>
                                                        <option value="" disabled>Select one</option>
                                                        <option value="Hire a Tutor">Hire a Tutor</option>
                                                        <option value="Online">Online</option>
                                                        <option value="On-Site">On-Site</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <button type="submit" className="btn btn--primary hvr-shine mb-3">Sign Up</button>
                                    {message && <Message variant={variant}>{message}</Message>}
                                    {error && <Message variant='danger'>{error}</Message>}
                                    {loading && <Loader />}
                                    <p className="mt-3">
                                        Once you click on Sign Up, you give us the right to contact you with community and
                                        marketing information. You can always unsubscribe.
                                    </p>    
                                </div>
                                </form>
                            </div>
                        
                            <div className="col-lg-4 boxt d-none d-lg-block">
                                <div className="middle">
                                    <img src="/images/chart.png" alt="Reg" className="img-fluid rounded-circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage