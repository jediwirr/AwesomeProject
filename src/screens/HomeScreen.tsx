import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {UseQueryResult, useQuery} from '@tanstack/react-query';
import {Post} from '@/entities/post';
import {fetchPosts} from '@/shared/api';
import {PostsList} from '@/widgets/posts-list';

const HomeScreen = () => {
  const {data: posts, isLoading}: UseQueryResult<Post[], Error> = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    retry: 4,
  });

  const navigation = useNavigation();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Fetching posts...</Text>
      </View>
    );
  }

  if (!posts) {
    return null;
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Button
        title="Create Post"
        onPress={() => navigation.navigate('EditPost')}
      />
      <Button title="Drafts" onPress={() => navigation.navigate('Drafts')} />

      <PostsList
        posts={posts}
        onSelectPost={postId => navigation.navigate('PostDetails', {postId})}
      />
    </View>
  );
};

export default HomeScreen;
