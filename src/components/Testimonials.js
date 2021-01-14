
const Testimonials = () => {

    const testimonies = [
        {name: 'Kingsley', title: 'Front End developer', message: 'I was living in Benue when I stumbled over an advert from the parent company. Today, I am inspired to build solutions and to problems and I am currently working on projects with economic benefits.', image: '/images/testimonial1.png'},
        {name: 'Blessing', title: 'Digital Marketer', message: 'Bigjara makes problem solving interesting and exciting. I used to be scared of problems but with Bigjara, I now live a problem solving life.', image: '/images/testimonial2.png'},
        {name: 'Okoye', title: 'Fullstack developer', message: `The program was challenging at first but I resolved to push forward. I am glad I made the move. Bigjara's curriculum is market and people focused.`, image: '/images/testimonial3.png'},
    ]

    return (
        <div class="pb--60 pb-md--70">
            <div class="container">
                <div class="section-title">
                    <h2 class="title h3">What our students are saying</h2>
                    <p>Some selected testimonies</p>
                </div>
                <div class="card-group berlin-card-group">
                    {testimonies.map((t, i) => (
                        <div class="card testimonial-card-1" key={i}>
                            <div class="card-body">
                                <span class="quote-icon">”</span>
                                <p class="card-text">“{t.message}”</p>
                            </div>
                            <div class="card-footer">
                                <div class="client-card">
                                    <div class="image">
                                        <img src={t.image} alt={t.name} />
                                    </div>
                                    <div class="content">
                                        <h5 class="title">{t.name}</h5>
                                        <span>{t.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials