import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import CreatePost from './CreatePost.js'

const GET_POSTS = gql`
{
  posts {
    author
    id
    title
    body
    createdAt
  }
}`

function Posts() {
    const { loading, error, data } = useQuery(GET_POSTS, {
        pollInterval: 1000,
    })

    if (loading) return 'Loading...'
    if (error) return `Error ${error.message}`

    return (
        <div className="lg:w-4/5 flex flex-wrap-reverse" style={{overflowWrap: 'break-word'}}>
            {data.posts.map(post => (
                <div class="lg:w-1/1 w-full p-4 border-2 border-black" key={post.id}>
                    <h3 className="font-bold text-xl text-white">{post.author} | {post.title} | {post.id}</h3>
                    <p className="text-white">{post.body}</p>
                </div>
            ))}
          <CreatePost/>
        </div>
    )
}

export default Posts