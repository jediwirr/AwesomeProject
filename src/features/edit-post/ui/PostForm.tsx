import React, {useEffect} from 'react';
import {Button, Text} from 'tamagui';
import {Input} from '@/shared/ui/input';
import {FormContainer} from './styles';
import {usePostStore} from '@/entities/post';

export const PostForm = () => {
  const {post, drafts, updatePost} = usePostStore();

  useEffect(() => {
    console.log({post, drafts});
  }, [post, drafts]);

  const onTitleEdit = (title: string) => {
    updatePost({title});
  };

  const onBodyEdit = (body: string) => {
    updatePost({body});
  };

  const onSubmit = () => {};

  return (
    <FormContainer>
      <Text>Edit Post</Text>
      <Input label="Title" value={post.title} onChangeText={onTitleEdit} />
      <Input label="Body" value={post.body} onChangeText={onBodyEdit} />
      <Button backgroundColor="#317BA8" width="100%" onPress={onSubmit}>
        <Text color="white">Submit</Text>
      </Button>
    </FormContainer>
  );
};
