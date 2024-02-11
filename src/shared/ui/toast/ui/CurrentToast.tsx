import React, {type FC} from 'react';
import {Toast, useToastController, useToastState} from '@tamagui/toast';
import {ToastButton, ToastChildren, ToastContainer} from './styles';
import {Text} from 'tamagui';

export const CurrentToast: FC = () => {
  const toast = useToastState();
  const toastController = useToastController();

  const TOAST_ENTER_STYLE = {y: 20, opacity: 0};
  const TOAST_EXIT_STYLE = {y: 20, opacity: 0};

  if (!toast || toast.isHandledNatively) {
    return null;
  }

  const onActionPressed = () => {
    toastController.hide();
  };

  return (
    <ToastContainer
      enterStyle={TOAST_ENTER_STYLE}
      exitStyle={TOAST_EXIT_STYLE}
      animation="quick"
      key={toast.id}
      duration={toast.duration}>
      <ToastChildren>
        <Toast.Title color="white">{toast.title}</Toast.Title>
        <Toast.Action altText="toast action">
          <ToastButton unstyled marginLeft={16} onPress={onActionPressed}>
            <Text color="white">OK</Text>
          </ToastButton>
        </Toast.Action>
      </ToastChildren>
    </ToastContainer>
  );
};
