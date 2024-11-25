import { useContext, useEffect, useState } from 'react';
import { LoginContext, ModelContext } from '../context/Context';
import ProfileView from '../views/ProfileView';
import { StyleSheet, View } from 'react-native';

export default function ProfilePresenter({navigation}){

    const {user, updateLogginStatus} = useContext(LoginContext)
    const model = useContext(ModelContext)
    const [serial, setSerial] = useState()

    useEffect( () => {
        setSerial(model.getDevice())
    }, [model]) 

    const setDeviceSerial = () => {
        model.setDevice(serial)
    }

    const onSignOut = () => {
        model.turnOffAll()
        updateLogginStatus(false)
    }

    return(
        <View style={styles.container}>
            <ProfileView 
                user={user}
                device={serial} 
                setDeviceSerial={setDeviceSerial} 
                onSignOut={onSignOut}
                setSerial={setSerial}
            />
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