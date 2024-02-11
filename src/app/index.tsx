import React, {useEffect} from 'react';
import {TamaguiProvider, createTamagui} from 'tamagui';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import BootSplash from 'react-native-bootsplash';
import {config} from '@tamagui/config/v2-native';
import {ToastProvider} from '@tamagui/toast';
import StackNavigator from './providers/navigation/StackNavigator';
import {CurrentToast, SafeToastViewport} from '@/shared/ui/toast';
import AuthScreen from '@/screens/AuthScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useUserStore} from '@/entities/user/store';

const tamaguiConfig = createTamagui(config);

// this makes typescript properly type everything based on the config
type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default function () {
  const {user} = useUserStore();

  useEffect(() => {
    (async () => {
      await BootSplash.hide({fade: true});
    })();
  }, []);

  const queryClient = new QueryClient();

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <ToastProvider burntOptions={{from: 'bottom'}}>
            <PaperProvider>
              {!user.loggedIn ? <AuthScreen /> : <StackNavigator />}
              <CurrentToast />
              <SafeToastViewport />
            </PaperProvider>
          </ToastProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
