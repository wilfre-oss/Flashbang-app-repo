import React, {useState, useRef} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native"

export default LoginView = ({onSignInClick, onCreateNewUserClick}) => {
    const ref_passwordInput = useRef();

    const [emailText, setEmailText] = useState();
    const [passwordText, setPasswordText] = useState();
    return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()} style={{flex: 1}}>                                          
        <View style={styles.container}>
            <Text style={{fontSize: 35, fontWeight: 900, marginBottom: 8}}>Login</Text>
            <TextInput
                style={styles.typeins}
                placeholder="Email address"
                onChangeText={newEmail => setEmailText(newEmail)}
                defaultValue={emailText}
                onSubmitEditing={() => ref_passwordInput.current.focus() }
            />
            <TextInput
                style={styles.typeins}
                placeholder="Password"
                onChangeText={newPassword => setPasswordText(newPassword)}
                defaultValue={passwordText}
                secureTextEntry={true}
                onSubmitEditing={() => onSignInClick({email:emailText, password:passwordText})}
                ref={ref_passwordInput}
            />
            <TouchableOpacity style={[styles.typeins, {backgroundColor: 'lightgreen', justifyContent: 'center', marginTop: 14}]}
                onPress={ () => onSignInClick({email:emailText, password:passwordText})}
            >
                <Text style={[styles.text, {color: 'black'}]}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.typeins, {backgroundColor: 'skyblue', justifyContent: 'center'}]}
                onPress={ () => onCreateNewUserClick()}
            >
                <Text style={styles.text}>Create new user</Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>  
    )
} 

const styles = StyleSheet.create({                      //definierar hur det ser ut. ({}) cuz create är en funk
    container: {
        alignItems: 'center',                           //lod
        width: '100%',
        flex: 1,
        justifyContent: 'center'
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
    },
})
