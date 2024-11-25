import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import ProfilePresenter from '../presenters/ProfilePresenter.js';
import SettingsPresenter from '../presenters/SettingsPresenter.js';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export default function BottomTabNavigator() {

  const Tab = createBottomTabNavigator();

  return(
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={StackNavigator} options={{
                  tabBarIcon: ({Fontisto}) => (<FontAwesomeIcon name='home' size={25} />),
      }} />
            <Tab.Screen name="Profile" component={ProfilePresenter} options={{
        tabBarIcon: ({FontAwesome5}) => (<FontAwesomeIcon name='user' size={25} />), }} />
    </Tab.Navigator>
  );}
