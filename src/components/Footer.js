
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="section-padding-top footer-bg shape-holder">
            <div className="container">
                <div className="row justify-content-md-center justify-content-lg-left space-db--40">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb--40">
                        <h3 className="footer-title">About Bigjara</h3>
                        <ul className="footer-list">
                            <li><a href="/">Our values</a></li>
                            <li><a href="/">Our partners</a></li>
                            <li><a href="/">Become a partner</a></li>
                            <li><a href="/">Work at Bigjara</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb--40">
                        <div className="pl-lg--40">
                            <h3 className="footer-title">Core Focus</h3>
                            <ul className="footer-list">
                                <li><Link to="/">Front End Engineering</Link></li>
                                <li><Link to="/">Back End Engineering</Link></li>
                                <li><Link to="/">Mobile Computing</Link></li>
                                <li><Link to="/">UI/UX</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb--40">
                        <div className="pl-lg--80">
                            <h3 className="footer-title">Need Help?</h3>
                            <ul className="footer-list">
                                <li><Link to="/">FAQs</Link></li>
                                <li><Link to="/">Pricing Plan</Link></li>
                                <li><Link to="/">Refund Policy</Link></li>
                                <li><Link to="/">Hostel Allocation</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb--40">
                        <div className="pl-lg--25">
                            <h3 className="footer-title">Important Read</h3>
                            <ul className="footer-list">
                                <li><Link to="/">T&Cs</Link></li>
                                <li><Link to="/">Privacy and Policy</Link></li>
                                <li><Link to="/">Cookie Policy</Link></li>
                                <li><Link to="/">Code of Conduct</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright-area pt--60 pt-md--80 pb--40">
                    <div className="row align-items-center space-db--10">
                        <div className="col-lg-2 offset-lg-2 col-md-3 order-md-3 mb--10">
                            <ul className="footer-list social-list">
                                <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 offset-lg-1 col-md-5 col-sm-7 order-md-2 mb--10">
                            <ul className="footer-list list-inline">
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms & Conditions</a></li>
                                <li><a href="/">Site map</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-5 order-md-1  mb--10">
                            <p className="mb-0">© 2021 Bigjara. All rights reserved</p>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="footer-shapes">
                <div className="shape-1">
                    <img src="/images/footer-shape.svg" alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer