const posts = () => {
  return [
    {
      id: '3123',
      title: 'Post 1',
    },
    {
      id: '3166',
      title: 'Post 2',
    },
    {
      id: '3190',
      title: 'Post 3',
    },
  ];
};

const post = () => {
  return {
    id: '3123',
    title: 'Post 1',
  };
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
