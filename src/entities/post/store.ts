import {create} from 'zustand';
import {Post} from './model/types';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

interface PostState {
  post: Post;
  drafts: Post[];
  updatePost: (postData: Partial<Post>) => void;
}

export const usePostStore = create<PostState>()(set => ({
  post: {
    id: Base64.stringify(hmacSHA512('id', 'post')),
    title: '',
    body: '',
    userId: Base64.stringify(hmacSHA512('is', 'user')),
  },
  drafts: [],
  updatePost: postData =>
    set(state => {
      const post: Post = {
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
}));
