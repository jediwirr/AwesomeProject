import React from 'react';
import {View} from 'react-native';
import {TestComponent} from '../components/TestComponent';
import {TamaguiProvider, createTamagui} from 'tamagui';
import {config} from '@tamagui/config/v2-native';
import {ToastProvider} from '@tamagui/toast';
import {CurrentToast, SafeToastViewport} from '../components/Toast';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const tamaguiConfig = createTamagui(config);

// this makes typescript properly type everything based on the config
type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaProvider>
        <ToastProvider burntOptions={{from: 'bottom'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TestComponent />
          </View>
          <CurrentToast />
          <SafeToastViewport />
        </ToastProvider>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}

export default App;
