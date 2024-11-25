

import { StyleSheet, View, Text, TouchableWithoutFeedback, TextInput, Keyboard, TouchableOpacity} from "react-native"


export default ProfileView = ({user, setDeviceSerial, onSignOut, setSerial, device}) => {                     
    return (        
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()} style={styles.container}>
            <View style={{width: '100%', alignItems: 'center', justifyContent:'center', flex: 1}}>
            <View style={styles.container}>
            <Text style={[styles.text, {marginBottom: 20}]}>{user}</Text>
            <Text style={{fontSize: 15}}>Flashbang serial</Text>
            <TextInput
                style={styles.typeins}
                placeholder="Enter serial of your Flashbang"
                onChangeText={newSerial => setSerial(newSerial)}
                defaultValue={device}
                onSubmitEditing={() => setDeviceSerial() }
            />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onSignOut()}
            >
            <Text style={styles.signOutText}>Sign out</Text>
            </TouchableOpacity>    
            </View>
        </TouchableWithoutFeedback>                                    
    )
} 

const styles = StyleSheet.create({                      
    container: {
        flex: 1,
        alignItems: 'center',                          
        justifyContent: 'center',
        width: '100%',
    },
    signOutText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    button:{
        flexDirection: 'row',
        backgroundColor: 'palevioletred',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderWidth: 2,
        borderColor: 'lavender',
        borderRadius: 10,
        marginTop: 'auto',
        marginBottom: 20
    },
    text: {
        padding: 2,
        fontWeight: 'bold',
        fontSize: 20,
    },
    typeins: {
        flexDirection: 'row',
        backgroundColor: 'gainsboro',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        borderWidth: 2,
        borderColor: 'lavender',
        borderRadius: 10,
        marginVertical: 5,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        padding: 7,
    },
})