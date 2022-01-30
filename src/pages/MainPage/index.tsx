import React, { useState, useContext, useRef } from 'react';

import PostCardList from '../../components/PostCardList';
import PostInput from '../../components/PostInput';

import { AuthActionContext } from '../../contexts/AuthContext';

import { addDoc, getDocs, query, orderBy, limit, startAfter, QueryDocumentSnapshot } from "firebase/firestore";

import { auth, postsRef } from '../../utils/firebase/firebase';
import LoadingBox from '../../components/LoadingBox';


function MainPage() {
  const { signout } = useContext(AuthActionContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const lastPostSnapshot = useRef<QueryDocumentSnapshot>();
  const [isLast, setIsLast] = useState(false);

  const handleSubmit = async (value: string) => {
    if (!auth.currentUser) {
      return;
    }

    const post: Post = {
      id: `p_${Date.now()}`,
      contents: value,
      creatorId: auth.currentUser.uid,
      creatorName: auth.currentUser.displayName || '-',
      createdAt: Date.now(),
    };

    await addDoc(postsRef, post);
    setPosts(originPosts => [post, ...originPosts]);
  };

  const getPosts = async () => {
    const q = lastPostSnapshot.current ? query(postsRef, orderBy('createdAt', 'desc'), startAfter(lastPostSnapshot.current), limit(10)) : query(postsRef, orderBy('createdAt', 'desc'), limit(10));
    const snapshot = await getDocs(q);
    const posts: Post[] = snapshot.docs.map(doc => doc.data());
    setPosts(originPosts => [...originPosts, ...posts]);
    setIsLast(snapshot.docs.length === 0);

    lastPostSnapshot.current = snapshot.docs[snapshot.docs.length - 1];
  }

  const handleBottom = () => {
    getPosts();
  };

  return (
    <div>
      <button onClick={signout}>로그아웃</button>
      <LoadingBox className="mb-16" onBottom={handleBottom} hideLoading={isLast}>
        <PostCardList posts={posts} />
      </LoadingBox>
      <PostInput onSubmit={handleSubmit} />
    </div>
  );
}


export default MainPage;