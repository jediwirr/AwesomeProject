import React, {type FC} from 'react';
import {Text} from 'react-native';
import {PostCardContainer, PostTitle} from './styles';

interface PostCardProps {
  title: string;
  body: string;
  onPress?: () => void;
}

export const PostCard: FC<PostCardProps> = props => {
  const {title, body, onPress} = props;

  return (
    <PostCardContainer disabled={!onPress} onPress={onPress}>
      <PostTitle>{title}</PostTitle>
      <Text>{body}</Text>
    </PostCardContainer>
  );
};
