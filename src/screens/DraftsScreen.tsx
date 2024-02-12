import React from 'react';
import {PostsList} from '@/widgets/posts-list';
import {usePostStore} from '@/entities/post';

const DraftsScreen = () => {
  const {drafts} = usePostStore();

  return <PostsList posts={drafts} onSelectPost={() => {}} />;
};

export default DraftsScreen;
