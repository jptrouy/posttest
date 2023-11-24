class Mutations::DeletePost < Mutations::BaseMutation
    argument :id, ID, required: true

    field :post, Types::PostType, null: false
    field :errors, [String], null: false

    def resolve(id:)
        post = Post.find(id)
        if post.destroy
            {
                post: post,
                errors: []
            }
        else
            {
                post: nil,
                errors: post.errors.full_messages
            }
        end
    end
end