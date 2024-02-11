import React from 'react';
import {Button, Text} from 'tamagui';
import {Input} from '@/shared/ui/input';
import {FormContainer} from './styles';
import {usePostStore} from '@/entities/post';

export const PostForm = () => {
  const {post} = usePostStore();

  return (
    <FormContainer>
      <Text>Edit Post</Text>
      <Input label="Title" value={post.title} onChangeText={() => {}} />
      <Input label="Body" value={post.body} onChangeText={() => {}} />
      <Button backgroundColor="#317BA8" width="100%">
        <Text color="white">Submit</Text>
      </Button>
    </FormContainer>
  );
};
