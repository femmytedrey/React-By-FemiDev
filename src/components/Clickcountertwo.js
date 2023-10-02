// import React, { Component } from 'react'

// class Clickcountertwo extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          clickCount: 0,
//          hoverCount: 0
//       }
//     }

//     counthandler = (counterType, incrementNumber) => {
//         if(counterType === 'click'){
//             this.setState((prevState) => ({
//                 clickCount: prevState.clickCount + incrementNumber
//             }))
//         }else if (counterType === 'hover'){
//             this.setState((prevState) => ({
//                 hoverCount: prevState.hoverCount + incrementNumber
//             }))
//         }      
//     }
//   render() {
//     const {clickCount, hoverCount} = this.state
//     return (
//         <>
//             <button onClick = {() => this.counthandler('click', 1)}>Click {clickCount} times</button>
//             <h1 onMouseOver={() => this.counthandler('hover', 2)}>Hovered {hoverCount} times</h1>
//         </>
//     )
//   }
// }

// export default Clickcountertwo

import React, { Component } from 'react'

class Clickcountertwo extends Component {
  render() {
    const {count, incrementCount} = this.props
    return (
        <button className = "clickButton" onClick ={incrementCount}>clicked {count} times</button>
    )
  }
}

export default Clickcountertwo