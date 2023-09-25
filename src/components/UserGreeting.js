import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {

    //SHORT CIRCUIT OPERATOR APPROACH
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>


    //TENARY CONDITIONAL OPERATOR

    // return(
    //     this.state.isLoggedIn ? <div>Welcome Femi</div> : <div>Welcome Guest</div>
    // )


    //ELEMENT VARIABLE APPROACH

    // let message
    // if (this.state.isLoggedIn){
    //     return(
    //         message = <div>Welcome Femi</div>
    //     )
    // } else {
    //     return(
    //         message = <div>Welcome Guest</div>
    //     )
    // }
    // return <div>{message}</div>
    

    // IF ELSE APPROACH

    // if (this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Welcome Femi
    //         </div>
    //     )
    // } else {
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Femi</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting