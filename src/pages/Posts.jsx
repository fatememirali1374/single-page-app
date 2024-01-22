import React from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  return (
    <div>
      <h1>Posts page</h1>
      <ul>
        <li>
          <Link to="1">post 1</Link>
        </li>
        <li>
          <Link to="2">post 2</Link>
        </li>
        <li>
          <Link to="3">post 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Posts