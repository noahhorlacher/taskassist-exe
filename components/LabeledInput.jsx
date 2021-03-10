import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    textinput: {
		backgroundColor: '#ffffff',
		fontSize: 24,
		fontFamily: 'W95FA',
		paddingVertical: 4,
		paddingHorizontal: 8,
		marginTop: 8,
        borderTopColor: '#000',
        borderLeftColor: '#000',
        borderBottomColor: '#ddd',
        borderRightColor: '#ddd',
        borderWidth: 3
	},
    label: {
        color: '#000',
		fontFamily: 'W95FA',
		fontSize: 20
    }
})

export const LabeledInput = props => {    
    return <View>
        <Text style={styles.label}>{props.label}</Text>
    <TextInput value={props.value} placeholder={props.placeholder} onChangeText={t=>{props.onChangeText(t)}} style={[styles.textinput, props.style]} />
    </View>
    }


export default LabeledInput