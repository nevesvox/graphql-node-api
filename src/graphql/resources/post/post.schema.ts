const postTypes = `
  # Post definition type
  type Post {
    id: ID!
    titile: String!
    content: String!
    photo: String!
    createdAt: String!
    updatedAt: String!
    author: User!
    comments: [ Comment! ]!
  }

  # Post input
  input PostInput {
    title: String!
    content: String!
    photo: String!
    author: String!
  }
`;

const postQueries = `
  posts(first: Int, offset: Int): [ Posts! ]!
  post(id: ID!): Post
`;

const postMutations = `
  createPost(input: PostInput!): Post
  updatePost(id: ID!, input: PostInput!): Post
  deletePost(id: ID!): Boolean
`;

export {
  postTypes,
  postQueries,
  postMutations
}