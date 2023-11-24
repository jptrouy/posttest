import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import CreatePost from './CreatePost.js'
import DeletePost from './DeletePost.js'
import UpdatePost from './UpdatePost.js'

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
        <div className="absolute left-0 lg:w-2/3 flex flex-wrap-reverse" style={{overflowWrap: 'break-word'}}>
            {data.posts.map(post => (
                <div class="lg:w-1/1 w-full p-4 border-2 border-black" key={post.id}>
                    <div class="relative inline-block text-left">
                      <div className="flex items-start">
                        <UpdatePost post={post}/>
                        <DeletePost id={post.id}/>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl text-white">{post.author} | {post.title} | {post.id}</h3>
                    <p className="text-white">{post.body}</p>                    
                </div>
            ))}
          <CreatePost/>
        </div>
    )
}

export default Posts