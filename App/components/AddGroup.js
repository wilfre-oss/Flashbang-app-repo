import { Button, Pressable, Text, View } from "react-native"
import styles from "./componentStyle"


export default AddGroup = () => {

    const handleOnPress = () => {

    }

    return (
        <View style={[styles.container, {justifyContent: 'center'}]}>
            <Pressable onPress={handleOnPress}>
            <Text style={styles.text}>Add Group</Text>
            </Pressable>
        </View>
    )
}