import React from 'react';
// import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import PostCard from '../../components/PostCard';
import PostInput from '../../components/PostInput';

type MainPageProps = {
  // children?: React.ReactNode,
};

function MainPage(props: MainPageProps) {
  return (
    <div>
      <PostInput />
      <PostCard contents="이것은 내용입니다." author="감자튀김" />
      <PostCard contents="이것은 내용입니다." author="감자튀김" />
      <PostCard contents="이것은 내용입니다." author="감자튀김" />
      <PostCard contents="이것은 내용입니다." author="감자튀김" />
    </div>
  );
}

MainPage.propTypes = {
};
MainPage.defaultProps = {
};

export default MainPage;