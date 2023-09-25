import React, {Component} from "react"

class Message extends Component {
    constructor(){
        super()
        this.state = {
            Message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            Message: 'Thank you for subscribing'
        })
    }

    // changeMessage(){
    //     const newMessage =
    //   this.state.Message === 'Welcome Visitor'
    //     ? 'Thank you for subscribing'
    //     : 'Welcome Visitor';

    //     this.setState({
    //     Message: newMessage,
    //     });
    // }
    

    

    render() {
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message