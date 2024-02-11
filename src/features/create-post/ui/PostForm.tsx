import React from 'react';
import {Button, Text} from 'tamagui';
import {Input} from '@/shared/ui/input';
import {FormContainer} from './styles';

export const PostForm = () => {
  return (
    <FormContainer>
      <Text>Create Post</Text>
      <Input label="Login" value="" onChangeText={() => {}} />
      <Input label="Password" value="" onChangeText={() => {}} />
      <Button backgroundColor="#317BA8" width="100%">
        <Text color="white">Submit</Text>
      </Button>
    </FormContainer>
  );
};
