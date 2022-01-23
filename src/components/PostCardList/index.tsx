import React, { useRef, useEffect } from 'react';
import PostCard from '../PostCard';

type Props = {
  posts: Array<Post>,
};

function PostCardList({ posts }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scroll({
        top: ref.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [posts]);

  return (
    <div className={'py-4 -my-4 -mx-2 px-2'} ref={ref}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

PostCardList.defaultProps = {
};

export default PostCardList;