// QUERIES
const post = async (_, { id }, { dataSources }) => {
  const post = dataSources.postApi.getPost(id);
  return post;
};

const posts = async (_, { input }, { dataSources }) => {
  const posts = dataSources.postApi.getPosts(input);
  return posts;
};

// MUTATIONS
const createPost = async (_, args, { dataSources }) => {
  console.log('ARGS', args);
  return {
    id: '860',
    title: 'Et voluptatem nulla omnis et iusto ullam.',
    body: 'Ad non pariatur..',
    userId: '29',
    indexRef: 10,
    createdAt: '2018-08-10T23:41:51.714Z',
  };
};

// FIELD RESOLVERS
const user = async ({ userId }, _, { dataSources }) => {
  return dataSources.userApi.batchLoadById(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Mutation: { createPost },
  Post: { user },
};
