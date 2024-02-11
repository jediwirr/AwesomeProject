import React from 'react';
import {Text, View} from 'tamagui';

const WelcomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Welcome!</Text>
    </View>
  );
};

export default WelcomeScreen;
