import {Toast} from '@tamagui/toast';
import {View, styled} from '@tamagui/core';
import {Button} from 'tamagui';

export const ToastContainer = styled(Toast, {
  name: 'ToastContainer',
  backgroundColor: 'black',
  borderRadius: 16,
});

export const ToastChildren = styled(View, {
  name: 'ToastChildren',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '80%',
});

export const ToastButton = styled(Button, {
  name: 'ToastButton',
});
