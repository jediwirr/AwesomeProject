import React, {FC, useEffect} from 'react';
import {Button, Text} from 'tamagui';
import {Input} from '@/shared/ui/input';
import {FormContainer} from './styles';
import {Post, usePostStore} from '@/entities/post';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addPost} from '@/shared/api';
import {useNavigation} from '@react-navigation/native';

export const PostForm: FC = () => {
  const {post, updatePost, clearPost, removeDraft} = usePostStore();
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const {mutate, isPending} = useMutation({
    mutationFn: (postData: Post) => addPost(postData),
    onError: error => console.log(error),
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['posts']});
      removeDraft(post.id);
      navigation.reset({
        index: 1,
        routes: [
          {
            name: 'Home',
          },
          {
            name: 'PostDetails',
            params: {postId: post.id},
          },
        ],
      });
    },
  });

  useEffect(() => {
    return () => {
      clearPost();
    };
  }, [clearPost]);

  const onTitleEdit = (title: string) => {
    updatePost({title});
  };

  const onBodyEdit = (body: string) => {
    updatePost({body});
  };

  const onSubmit = () => {
    mutate(post);
  };

  return (
    <FormContainer>
      <Input label="Title" value={post.title} onChangeText={onTitleEdit} />
      <Input label="Body" value={post.body} onChangeText={onBodyEdit} />
      <Button backgroundColor="#317BA8" width="100%" onPress={onSubmit}>
        <Text color="white">{isPending ? 'Just a second...' : 'Submit'}</Text>
      </Button>
    </FormContainer>
  );
};
