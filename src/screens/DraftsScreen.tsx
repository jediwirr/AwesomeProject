import React from 'react';
import {PostsList} from '@/widgets/posts-list';
import {usePostStore} from '@/entities/post';
import {useNavigation} from '@react-navigation/native';

const DraftsScreen = () => {
  const {drafts, updatePost} = usePostStore();
  const navigation = useNavigation();

  const onSelectPost = (postId?: string) => {
    updatePost({...drafts.find(draft => draft.id === postId)});
    navigation.navigate('EditPost');
  };

  return <PostsList posts={drafts} onSelectPost={onSelectPost} />;
};

export default DraftsScreen;
