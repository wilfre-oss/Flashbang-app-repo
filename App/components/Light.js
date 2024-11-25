import { useState } from "react";
import { Switch, View, StyleSheet, Text, TouchableOpacity } from "react-native"

export default Light = ({light, handlePress, handleToggle}) => {
    const [isEnabled, setIsEnabled] =  useState(light.state)
    const toggleSwitch = () => {
        setIsEnabled(currentState => !currentState)
        handleToggle(light)
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={ () => handlePress(light)}
        >
            <Text style={styles.text}>{light.name}</Text>
            <Switch 
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
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
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
    },   
})
