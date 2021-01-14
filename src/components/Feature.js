
const Features = () => {

    const featureList = [
        {
            icon: 'circle-bg-1', 
            header: 'Easy to Start', 
            content: 'We make it very easy to kickstart a career in software engineering, and its related discipline for everyone. We design our program with beginners in mind, and the overall goal is to help you become an intermediate developer of global standard.'
        },
        {
            icon: 'circle-bg-2', 
            header: 'Project Focused', 
            content: 'Learn by solving real-world problems. Bigjara is the home to smart engineers across different fields united by code. Our engineers solve societal problems from finance to education. You will benefit from this project focused culture.'
        },
        {
            icon: 'circle-bg-3', 
            header: '24/7 Support', 
            content: 'We stand for each other especially when bug attack your codebase. Reach out to management and instructors to get the help you need whether with your coding question or in any, area within bigjara capabilities.'
        }
    ]

    return (
        <div className="feature-section">
            <div className="container">
                <div className="section-title">
                    <h2 className="title h3">Why Bigjara?</h2>
                    
                </div>
                <div className="row justify-content-center">
                    {featureList.map((feature, index) => (
                        <div className="col-sm-9 col-md-6 col-lg-4" key={index}>
                            <div className="widget01 feature--widget">
                                <div className="widget__icon">
                                    <span className={`inner-circle ${feature.icon}`}></span>
                                    <span className={`outer-circle ${feature.icon}`}></span>
                                </div>
                                <div className="widget__body divider--right">
                                    <h3 className="widget__heading h6">{feature.header}</h3>
                                    <p>{feature.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features