

import { StyleSheet, View, Text } from "react-native"


export default ToggleMotionSensorView = () => {                      //GV är en funktion som pekar på {}
    return (                                            //måste ha en view för att kunna stoppa in saker i
        <View style={styles.container}>
            <Text>Toggle motion sensor</Text>
        </View>
    )
} 

const styles = StyleSheet.create({                      //definierar hur det ser ut. ({}) cuz create är en funk
    container: {
        alignItems: 'center',                           //lod
        justifyContent: 'center',                       //våg
    },
})