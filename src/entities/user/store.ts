import {create} from 'zustand';
import {User} from './model/types';

interface UserState {
  user: User;
  updateUser: (userData: Partial<User>) => void;
}

export const useUserStore = create<UserState>()(set => ({
  user: {id: 1, username: '', password: '', loggedIn: false},
  updateUser: userData =>
    set(state => ({
      ...state,
      user: {
        ...state.user,
        ...userData,
      },
    })),
}));
