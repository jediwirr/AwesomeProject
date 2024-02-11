import React from 'react';
import {AuthForm} from '@/features/auth';
import {View} from 'tamagui';

const AuthScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AuthForm />
    </View>
  );
};

export default AuthScreen;
