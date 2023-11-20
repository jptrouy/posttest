module Types
  class QueryType < Types::BaseObject
    field :posts, [Types::PostType], null: false

    def posts
      Post.all
    end

    field :post, Types::PostType, null: false do
      argument :id, Integer, required: true
    end

    def post(id:)
      Post.find(id)
    end
  end
end
