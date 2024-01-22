import React from 'react'
import { Link, useParams } from 'react-router-dom'

const posts=[
    {
        id:1,
        title:"title one",
        body:" body one"
    },
    {
        id:2,
        title:"title two",
        body:" body two"

    },
    {
        id:3,
        title:"title three",
        body:" body three"
    }
]

function Post() {
    const {id}= useParams();
const post = posts.find ((p)=> p.id === Number(id));

  return (
    <div>
        <h1>singel post</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to="/posts" > go to posts list</Link>

    </div>
  )
}

export default Post