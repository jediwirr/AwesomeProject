import {create} from 'zustand';
import {Post} from './model/types';
import UUID from '@/shared/lib/UUID';

interface PostState {
  post: Post;
  drafts: Post[];
  updatePost: (postData: Partial<Post>) => void;
  clearPost: () => void;
  removeDraft: (postId: string) => void;
}

export const usePostStore = create<PostState>()(set => ({
  post: {
    id: UUID(),
    title: '',
    body: '',
    userId: '1',
  },
  drafts: [],
  updatePost: postData =>
    set(state => {
      const post = {
        ...state.post,
        ...postData,
      };

      const updateDrafts = () => {
        const currentDraft = state.drafts.find(draft => draft.id === post.id);

        if (!currentDraft) {
          return [...state.drafts, post];
        }

        return state.drafts.map(draft => {
          if (draft.id === post.id) {
            return post;
          }
          return draft;
        });
      };

      const drafts = updateDrafts();

      return {
        ...state,
        post,
        drafts,
      };
    }),
  clearPost: () =>
    set(state => ({
      ...state,
      post: {
        ...state.post,
        id: UUID(),
        title: '',
        body: '',
      },
    })),
  removeDraft: postId =>
    set(state => {
      const drafts = state.drafts.filter(draft => draft.id !== postId);

      return {
        ...state,
        drafts,
      };
    }),
}));
