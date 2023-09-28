import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'teal'
}

function Inline() {
  return (
    <div>
        <h1 className = 'error'>Error</h1>
        <h2 style = {heading}>Inline</h2>
    </div>
  )
}

export default Inline