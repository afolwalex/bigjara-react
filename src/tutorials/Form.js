import React from 'react'

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) { 
	    if (event.target.id == "username") {
		    this.setState({
			    username : event.target.value 
		    })
		}
    }
    
    render(){
        return(
            <>
                <div className="container mt-5">
                   <div className="row">
                       <div className="col-md-6">
                           <input type="text" 
                            className="form-control mb-3" 
                            placeholder="Username" 
                            id="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                           />
                           <input type="text" className="form-control mb-3" placeholder="Name" />
                       </div>
                   </div>
                </div>
            </>
        )
    }
}

export default Form