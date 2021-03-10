import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Button} from './Button'

const styles = StyleSheet.create({
    checkbox: {
        backgroundColor: '#ffffff',
        borderWidth: 3,
        borderTopColor: '#000',
        borderLeftColor: '#000',
        borderBottomColor: '#C2C2C2',
        borderRightColor: '#C2C2C2',
        marginRight: 8
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginTop: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
        lineHeight: 0,
        width: 28,
        height: 28
    },
    btntext: {
        textAlign: 'center',
        fontSize: 42,
        position: 'relative',
        top: -20,
        fontFamily: 'Marlett'
    }
})

export const Checkbox = (props)=>{
    return <View style={styles.checkbox}>
        <Button action={props.action} textStyle={styles.btntext} style={styles.button}>{props.done?'b':' '}</Button>
    </View>
}

export default {Checkbox}