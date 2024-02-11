import React, {FC} from 'react';
import {InputContainer, InputLabel} from './styles';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const Input: FC<InputProps> = props => {
  const {label, value, onChangeText} = props;

  return (
    <InputContainer
      label={<InputLabel>{label}</InputLabel>}
      value={value}
      onChangeText={onChangeText}
      activeUnderlineColor="transparent"
      underlineColor="transparent"
      selectionColor="#317BA8"
    />
  );
};
