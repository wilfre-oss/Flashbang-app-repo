import { useContext, useEffect, useState } from 'react';
import HomeView from '../views/HomeView';
import { StyleSheet, View } from 'react-native';
import { ModelContext } from '../context/Context';


export default function HomePresenter({navigation}){

    const model = useContext(ModelContext)
    const [groups, setGroups] = useState(model.getAllGroups())

    const onGroupClick = (group) => {navigation.navigate('Group', {group: group})}

    useEffect( () => {
        setGroups([...model.getAllGroups()])
    }, [model])

    const handlePressGroup = () => {
        model.addGroup()
        setGroups([...model.getAllGroups()])
    }

    const handleToggleGroup = (group) => {
        console.log('Toggle:', group.name)
        model.toggleGroup(group.id)
    }

    return(
        <View style={styles.container}>
            <HomeView 
                groupArray={groups} 
                onGroupClick={onGroupClick}
                onPressAddGroup={handlePressGroup}
                onToggleGroup={handleToggleGroup}
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