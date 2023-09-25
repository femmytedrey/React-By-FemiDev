import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Message: "Hello"
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
        
    //     this.setState({
    //         Message: 'Goodbye!'
    //     })
    //     console.log(this)

    // }

    clickHandler = () => {
        this.setState({
            Message: 'Goodbye!'
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
        {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
        <button onClick = {this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind