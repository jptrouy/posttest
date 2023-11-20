import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!, $author: String!) {
    createPost(input: { title: $title, body: $body, author: $author }) {
      post {
        id
        author
        title
        body
      }
      errors
    }
  }`

class CreatePost extends Component {
  state = {
    title: '',
    body: '',
    author: '',
  }

  onSubmit = (e, createPost) => {
    e.preventDefault()
    createPost({ variables: this.state })
    this.setState({ title: '', body: '', author: ''})
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_POST}
        update={this.props.onCreatePost}>
          {createPostMutation => (
            <div className="lg:fixed top-0 right-0 py-50 bg-white border-t border-gray-300 bg-zinc-700">
              <form className="lg:px-8 pt-2 pb-2 space-y-2" onSubmit={e => this.onSubmit(e, createPostMutation)}>
                <div className="lg:flex flex-wrap flex-between items-center justify-center lg:p-0 p-6">
                   <h4 className="font-bold lg:pr-4 text-white">Create new post</h4>
                   <div className="lg:pr-4">
                     <input 
                       className="border border-black rounded w-full py-2 px-3 bg-zinc-700 text-white"
                       type="text"
                       value={this.state.title}
                       placeholder="Title"
                       onChange={e => this.setState({ title: e.target.value })} />
                   </div>
                   <div className="lg:pr-4">
                     <input 
                       className="border border-black rounded w-full py-2 px-3 bg-zinc-700 text-white"
                       type="text"
                       value={this.state.author}
                       placeholder="Name"
                       onChange={e => this.setState({ author: e.target.value })} />
                   </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
                     Submit Post
                  </button>
                </div>
                <div class="lg:pr-4">
                <textarea cols="60" rows="15" className="border-2 border-black rounded w-full py-1 px-3 bg-zinc-700 text-white"
                       type="text"
                       value={this.state.body}
                       placeholder="Post"
                       onChange={e => this.setState({ body: e.target.value })}/>
                  </div>
              </form>
            </div>

          )}
       </Mutation>
    )
  }
}

export default CreatePost