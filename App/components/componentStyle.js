import { StyleSheet } from "react-native"

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

export default styles