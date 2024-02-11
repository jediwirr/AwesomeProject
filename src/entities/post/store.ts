import {useQueryClient} from '@tanstack/react-query';
import {create} from 'zustand';
import {Post} from './model/types';

interface PostState {
  post: Post;
  updatePost: (postData: Partial<Post>) => void;
}

export const usePostStore = create<PostState>()(set => {
  const queryClient = useQueryClient();
  const posts: Post[] = queryClient.getQueryData(['posts']) ?? [];

  return {
    post: {
      id: posts.length ? posts.length + 1 : 1,
      title: '',
      body: '',
      userId: 1,
    },
    updatePost: postData =>
      set(state => ({
        ...state,
        post: {
          ...state.post,
          ...postData,
        },
      })),
  };
});
