import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity 
} from "react-native";
import React from "react";

const TopBar = ({
    input,
    setInput,
    onAddTask
}) => {
    return (
        <View style={styles.view1}>
            <TextInput
                placeholder="Comprar vacío"
                style={styles.input}
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity style={styles.button} onPress={onAddTask}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;

const styles = StyleSheet.create({
    view1: {
        height:"12%",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 30,
        paddingBottom:10,
        gap:20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#d5d2c8',
        width: '100%'
    },
    input: {
        borderBottomColor:'gray',
        borderBottomWidth:3,
        color:'black',
        fontSize:20,
        width: 200,
        height:25,
        marginBottom:8,
        fontSize:20,
    },
    button: {
        paddingHorizontal:5,
        paddingVertical:2,
        justifyContent: 'center',
        height: 30,
        width: 95,
        backgroundColor: '#c99e93',
        borderRadius:5,
        borderColor:'grey',
        borderBottomWidth:3,
        borderLeftWidth:3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign:"center",
    },
});