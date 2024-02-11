import React from 'react';
import {Button, Text} from 'tamagui';
import {Input} from '@/shared/ui/input';
import {FormContainer} from './styles';
import {useUserStore} from '@/entities/user/store';

export const AuthForm = () => {
  const {user, updateUser} = useUserStore();

  const onUsernameEdit = (username: string) => {
    updateUser({username});
  };

  const onPasswordEdit = (password: string) => {
    updateUser({password});
  };

  const onSubmit = () => {
    updateUser({loggedIn: true});
  };

  return (
    <FormContainer>
      <Text>Log In</Text>
      <Input
        label="Login"
        value={user.username}
        onChangeText={onUsernameEdit}
      />
      <Input
        label="Password"
        value={user.password}
        onChangeText={onPasswordEdit}
      />
      <Button backgroundColor="#317BA8" width="100%" onPress={onSubmit}>
        <Text color="white">Submit</Text>
      </Button>
    </FormContainer>
  );
};
