import {TextInput} from 'react-native-paper';
import {Text, styled} from 'tamagui';

export const InputContainer = styled(TextInput, {
  name: 'InputContainer',
  backgroundColor: '#000E1A0A',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  width: '100%',
  marginVertical: 16,
});

export const InputLabel = styled(Text, {
  name: 'InputLabel',
  color: '#317BA8',
});
