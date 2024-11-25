import { Text, StyleSheet, TouchableOpacity, View } from "react-native"
import Group from "../components/Group"
import AddGroup from "../components/AddGroup"
import { useTheme } from "@react-navigation/native"

export default HomeView = ({groupArray, onGroupClick, onPressAddGroup, onToggleGroup}) => {

    return (

        <View style={styles.container}>
            <View style={styles.container}>
            {groupArray.map( (group) => {
                return <Group group={group} key={group.id} onGroupClick={onGroupClick} onToggleGroup={onToggleGroup}/>
            })}
            </View>
            <TouchableOpacity
                style={styles.addButton}
                onPress={onPressAddGroup}
            >
                <Text style={styles.addText}>Add Group</Text>    
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
    addText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 3,
    },
    addButton: {
        backgroundColor: 'lightgreen',
        borderRadius: 50,
        alignItems: 'center',
        padding: 10,
        marginTop: 'auto',
        marginBottom: 10,
    },
})