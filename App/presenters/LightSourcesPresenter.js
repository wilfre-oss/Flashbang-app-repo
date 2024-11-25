import { useContext, useEffect, useState } from 'react';
import LightSourcesView from '../views/LightSourcesView';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import { LightContext, ModelContext } from '../context/Context';


export default function LightSourcesPresenter({navigation, route}){

    const {group} = route.params
    const model = useContext(ModelContext)
    const lights = useContext(LightContext)
    const [groupLights, setGrouplights] = useState()

    useEffect( () => {
        const unsubscribe = navigation.addListener('focus', () => {
            let gLights = model.getAllLightsFromGroup(group.id)
            let filteredLights = lights.filter((light) => {
                for(let i = 0; i < gLights.length; i++){
                    if(light.id === gLights[i].id){
                        return true
                    }
                }
                return false
            })
            setGrouplights(filteredLights)
        })

        if(!groupLights){
            let gLights = model.getAllLightsFromGroup(group.id)
            let filteredLights = lights.filter((light) => {
                for(let i = 0; i < gLights.length; i++){
                    if(light.id === gLights[i].id){
                        return true
                    }
                }
                return false
            })
            setGrouplights(filteredLights)
        }
        
        return unsubscribe
    }, [navigation])


    const handlePressLight = (light) => {
        console.log('Pressed:', light.name)
    }

    const handleToggleLight = (light) => {
        model.toggleLightSwitch(light.id)
    }
    
    const handleAddLight = () => {
        navigation.navigate('AddLights', {group: group})
    }

    const handleRemoveLight = (light) => {
        console.log('Remove:', light.name)
        model.removeLightFromGroup(group.id, light.id)
        //const result = groupLights.filter( groupLight => groupLight.id !== light.id)
        //group.lights = result
        const result = model.getAllLightsFromGroup(group.id)
        setGrouplights(result)
    }

    return groupLights ? (
        <View style={styles.container}>
            <LightSourcesView 
            handlePressLight={handlePressLight}
            lightArray={groupLights}
            handleToggleLight={handleToggleLight}
            handleAddLight={handleAddLight}
            handleRemoveLight={handleRemoveLight}
            />
        </View>
    ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });