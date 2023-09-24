import React from "react";

const Hello = () => {
    return React.createElement(
        'div', 
        {id: 'testing', className: 'testing'}, 
        React.createElement('h1', null, 'Hello Femi'))
}

export default Hello;