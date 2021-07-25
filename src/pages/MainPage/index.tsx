import React, { useState, useEffect } from 'react';

import PostCardList from '../../components/PostCardList';
import PostInput from '../../components/PostInput';
import useFirestore from '../../hooks/useFirestore';
import { PostCardProps } from '../../components/PostCard';

type Post = {
  id?: string,
  contents: string,
  author: string,
};

function MainPage() {
  const { items: posts, add } = useFirestore<Post>({ key: 'posts' });

  const handleSubmit = (value: string) => {
    add({
      contents: value,
      author: '감자튀김',
    });
  };

  return (
    <div>
      <PostCardList posts={posts as Array<PostCardProps>} />
      <PostInput onSubmit={handleSubmit} />
    </div>
  );
}

MainPage.propTypes = {
};
MainPage.defaultProps = {
};

export default MainPage;