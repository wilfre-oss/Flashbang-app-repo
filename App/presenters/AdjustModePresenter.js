import { useContext, useEffect, useState } from 'react';
import AdjustModeView from '../views/AdjustModeView';
import { StyleSheet, View } from 'react-native';
import { ModelContext } from '../context/Context';

export default function AdjustModePresenter({navigation, route}){
    const model = useContext(ModelContext)
    const {group} = route.params
    const [mode, setMode] = useState(group.mode)
    const [modeArray, setModeArray] = useState([
        {isOn: false, text: 'Rainbow', mode: 'rainbow'},
        {isOn: false, text: 'Work', mode: 'work'},
        {isOn: false, text: 'Party', mode: 'party'},
        {isOn: false, text: 'Blue', mode: 'blue'},
        {isOn: false, text: 'Cleaning', mode: 'cleaning'},
        {isOn: false, text: 'Freaky', mode: 'freaky'}
    ])

    const handleSetMode = (newMode) => {
        model.setMode(group.id, newMode)
        setMode(group.mode)
    }

    useEffect( () => {
        let currentMode = mode
        let newModes = []
        modeArray.forEach( (mode) => {
            if(mode.mode === currentMode){
                newModes = [...newModes, {...mode, isOn: true}]
            }
            else {
                newModes = [...newModes, {...mode, isOn: false}]
            }
        })
        setModeArray(newModes)
    }, [mode])

    return(
        <View style={styles.container}>
            <AdjustModeView handleSetMode={handleSetMode} modes={modeArray}/>
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