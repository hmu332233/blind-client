import React from 'react';
import PostCard, { PostCardProps } from '../PostCard';

type PostCardListProps = {
  posts: Array<PostCardProps>,
};

function PostCardList({ posts }: PostCardListProps) {
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

PostCardList.defaultProps = {
};

export default PostCardList;