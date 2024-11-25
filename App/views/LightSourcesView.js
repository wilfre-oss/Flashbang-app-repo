import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native"
import Light from "../components/Light"
import { useState } from "react"


export default LightSourcesView = ({lightArray, handlePressLight, handleToggleLight, handleAddLight, handleRemoveLight}) => {                      //GV är en funktion som pekar på {}
    
    const lights = lightArray

    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                {lights.map((light) => {
                    return(
                    <RenderLights 
                        key={light.id}
                        light={light}
                        toggleLight={handleToggleLight}
                        pressLight={handlePressLight}
                        removeLight={handleRemoveLight}
                    />
                    )
                })}
            </View>
            <TouchableOpacity 
                onPress={handleAddLight}
                style={styles.addButton}
            >
                <Text style={styles.addText}>Add light</Text>
            </TouchableOpacity>
        </View>
    )
} 

function RenderLights({light, toggleLight, pressLight, removeLight}) {
    const [isEnabled, setIsEnabled] = useState(!!light.state)
    const toggleSwitch = () => {
        setIsEnabled(currentValue => !currentValue)
        toggleLight(light)
    }
    
    return (
        <TouchableOpacity
            style={styles.lightButton}
            key={light.id}
            onPress={ () => pressLight(light)}
        >
            <Text style={styles.text}>{light.name}</Text>
            <Switch
                style={{marginLeft: 'auto'}}
                value={isEnabled}
                onValueChange={toggleSwitch}
            />
            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeLight(light)}
            >
                <Text style={{fontWeight: '900', fontSize: 20, color: 'white', marginHorizontal: 15}}>
                    X
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({                      //definierar hur det ser ut. ({}) cuz create är en funk
    container: {
        flex: 1,
        alignItems: 'center',                           
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fff'
    },
    addButton: {
        backgroundColor: 'lightgreen',
        borderRadius: 50,
        alignItems: 'center',
        padding: 10,
        marginTop: 'auto',
        marginBottom: 10,
    },
    lightButton:  {
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
    addText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 3,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        padding: 2,
    },
    removeButton: {
        backgroundColor: 'palevioletred',
        alignSelf: 'stretch',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center'
    }
})