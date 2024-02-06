import {useToastController} from '@tamagui/toast';
import React from 'react';
import {Button} from 'tamagui';

export const TestComponent = () => {
  const toastController = useToastController();

  return (
    <>
      <Button
        onPress={() => {
          toastController.show(
            'message message message message message message message',
            {
              //message:
              //  'message message message message message message message message message message',
            },
          );
        }}
        size="$6">
        Show toast!
      </Button>

      <Button
        onPress={() => {
          toastController.show('title title title title title title title', {});
        }}
        size="$6">
        Show another toast!
      </Button>
    </>
  );
};
