import React, {FC} from 'react';
import {PostCard} from '@/widgets/post-card';
import {FlatList, ListRenderItem} from 'react-native';
import {Post} from '@/entities/post';

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

  return <FlatList data={posts} renderItem={renderItem} />;
};
