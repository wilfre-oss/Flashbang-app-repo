import { useContext, useEffect, useState } from 'react';
import AddLightsView from '../views/AddLightsView';
import { StyleSheet, View } from 'react-native';
import { LightContext, ModelContext } from '../context/Context';


export default function AddLightsPresenter({navigation, route}){
    const {group} = route.params
    const model = useContext(ModelContext)
    const [lights, setLights] = useState(useContext(LightContext))
    const [groupLights, setGrouplights] = useState(group.lights)

    

    const handleAddLight = (light) => {
        console.log('Add:', light.name)
        model.addLightToGroup(group.id, light)
        setGrouplights([...model.getAllLightsFromGroup(group.id)])
    }

    const handleToggleLight = (light) => {
        console.log('Toggled:', light.name)
        model.toggleLightSwitch(light.id)
    }
    
    const handlePressLight = (light) => {
        console.log('Pressed:', light.name)
    }

    useEffect(() => {  
        let filteredLights = lights.filter((light) => {
            for(let i = 0; i < groupLights.length; i++){
                if(light.id === groupLights[i].id){
                    return false
                }
            }
            return true
        })
        setLights(filteredLights)
    }, [groupLights])

    return(
        <View style={styles.container}>
            <AddLightsView 
                lightArray={lights}
                handlePressLight={handlePressLight}
                handleAddLight={handleAddLight}
                handleToggleLight={handleToggleLight}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });