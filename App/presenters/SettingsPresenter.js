import SettingsView from '../views/SettingsView';
import { StyleSheet, View } from 'react-native';

export default function SettingsPresenter({navigation}){
    return(
        <View style={styles.container}>
            <SettingsView />
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