import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const PostCardContainer = styled(TouchableOpacity)`
  background-color: #000e1a0a;
  padding: 16px;
  border-radius: 16px;
  margin: 6px 0;
`;

export const PostTitle = styled(Text)`
  font-weight: bold;
  margin-bottom: 24px;
`;
