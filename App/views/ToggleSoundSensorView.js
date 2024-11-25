

import { StyleSheet, View, Text } from "react-native"


export default ToggleSoundSensorView = () => {                      //GV är en funktion som pekar på {}
    return (                                            //måste ha en view för att kunna stoppa in saker i
        <View style={styles.container}>
            <Text>Toggle sound sensor</Text>
        </View>
    )
} 

const styles = StyleSheet.create({                      //definierar hur det ser ut. ({}) cuz create är en funk
    container: {
        alignItems: 'center',                           //lod
        justifyContent: 'center',                       //våg
    },
})