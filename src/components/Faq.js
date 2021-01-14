import {useState} from 'react'
import { Collapse, CardBody, Card, CardHeader} from 'reactstrap'

const Faq = () => {

    const [toggleQuestion, setToggequestion] = useState(1)

    return (
        <div className="pb--60 pb-md--70 faq-section">
            <div className="container">
                <div className="section-title">
                    <h2 className="title h3">Frequently Asked Questions</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <Card>
                            <CardHeader onClick={() => setToggequestion(1)} className="faq-head">
                                <span className="font-weight-bold float-left">
                                    What will I gain at the end of the training?
                                </span>
                            </CardHeader>
                            <Collapse isOpen={toggleQuestion === 1 ? true : false}>
                                <CardBody>
                                    <p>
                                        At the end of your training, you will be equipped with employable digital skills. 
                                        You will have real life projects to show to hiring managers. You can also choose to work 
                                        with any of our growing list of customers in solving business needs or join our exciting engineering team.
                                    </p>
                                </CardBody>
                            </Collapse>
                        </Card>

                        <Card>
                            <CardHeader onClick={() => setToggequestion(2)} className="faq-head">
                                <span className="font-weight-bold">Which courses are currently available?</span>
                            </CardHeader>
                            <Collapse isOpen={toggleQuestion === 2 ? true : false}>
                                <CardBody>
                                    <p>
                                        We are currently accepting applications from students to the following courses:
                                    </p>
                                    <ul className="faq-list">
                                        <li>Front End Engineering</li>
                                        <li>Back End Engineering</li>
                                        <li>Fullstack Engineering</li>
                                        <li>Mobile App Development</li>
                                        <li>Blockchain Development</li>
                                        <li>Cybersecurity and Ethical Hacking</li>
                                        <li>Data Science and Machine Learning</li>
                                        <li>UI/UX</li>
                                        <li>Internet of Things</li>
                                        <li>Artificial Intelligence and Internet of Advice</li>
                                    </ul>
                                </CardBody>
                            </Collapse>
                        </Card>
                        <Card>
                            <CardHeader onClick={() => setToggequestion(3)} className="faq-head">
                                <span className="font-weight-bold">What is the mode of training with Bigjara?</span>
                            </CardHeader>
                            <Collapse isOpen={toggleQuestion === 3 ? true : false}>
                                <CardBody>
                                    <p>
                                        We offer a liberalized approach to learning, making it easy for knowledge to be shared and applied. 
                                        With this, we use the following mode in delivering our service, you will have to choose which one suits you. 
                                        You can easily migrate from one learning mode to the other:
                                    </p>
                                    <ul className="faq-list">
                                        <li>On-site Training: Suitable for those who are not comfortable with online classes.</li>
                                        <li>Home Classes: Suitable for Married individuals or any person who need full control during the classes. You can attend to your kids (assuming you are a parent), or to any other activity during the class.</li>
                                        <li>Online Training: Suitable for working individuals who are not free to attend our on-site training or individuals who do not like being found in crowds.</li>
                                    </ul>
                                </CardBody>
                            </Collapse>
                        </Card>
                        <Card>
                            <CardHeader onClick={() => setToggequestion(4)} className="faq-head">
                                <span className="font-weight-bold">After Registration, what next?</span>
                            </CardHeader>
                            <Collapse isOpen={toggleQuestion === 4 ? true : false}>
                                <CardBody>
                                    <p>
                                        After registration, you will have access to our classes free for two days. You should be able to make up your mind in joining our paid program after the two days trial.
                                    </p>
                                </CardBody>
                            </Collapse>
                        </Card>
                        <Card>
                            <CardHeader onClick={() => setToggequestion(5)} className="faq-head">
                                <span className="font-weight-bold">What happens after the free trial?</span>
                            </CardHeader>
                            <Collapse isOpen={toggleQuestion === 5 ? true : false}>
                                <CardBody>
                                    <p>
                                        We will need you to pay 50% of your training fee so as to continue with us. As a way of ensuring we provide maximum utility, you can always ask for 100% refund if our service during the paid training is below that provided during the free trial.
                                    </p>
                                </CardBody>
                            </Collapse>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq