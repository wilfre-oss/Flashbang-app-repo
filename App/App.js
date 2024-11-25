import { useCallback, useEffect, useMemo, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { DarkTheme, NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LightModel from './model/Lightmodel';
import { getData, signInUser, storeData, updateModelFromFirebase } from './firebaseModel';
import { LightContext, LoginContext, ModelContext, UpdateLoginContext, UpdateModelContext } from './context/Context';
import { ActivityIndicator, View } from 'react-native';
import {defaultProfile as userRef} from './model/DefaultProfile';
import LoginNavigator from './navigation/LoginStackNavigator';



const Stack = createNativeStackNavigator();

const credentials = {email: 'test4@test.nu', password: 'test22'}

export default function App() {

  const [user, setUser] = useState()
  
  const [model, setModel] = useState()

  const [lights, setLights] = useState()
  
  useEffect( () => {
    if(model)
      setLights(model.getAllLights())
  }, [model])

  const updateLogginStatus = useCallback((status) => {
    console.log(status)
    setUser(status)
    //updateModelFromFirebase(updateModel)
  }, [])

  const loginContextValue = useMemo(() => ({
    user,
    updateLogginStatus
  }), [user, updateLogginStatus])

  const updateModel = (firebaseModel) => {
    console.log('Setting model')
    setModel(() => new LightModel(firebaseModel))
    setUser(() => firebaseModel.username) 
    //setModel( () => new LightModel(userRef))
  }

  return (user && model) ? (
    <LightContext.Provider value={lights}>
      <ModelContext.Provider value={model}>
        <LoginContext.Provider value={loginContextValue}>
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        </LoginContext.Provider>
      </ModelContext.Provider>
    </LightContext.Provider>
  ) : user ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'}/>
    </View>
  ) : (
    <UpdateModelContext.Provider value={updateModel}>
      <UpdateLoginContext.Provider value={updateLogginStatus}>
        <NavigationContainer>
          <LoginNavigator />
        </NavigationContainer>
      </UpdateLoginContext.Provider>
    </UpdateModelContext.Provider>
  )
}

