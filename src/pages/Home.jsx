import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Home() {
  const location= useLocation()
  // console.log(location.state);
  return (
    <div>
        <h1>Home page</h1>
        <Link to="/posts">See latest posts</Link>
    </div>
  )
}

export default Home