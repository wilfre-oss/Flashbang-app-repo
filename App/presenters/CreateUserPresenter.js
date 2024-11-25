import CreateUserView from '../views/CreateUserView';
import { StyleSheet, View } from 'react-native';
import {signUpUser, storeData} from '../firebaseModel.js';
import { defaultProfile as userRef } from '../model/DefaultProfile';

export default function CreateUserPresenter({navigation}){
  
  const userName = '';
    const onSubmitClick = (credentials) => {
      this.userName = credentials.name;
      signUpUser(credentials, signUpUserCallback)
    }
  function signUpUserCallback(){
    let userProfile = {...userRef}
    userProfile.username = this.userName
    storeData(userProfile)
    alert('Sign up successful')
    navigation.navigate('Login')
  }

    return(
        <View style={styles.container}>
            <CreateUserView onSubmitClick={onSubmitClick}/>
        </View>
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
