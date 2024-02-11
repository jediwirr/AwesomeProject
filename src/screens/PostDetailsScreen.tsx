import React from 'react';
import {Text} from 'react-native';
import {useQueryClient} from '@tanstack/react-query';
import {PostCard} from '@/widgets/post-card';
import {Post} from '@/entities/post';
import {RouteProp} from '@react-navigation/native';

const PostDetailsScreen = ({
  route,
}: {
  route: RouteProp<{params: {postId: number}}>;
}) => {
  const {postId} = route.params;
  const queryClient = useQueryClient();
  const posts: Post[] | undefined = queryClient.getQueryData(['posts']);
  const post = posts?.find(item => item.id === postId);

  if (!post) {
    return <Text>No such post!</Text>;
  }

  return <PostCard title={post.title} body={post.body} />;
};

export default PostDetailsScreen;
