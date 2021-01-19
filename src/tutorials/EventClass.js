import React from 'react'


export default class EventClass extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            color: 'white',
            toggled: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    render(){
        return (
            <div className="container mt-3 mb-5">
                <h1 className="text-center">Class Component States</h1>
                <div className="text-center mt-3 mb-3">
                    <button className="btn btn-info" onClick={this.handleClick}>
                        Change Background
                    </button>
                </div>
                <div className={`box ${this.state.toggled ? '' : 'bg-dark'}`}>
                    <p>Background color is {this.state.toggled ? 'White' : 'Black'}!</p>
                </div>
            </div>
        )
    }
}