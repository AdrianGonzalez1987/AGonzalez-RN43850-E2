import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) => {

    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={ 
                    item.completed ? 
                    styles.taskCompleted : 
                    styles.task
                } key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width:290,
        backgroundColor: '#f59d92',
        padding: 10,
        backgroundColor: '#f59d92',
        borderRadius:6,
        borderColor:'#e5b8ad',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        marginBottom: 15,
    },
    taskCompleted: {
        width: 290,
        backgroundColor: "#3ec9a7",
        padding: 10,
        backgroundColor: "#3ec9a7",
        borderRadius: 6,
        borderColor: "#2b879e",
        borderBottomWidth: 3,
        borderRightWidth: 3,
        marginBottom: 15,
    },
    taskText: {
        fontSize: 20,
    },
})