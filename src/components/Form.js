import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: ''
      }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }

  render() {
    return (
        <form>
            <div>
                <label id = "username">Username</label>
                <input type = "text" id = "username" name = "username" value = {this.state.username} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type = "password" />
            </div>

            <div>
                <label id = 'comment'>Comment</label>
                <textarea value = {this.state.value} onChange={this.state.handleCommentChange} />
            </div>
        </form>
    )
  }
}

export default Form