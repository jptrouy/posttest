module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String
    field :body, String
    field :author, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
