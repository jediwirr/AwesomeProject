import {create} from 'zustand';

interface User {
  username: string;
  password: string;
  loggedIn?: boolean;
}

export interface UserState {
  user: User;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  login: () => void;
}

export const useAuthStore = create<UserState>()(set => ({
  user: {
    username: '',
    password: '',
  },
  setUsername: username =>
    set(state => ({
      ...state,
      user: {
        ...state.user,
        username,
      },
    })),
  setPassword: password =>
    set(state => ({
      ...state,
      user: {
        ...state.user,
        password,
      },
    })),
  login: () =>
    set(state => ({
      ...state,
      user: {
        ...state.user,
        loggedIn: true,
      },
    })),
}));
