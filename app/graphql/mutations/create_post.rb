class Mutations::CreatePost < Mutations::BaseMutation
    argument :title, String, required: false
    argument :body, String, required: true
    argument :author, String, required: false

    field :post, Types::PostType, null: false
    field :errors, [String], null: false

    def resolve(title:, body:, author:)

        if author == nil
            author = "Nameless"
        end

        post = Post.new(title: title, body: body, author: author)
        if post.save
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