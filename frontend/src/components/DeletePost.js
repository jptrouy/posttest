import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(input: { id: $id }) {
      post {
        id
      }
      errors
    }
  }`

function DeletePost ({id}) {
    const [deletePost] = useMutation(DELETE_POST, {
    variables: {id: id}
    })

    return (
        <button onClick={(deletePost)}
        className="rounded-md bg-grey text-white px-3 py-2 text-sm ring-1 ring-inset ring-black hover:bg-black">
            Delete Post
        </button>
    )
}

export default DeletePost