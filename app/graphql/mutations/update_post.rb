class Mutations::UpdatePost < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :title, String, required: false
    argument :body, String, required: false

    field :post, Types::PostType, null: false
    field :errors, [String], null: false

    def resolve(id:, title:, body:)
        post = Post.find(id)

        if title == nil
            title = post.title
        end

        if body == nil
            body = post.body
        end

        if post.update(title: title, body: body)
            {
                post: post,
                errors: []
            }
        else
            {
                post: post,
                errors: post.errors.full_messages
            }
        end
    end
end