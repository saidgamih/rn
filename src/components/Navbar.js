import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Navbar = () => {
    return (
        <View style={styles.navbar}>
        
            <TouchableHighlight
                underlayColor="#f45"
                style={styles.button}
                onPress={() => alert('Home')}
            >
                <Entypo name="home" size={24} color="white" />
            </TouchableHighlight>
            
            <TouchableHighlight 
                underlayColor="#f45"
                style={styles.button}
                onPress={() => alert('Todos')}
            >
                <FontAwesome5 name="tasks" size={24} color="white" />
            </TouchableHighlight>
            
            <TouchableHighlight 
                underlayColor="#f45"
                style={styles.button}
                onPress={() => alert('Profile')}
            >
                <Entypo name="user" size={24} color="white" />
            </TouchableHighlight>
        
      </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
    },
    button: {
        flex: 1,
        backgroundColor: '#f67',
        padding: 10,
        alignItems: 'center'
    }
})


export default Navbar
