import React from 'react';

export type PostCardProps = {
  id: string,
  contents: string,
  author: string,
};

function PostCard({
  id,
  contents,
  author,
}: PostCardProps) {
  return (
    <div className="card mt-5 first:mt-0" id={id}>
      <p>{contents}</p>
      <span className="text-sm font-bold mt-2">{author}</span>
    </div>
  );
}

PostCard.defaultProps = {
};

export default PostCard;