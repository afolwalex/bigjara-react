import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Message from '../components/Message'

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [variant, setVariant] = useState('')

    useEffect(() => {
        document.body.classList.add("signup-page")
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email !== '' && password !== ''){
            setVariant('success')
            setMessage('Check back later.')
        }else{
            setVariant('danger')
            setMessage('Please fill all fields.')
        }
    }

    return (
        <section className="reg-section">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 reg-area">
                                <div className="logo-header">
                                    <Link to="/">
                                        Big<span>j</span>ar<span>a</span>
                                    </Link>
                                </div>
                                <p className="text-center mb-3">Log In to your account</p> 
                                <form method="POST" onSubmit={handleSubmit}>
                                    <div className="form-r mb-3">
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
                                    <div className="form-r mb-3">
                                        <div className="form-holder">
                                            <fieldset>
                                                <legend>Password</legend>
                                                <input 
                                                    type="password" placeholder="Password" required 
                                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn--primary hvr-shine mb-3">Sign In</button>
                                        {message && <Message variant={variant}>{message}</Message>}
                                        <p className="mt-3">
                                            <Link to="/register">Register</Link> if you don't have an account.
                                        </p>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 d-none d-md-block">
                                <img src="/images/f-img1.png" alt="Reg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage