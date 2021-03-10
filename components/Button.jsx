import React from 'react'
import {Pressable, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    button: {
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: 'auto',
		alignSelf: 'center',
		backgroundColor: '#C2C2C2',
		borderTopColor: '#fff',
		borderLeftColor: '#fff',
		borderBottomColor: '#414141',
		borderRightColor: '#414141',
		borderWidth: 3,
		marginTop: 24,
		paddingVertical: 4,
		paddingHorizontal: 16,
		overflow: 'hidden'
    },
    floatbutton: {
        alignSelf: 'center',
		backgroundColor: '#C2C2C2',
		fontSize: 24,
		fontFamily: 'W95FA',
		borderTopColor: '#fff',
		borderLeftColor: '#fff',
		borderBottomColor: '#414141',
		borderRightColor: '#414141',
		borderWidth: 3,
		marginTop: 16,
		marginBottom: 32,
        paddingVertical: 4,
		paddingHorizontal: 16,
		overflow: 'hidden'
    },
	text: {
		color: '#000',
		fontFamily: 'W95FA',
		fontSize: 24,
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: 'auto'
	}
})

export const Button = (props) => {
    return <Pressable
				onPress={props.action}
				style={[(props.float ? styles.floatbutton : styles.button), props.style]}
			>
				{props.children ? <Text style={[styles.text, props.textStyle]}>{props.children}</Text> : null}
			</Pressable>
}

export default Button