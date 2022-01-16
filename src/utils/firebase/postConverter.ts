const postConverter = {
  toFirestore: (post: Post) => {
    return { ...post };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    const post: Post = {
      id: data.id,
      contents: data.contents,
      creatorId: data.creatorId,
      creatorName: data.creatorName,
      createdAt: data.createdAt,
    };
    return post;
  }
};

export default postConverter;