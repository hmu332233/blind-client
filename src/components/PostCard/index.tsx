import React from 'react';

type PostCardProps = {
  contents?: string,
  author?: string,
};

function PostCard({
  contents,
  author,
}: PostCardProps) {
  return (
    <div className="card mt-5 first:mt-0">
      <p>{contents}</p>
      <span className="text-sm font-bold mt-2">{author}</span>
    </div>
  );
}

PostCard.defaultProps = {
};

export default PostCard;