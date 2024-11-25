
import { useContext, useEffect } from 'react';
import GroupView from '../views/GroupView';
import { StyleSheet, View } from 'react-native';
import { ModelContext } from '../context/Context';


export default function GroupPresenter({navigation, route}){

    const {group} = route.params
    const model = useContext(ModelContext)

    useEffect( () => {
        navigation.setOptions({title: group.name})
    }, [group])

    const onLightSourcesClick = () => {navigation.navigate('LightSources', {group: group})}
    const onSetColorClick = () => {navigation.navigate('SetColor', {group: group})}
    const onAdjustModeClick = () => {navigation.navigate('AdjustMode', {group: group})}
    const onToggleMotionSensorClick = () => {navigation.navigate('ToggleMotionSensor')}

    const handleToggleMotion = (state) => {
        model.toggleMotionSensor(group.id, state)
    }

    return(
        <View style={styles.container}>
            <GroupView onLightSourcesClick={onLightSourcesClick} 
                onSetColorClick={onSetColorClick} 
                onAdjustModeClick={onAdjustModeClick}
                onToggleMotionSensorClick={onToggleMotionSensorClick}
                handleToggleMotion={handleToggleMotion}
                group={group}
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
      width: '100%'
    },
  });