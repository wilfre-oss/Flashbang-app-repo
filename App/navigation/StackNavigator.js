import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePresenter from '../presenters/HomePresenter.js';
import GroupPresenter from '../presenters/GroupPresenter.js'
import LightSourcesPresenter from '../presenters/LightSourcesPresenter.js'
import SetColorPresenter from '../presenters/SetColorPresenter.js'
import AdjustModePresenter from '../presenters/AdjustModePresenter.js';
import ToggleMotionSensorPresenter from '../presenters/ToggleMotionSensorPresenter.js';
import ToggleSoundSensorPresenter from '../presenters/ToggleSoundSensorPresenter.js'
import ProfilePresenter from '../presenters/ProfilePresenter.js';
import SettingsPresenter from '../presenters/SettingsPresenter.js';
import LoginPresenter from '../presenters/LoginPresenter.js';
import { useTheme } from '@react-navigation/native';
import AddLightsPresenter from '../presenters/AddLightsPresenter.js';

const dummyLights = [
  {id: 1, name: 'Light 1', state: false},
  {id: 2, name: 'Light 2', state: true},
  {id: 3, name: 'Light 3', state: false},
  {id: 4, name: 'Light 4', state: false},
  {id: 5, name: 'Light 5', state: false}
]

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  const {colors} = useTheme();

  return(
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePresenter}
          options={{ headerShown: false,
            tabBarIcon: ({tintColor}) => (<IconComponent name='ios-home' size={25} color={tintColor} />),}}
        />
        <Stack.Screen
          name="Group"
          component={GroupPresenter}
          options={{title: 'Group title'}}
        />
        <Stack.Screen
          name="LightSources"
          component={LightSourcesPresenter}
          options={{title: 'Light sources'}}
        />
        <Stack.Screen
          name='AddLights'
          component={AddLightsPresenter}
          options={{title: 'Add lights'}}
        />
          <Stack.Screen
          name="SetColor"
          component={SetColorPresenter}
          options={{title: 'Set color preference'}}
          />
          <Stack.Screen
          name="AdjustMode"
          component={AdjustModePresenter}
          options={{title: 'Choose mode'}}
          />
          <Stack.Screen
          name="ToggleMotionSensor"
          component={ToggleMotionSensorPresenter}
          options={{title: 'Toggle motion sensor'}}
          />
          <Stack.Screen
          name="ToggleSoundSensor"
          component={ToggleSoundSensorPresenter}
          options={{title: 'Toggle sound sensor'}}
          />
          <Stack.Screen
          name="Profile"
          component={ProfilePresenter}
          options={{title: 'Flashbang'}}
          />
          <Stack.Screen
          name="Settings"
          component={SettingsPresenter}
          options={{title: 'Flashbang'}}
          />
          <Stack.Screen
          name="Login"
          component={LoginPresenter}
          options={{title: 'Flashbang'}}
          />
      </Stack.Navigator>
  );
}
