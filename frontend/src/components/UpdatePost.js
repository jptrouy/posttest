import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(input: { id: $id title: $title, body: $body }) {
      post {
        id
        author
        title
        body
      }
      errors
    }
}`

class UpdatePost extends Component {
    state = {
        title: this.props.post.title,
        body: this.props.post.body,
        id: this.props.post.id,
        visible: false
      }
      
      onSubmit = (e, updatePost) => {
        e.preventDefault()
        updatePost({ variables: this.state })
        this.setState({ title: '', body: '' })
      }

      toggleDetails = () => {
        const newToggleState = !this.state.visible
        this.setState({ visible: newToggleState })
      }
    
      render() {
        const { visible } = this.state
        return (
          <div>
          <button onClick={this.toggleDetails} className="rounded-md bg-grey text-white px-3 py-2 text-sm ring-1 ring-inset ring-black hover:bg-black" id="edit-button">{visible ? 'Close Form' : 'Edit Post'}</button>    
          {visible && (
            <Mutation
            mutation={UPDATE_POST}
            update={this.props.onUpdatePost}>
              {updatePostMutation => (
                <div className="lg:fixed bottom-0 right-0 py-50 bg-white border-t border-gray-300 bg-zinc-700">
                  <form className="lg:px-8 pt-2 pb-2 space-y-2" onSubmit={e => this.onSubmit(e, updatePostMutation)}>
                    <div className="lg:flex flex-wrap flex-between items-center justify-center lg:p-0 p-6">
                       <h4 className="font-bold lg:pr-4 text-white">Edit post {this.props.post.id}</h4>
                       <div className="lg:pr-4">
                         <input 
                           className="border border-black rounded w-full py-2 px-3 bg-zinc-700 text-white"
                           type="text"
                           value={this.state.title}
                           placeholder="Title"
                           onChange={e => this.setState({ title: e.target.value })} />
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
            )} 
            </div>
        )
      }
}

export default UpdatePost