import { StyleSheet, View, Text, TouchableOpacity, Switch, Button } from "react-native"
import { useState } from "react"


export default AddLightsView = ({lightArray, handlePressLight, handleToggleLight, handleAddLight}) => {
    
    
    return (
        <View style={styles.container}>
            <View style={{margin: 10}}/>
            {lightArray.map((light) => {
                return (
                <RenderLights 
                    light={light}
                    key={light.id}
                    handleAddLight={handleAddLight}
                    handlePressLight={handlePressLight}
                    handleToggleLight={handleToggleLight}
                />
                )
            })}
        </View>
    )
}

const RenderLights = ({light, handleAddLight, handlePressLight, handleToggleLight}) => {
    const [isEnabled, setIsEnabled] = useState(!!light.state)
    const toggleSwitch = () => {
        setIsEnabled(currentValue => !currentValue)
        handleToggleLight(light)
    }

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => handlePressLight(light)}
        >
            <Text style={styles.text}>{light.name}</Text>
            <Switch
                style={{marginLeft: 'auto'}}
                value={isEnabled}
                onValueChange={toggleSwitch}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => handleAddLight(light)}
            >
                <Text style={{fontWeight: '900', fontSize: 20, color: 'white', marginHorizontal: 10}}>
                    Add
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({                      //definierar hur det ser ut. ({}) cuz create är en funk
    container: {
        flex: 1,
        alignItems: 'center',                           //lod
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fff'
    },
    button: {
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
        padding: 2,
    },
    addButton: {
        backgroundColor: 'lightgreen',
        alignSelf: 'stretch',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center'
    }
})