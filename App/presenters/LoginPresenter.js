import LoginView from '../views/LoginView';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import {getData, signInUser, storeData} from '../firebaseModel.js';
import { useContext } from 'react';
import { UpdateLoginContext, UpdateModelContext } from '../context/Context';
import { defaultProfile } from '../model/DefaultProfile';

const dummyCredentials = {email: 'test4@test.nu', password: 'test22'}

export default function LoginPresenter({navigation}){
  const updateModel = useContext(UpdateModelContext)
  const login = useContext(UpdateLoginContext)

  const onCreateNewUserClick = () => {navigation.navigate('CreateNewUser')}
  const onSignInClick = (credentials) => {
    if(!credentials?.email || !credentials?.password)
      credentials = dummyCredentials
    signInUser(credentials, onSignInCallback)
  }

  function onSignInCallback(){
    login(true)
    getData(onSignInModelUpdate);
  };
// This function needs to update the actual model.
  function onSignInModelUpdate(data){
    updateModel(data.val())
  };

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()} style={{flex: 1}}>
        <View style={styles.container}>
            <LoginView onSignInClick={onSignInClick} onCreateNewUserClick={onCreateNewUserClick} />
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
