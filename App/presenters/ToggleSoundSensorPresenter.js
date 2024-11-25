import ToggleSoundSensorView from '../views/ToggleSoundSensorView';
import { StyleSheet, View } from 'react-native';

export default function ToggleSoundSensorPresenter({navigation}){
    return(
        <View style={styles.container}>
            <ToggleSoundSensorView />
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