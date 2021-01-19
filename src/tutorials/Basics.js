import React from 'react'
import Avatar from './Avatar'
import img2 from '../assets/img2.jpeg'

const img = {
    avatarUrl: '/img1.jpg',
    avatarAlt: 'Image',
    avatarHeight: '100px',
    avatarWidth: '100px'
}

const secondImg = {
    avatarUrl: img2,
    avatarAlt: 'Iamf'
}

class BasicComponent extends React.Component{
    
    render(){
        return(
            <p>This is a class based component.</p>
        )
    }
}

const Basics = () => {

    const boxes = ["I am Happy", "I am Happy", "I am Happy", "I am Happy", "I am Happy", "I am Happy"]
    return (
        <div className="container">
            <h1 className="text-center">Quick Bootstrap intro</h1>
            <div className="row">
                {boxes.map((b, i) => (
                    <div className="col-sm-4 col-6 mb-5">
                        <div className="box">
                            {b}
                        </div>
                    </div>
                ))}
            </div>
            <BasicComponent />
            <Avatar avatar={img} />
            <Avatar avatar={secondImg} />
        </div>      
    )
}

export default Basics