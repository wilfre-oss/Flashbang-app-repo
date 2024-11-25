

import { useState } from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity, Switch } from "react-native"


export default AdjustModeView = ({handleSetMode, currentMode, modes}) => {                      //GV är en funktion som pekar på {}
    
    

    return (                                            
        <View style={styles.container}>
           
            {modes.map( (mode) => {
                
                return (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={ () => handleSetMode(mode.mode)}
                        key={mode.mode}
                    >
                        <Text style={styles.text}>{mode.text}</Text>
                        <Switch
                        value={mode.isOn}
                        onValueChange={ () => handleSetMode(mode.mode)}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
} 

const styles = StyleSheet.create({                      //definierar hur det ser ut. ({}) cuz create är en funk
    container: {
        alignItems: 'center',                           //lod
        justifyContent: 'center',
        width: '100%',
    },
    button:{
        flexDirection: 'row',
        backgroundColor: 'gainsboro',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        borderWidth: 2,
        borderColor: 'lavender',
        borderRadius: 10,
        marginVertical: 5,
    },
    text: {
        padding: 2,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
    },
})