import React from 'react'

function Person(prop) {
  return (
    <div>
        <h2>I am {prop.person.name}. I am {prop.person.age}. I know {prop.person.skill}.</h2>
    </div>
  )
}

export default Person