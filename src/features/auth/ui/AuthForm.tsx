import React from 'react';
import {Button, Text} from 'tamagui';
import {Input} from '@/shared/ui/input';
import {FormContainer} from './styles';
import {useAuthStore} from '../store';

export const AuthForm = () => {
  const user = useAuthStore(state => state.user);
  const setUsername = useAuthStore(state => state.setUsername);
  const setPassword = useAuthStore(state => state.setPassword);
  const login = useAuthStore(state => state.login);

  return (
    <FormContainer>
      <Text>Log In</Text>
      <Input label="Login" value={user.username} onChangeText={setUsername} />
      <Input
        label="Password"
        value={user.password}
        onChangeText={setPassword}
      />
      <Button backgroundColor="#317BA8" width="100%" onPress={login}>
        <Text color="white">Submit</Text>
      </Button>
    </FormContainer>
  );
};
