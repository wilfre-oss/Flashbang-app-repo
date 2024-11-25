import ToggleMotionSensorView from '../views/ToggleMotionSensorView';
import { StyleSheet, View } from 'react-native';

export default function ToggleMotionSensorPresenter({navigation}){
    return(
        <View style={styles.container}>
            <ToggleMotionSensorView />
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