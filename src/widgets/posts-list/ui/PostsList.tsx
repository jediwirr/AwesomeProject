import React from 'react';
import {PostCard} from '@/widgets/post-card';
import {ListRenderItem, Text, View} from 'react-native';
import {UseQueryResult, useQuery} from '@tanstack/react-query';
import {Post} from '@/entities/post';
import {StyledList} from './styles';
import {fetchPosts} from '@/shared/api';
import {useNavigation} from '@react-navigation/native';

export const PostsList = () => {
  const {data, status}: UseQueryResult<Post[], Error> = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    retry: 4,
  });

  const navigation = useNavigation();

  if (status === 'pending') {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Fetching posts...</Text>
      </View>
    );
  }

  if (!data) {
    return null;
  }

  const renderItem: ListRenderItem<Post> = ({item}) => (
    <PostCard
      onPress={() => navigation.navigate('PostDetails', {postId: item.id})}
      title={item.title}
      body={item.body}
    />
  );

  return <StyledList data={data} renderItem={renderItem} />;
};
