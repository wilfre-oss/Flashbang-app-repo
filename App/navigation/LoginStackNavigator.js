import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPresenter from '../presenters/LoginPresenter.js';
import CreateUserPresenter from '../presenters/CreateUserPresenter.js';
import { useTheme } from '@react-navigation/native';

export default function LoginNavigator() {
  const Stack = createNativeStackNavigator();
  const {colors} = useTheme();

  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Login"
        component = {LoginPresenter}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="CreateNewUser"
        component={CreateUserPresenter}
      />
      
    </Stack.Navigator>
  );
}
