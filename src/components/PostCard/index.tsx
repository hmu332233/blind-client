import React from 'react';

type Props = {
  post: Post
};

function PostCard({
  post,
}: Props) {
  const { id, contents, creatorName } = post;
  return (
    <div className="card mt-5 first:mt-0" id={id}>
      <p>{contents}</p>
      <span className="text-sm font-bold mt-2">{creatorName}</span>
    </div>
  );
}

PostCard.defaultProps = {
};

export default PostCard;