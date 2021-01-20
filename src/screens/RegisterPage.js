import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const RegisterPage = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [residence, setResidence] = useState('')
    const [lga, setLga] = useState('')
    const [course, setCourse] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        document.body.classList.add("signup-page")
    })

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
                                                    <option value="MM" disabled>Select Residence</option>
                                                    <option value="Abia">16</option>
                                                    
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-r">
                                            <div className="form-holder">
                                                <label className="special-label">LGA:</label>
                                                <select value={lga} onChange={(e) => setLga(e.target.value)}>
                                                    <option value="MM" disabled>Select</option>
                                                    <option value="Abia">16</option>
                                                    
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
                                                    <option value="Abia">16</option>
                                                    
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-r">
                                            <div className="form-holder">
                                                <label className="special-label">Course Location:</label>
                                                <select value={type} onChange={(e) => setType(e.target.value)}>
                                                    <option value="MM" disabled>Select one</option>
                                                    <option value="Abia">16</option>
                                                    
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn--primary hvr-shine">Sign Up</button>
                                    <p className="mt-3">
                                        Once you click on Sign Up, you give us the right to contact you with community and
                                        marketing information. You can always unsubscribe.
                                    </p>
                                </div>
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