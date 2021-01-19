import React from 'react' 

export default class Avatar extends React.Component {
	constructor(props) {
		super(props)
	}
    render() {
	    return (
		
			<img style={{marginBottom : "1.5rem" }} className={this.props.avatar.avatarClass} 
				src={this.props.avatar.avatarUrl}
				height={this.props.avatar.avatarHeight}
				width={this.props.avatar.avatarWidth}
				alt={this.props.avatar.avatarAlt}
			/>
		)
	}
}

