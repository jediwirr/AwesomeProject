import React, {FC} from 'react';
import {PostCard} from '@/widgets/post-card';
import {ListRenderItem} from 'react-native';
import {Post} from '@/entities/post';
import {StyledList} from './styles';

interface PostsListProps {
  posts: Post[];
  onSelectPost: (postId?: string) => void;
}

export const PostsList: FC<PostsListProps> = props => {
  const {posts, onSelectPost} = props;

  const renderItem: ListRenderItem<Post> = ({item}) => (
    <PostCard
      onPress={() => onSelectPost(item.id)}
      title={item.title}
      body={item.body}
    />
  );

  return <StyledList data={posts} renderItem={renderItem} />;
};
