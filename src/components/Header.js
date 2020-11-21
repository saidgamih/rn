import React from 'react'
import { View, Text,  StyleSheet, Platform } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Said Gamih</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f45',
        padding: 15,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
        textAlign: Platform.OS === 'ios' ? 'center' : 'left',
        fontWeight: "bold",
        textTransform: "uppercase"
    }
})

export default Header