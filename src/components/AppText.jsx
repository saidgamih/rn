import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'

const AppText = ({children}) => {
    return (
        <Text style={ styles.text }>
            { children }
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: "justify",
        ...Platform.select({
            android: {
                fontFamily: 'Roboto'
            }
        })
    }
})


export default AppText
