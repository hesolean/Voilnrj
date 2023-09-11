import React, { useState, useEffect } from 'react'

// exemple de requète POST avec une API

const Post = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('site internet')
            .then((response) => response. json())
            .then((data) => setPosts(data))
            .catch((err) => {
                console.log(err)
            })
    }, [])

  return (
    <div>
        <ul>
            {posts.map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    </div>
  )
}

export default Post