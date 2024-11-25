

import { Button, StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native"
import Group from "../components/Group"
import AddGroup from "../components/AddGroup"
import { useTheme } from "@react-navigation/native"
import { useState } from "react"

export default GroupView = ({onLightSourcesClick, onSetColorClick, onAdjustModeClick, onToggleMotionSensorClick,
                            group, handleToggleMotion}) => {                      //GV är en funktion som pekar på {}
    
    const {colors} = useTheme();
    const [motionIsEnabled, setMotionIsEnabled] =  useState();
    const toggleMotion = () => {
        setMotionIsEnabled(currentState => !currentState)
        console.log(motionIsEnabled)
        handleToggleMotion(!motionIsEnabled)
    }
    
    return (                                            //måste ha en view för att kunna stoppa in saker i
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={ () => onLightSourcesClick()}
            >
                <Text style={styles.text}>Light sources</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}
                onPress={ () => onSetColorClick()}
            >
                <Text style={styles.text}>Set Colors</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={ () => onAdjustModeClick()}
            >
                <Text style={styles.text}>Adjust modes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
                onPress={ () => onToggleMotionSensorClick()}
            >
                <Text style={styles.text}>Set motion sensor</Text>
                <Switch
                    onValueChange={toggleMotion}
                    value={motionIsEnabled}
                />
            </TouchableOpacity>
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