import React from 'react'

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            name: '',
            password: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) { 
	    if (event.target.id == "username") {
		    this.setState({
			    username : event.target.value 
		    })
		}else if(event.target.id === "password"){
            this.setState({
                password: event.target.value
            })
        }
    }

    handleSubmit(){
        if(this.state.username != ''){
            this.setState({
                message: 'This is'
            })
        }
        
    }
    
    render(){
        return(
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box">
                                <input type="text" 
                                    className="form-control mb-3" 
                                    placeholder="Username" 
                                    id="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                <input type="text" className="form-control mb-3" placeholder="Name" />
                                <p>{this.state.message && <span>test</span>}</p>
                            </div>
                       </div>
                   </div>
                </div>
            </>
        )
    }
}

export default Form