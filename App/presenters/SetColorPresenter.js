import { useContext, useEffect, useState } from 'react';
import SetColorView from '../views/SetColorView';
import { StyleSheet, View } from 'react-native';
import { ModelContext } from '../context/Context';

export default function SetColorPresenter({navigation, route}){
    const {group} = route.params
    const model = useContext(ModelContext)
    const [color, setColor] = useState('#' + group.color)

    const handleSetColor = (color) => {
        console.log(color)
        model.setGroupColor(group.id, color)
        setColor(color)
    }

    const handleSetBrightness = (value) => {
        console.log(value)
        model.setBrightnessGroup(value)
    }

    return(
        <View style={styles.container}>
            <SetColorView groupColor={color} handleSetColor={handleSetColor} handleSetBrightness={handleSetBrightness}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212021',
    },
  });