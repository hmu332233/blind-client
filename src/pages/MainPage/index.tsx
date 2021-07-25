import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import PostCard from '../../components/PostCard';
import PostCardList from '../../components/PostCardList';
import PostInput from '../../components/PostInput';

import { db } from '../../utils/firebase';

type MainPageProps = {
  // children?: React.ReactNode,
};

function MainPage(props: MainPageProps) {
  const [posts, setPosts] = useState<Array<any>>([]);
  const handleSubmit = (value: string) => {
    db.collection('posts')
      .add({
        id: Date.now(),
        contents: value,
        author: '감자튀김',
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  useEffect(() => {
    db.collection('posts').orderBy('id')
      .onSnapshot((querySnapshot) => {
        const items: Array<any> = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setPosts(items);
    });
  }, []);
  return (
    <div>
      <PostCardList posts={posts} />
      <PostInput onSubmit={handleSubmit} />
    </div>
  );
}

MainPage.propTypes = {
};
MainPage.defaultProps = {
};

export default MainPage;