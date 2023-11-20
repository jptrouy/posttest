5.times do
    post = Post.create(title: Faker::Lorem.sentence(word_count: 2), body: Faker::Lorem.paragraph(sentence_count: 10), author: Faker::Name.name)
end