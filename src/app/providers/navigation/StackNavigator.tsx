import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '@/screens/HomeScreen';
import PostDetailsScreen from '@/screens/PostDetailsScreen';
import EditPostScreen from '@/screens/EditPostScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
        <Stack.Screen name="EditPost" component={EditPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
