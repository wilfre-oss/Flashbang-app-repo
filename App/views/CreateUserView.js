import React, {useState, useRef} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"

export default CreateUserView = ({onSubmitClick}) => {                      
    const ref_emailInput = useRef();
    const ref_passwordInput = useRef();
        const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [nameText, setNameText] = useState('');
    return (                                            
        <View style={styles.container}>
            <Text style={styles.text}>Create a new user</Text>

            <TextInput style={styles.typeins}
                placeholder="Name"
                onChangeText={newName => setNameText(newName)}
                defaultValue = {nameText}
                onSubmitEditing={() => ref_emailInput.current.focus()}
            />
            <TextInput style={styles.typeins}
                placeholder="Email address"
                onChangeText={newEmail => setEmailText(newEmail)}
                defaultValue = {emailText}
                onSubmitEditing={() => ref_passwordInput.current.focus()}
                ref={ref_emailInput}
            />
            <TextInput
                style={styles.typeins}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={newPassword => setPasswordText(newPassword)}
                defaultValue = {passwordText}
                ref={ref_passwordInput}
                onSubmitEditing={() => onSubmitClick({email:emailText, password:passwordText, name:nameText})}
            />
            <TouchableOpacity style={styles.typeins}
                onPress={ () => onSubmitClick({email:emailText, password:passwordText, name:nameText})}
            >
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({                      //definierar hur det ser ut. ({}) cuz create är en funk
    container: {
        alignItems: 'center',
        width: '100%',
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
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
    },
})
