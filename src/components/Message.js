import React, {Component} from "react"

class Message extends Component {
    constructor(){
        super()
        this.state = {
            Message: 'Welcome to',
            Name: 'Femi'
        }
    }
    render() {
        return(
            <div>
                <h1>{this.state.Message} {this.state.Name}</h1>
            </div>
        ) 
    }
}

export default Message