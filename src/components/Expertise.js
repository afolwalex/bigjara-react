
const Expertise = () => {

    const images = [
        {name: 'android', path: '/images/expertise/android.png'},
        {name: 'javascript', path: '/images/expertise/javascript.png'},
        {name: 'typescript', path: '/images/expertise/typescript.png'},
        {name: 'python', path: '/images/expertise/python.png'},
        {name: 'node', path: '/images/expertise/node-js.png'},
        {name: 'mongodb', path: '/images/expertise/mongodb.png'},
        {name: 'postgresql', path: '/images/expertise/postgresql.png'},
        {name: 'ethereum', path: '/images/expertise/ethereum.png'},
        {name: 'bitcoin', path: '/images/expertise/bitcoin.png'},
        {name: 'adobe-photoshop', path: '/images/expertise/adobe-photoshop.png'},
        {name: 'react', path: '/images/expertise/react.png'},
        {name: 'arduino', path: '/images/expertise/arduino.png'},
        {name: 'kotlin', path: '/images/expertise/kotlin.png'},
        {name: 'git', path: '/images/expertise/git.png'},
        {name: 'github', path: '/images/expertise/github.png'},
        {name: 'flutter', path: '/images/expertise/flutter.png'}
    ]
    return (
        <div className="video-bg" style={{background: `url('/images/bg2.jpg')`}}>
            <div className="container">
                <h5 className="text-white mb-3">Our Expertise</h5>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="video-content">
                            
                            <div className="row icons">
                                {images.map((img, i) => (
                                    <div className="col-3 mb-2" key={i}>
                                        <img src={img.path} alt={img.name} height="50px" />
                                    </div>
                                ))}
                                <div className="col-12">
                                    <p>and lots more...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="video-content">
                            <p>
                                The world is fast changing, modern technologies bring newer way to do things and live life. 
                                Traditional universities especially public owned universities in Nigeria, and other African countries alone 
                                cannot meet the requirements of emerging industries because of the absence of practice in their teaching curriculum.
                                Bigjara provides a suitable platform to learn any valuable skill, practice using those skills, and also make money using those skills. 
                                We offer what no organization offers - Convenience , Affordability , class to job mobility; all at an affordable rate driven by our 
                                ethical approach to pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise