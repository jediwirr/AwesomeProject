import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ToastViewport} from '@tamagui/toast';

export const SafeToastViewport = () => {
  const {left, bottom, right} = useSafeAreaInsets();

  return (
    <ToastViewport
      flexDirection="column-reverse"
      bottom={bottom}
      left={left}
      right={right}
    />
  );
};
