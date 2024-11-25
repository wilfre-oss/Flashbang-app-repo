import { useEffect, useState } from "react"
import { Button, StyleSheet, View, Text, Switch, Pressable, Animated, TouchableOpacity } from "react-native"

export default Group = ({group, onGroupClick, onToggleGroup}) => {
    const [isEnabled, setIsEnabled] = useState(!!group.state)
    const toggleSwitch = () => {
        setIsEnabled(currentState => !currentState)
        onToggleGroup(group)
    }
    
    useEffect( () => {
        setIsEnabled(!!group.state)
    }, [group])

    return (
        <TouchableOpacity style={styles.container}
            onPress={ () => onGroupClick(group)}
        >
            <Text style={styles.text}>{group.name}</Text>
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