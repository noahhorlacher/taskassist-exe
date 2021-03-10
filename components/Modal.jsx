import React, { useState } from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'
import Button from './Button'

const styles = StyleSheet.create({
    modal:{
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: 'auto',
		alignSelf: 'stretch',
		backgroundColor: '#C2C2C2',
		borderTopColor: '#fff',
		borderLeftColor: '#fff',
		borderBottomColor: '#818181',
		borderRightColor: '#818181',
		borderWidth: 3,
		shadowOffset: {
			width: 3,
			height: 2
		},
		shadowOpacity: 0.6,
		marginBottom: 24,
		paddingBottom: 8
    },
    bar: {
		flexBasis: 'auto',
        backgroundColor: '#050480',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		flexGrow: 0,
		flexShrink: 0,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: 4,
		paddingLeft: 8,
		paddingVertical: 4
    },
    title: {
        fontFamily: 'W95FA',
		color: '#ffffff',
		fontSize: 24,
		flexGrow: 0,
		borderWidth: 3,
		borderTopColor: 'transparent',
		borderLeftColor: 'transparent',
		borderBottomColor: 'transparent',
		borderRightColor: 'transparent',
		paddingVertical: 4,
		paddingHorizontal: 8
    },
    close: {
        color: '#000',
		fontSize: 20,
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 0,
		paddingBottom: 0,
		marginTop: 0,
		flexShrink: 0,
		flexGrow: 0,
		flexBasis: 'auto'
    },
    body: {
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: 'auto',
        paddingHorizontal: 24,
		paddingVertical: 16
    },
    text: {
        fontFamily: 'W95FA',
		fontSize: 24
    },
	confirm: {
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: 'auto'
	},
	titleediting: {
		flexGrow: 1,
		color: '#000',
		borderTopColor: '#000',
        borderLeftColor: '#000',
        borderBottomColor: '#ddd',
        borderRightColor: '#ddd',
		backgroundColor: '#fff'
	},
	bartitleediting: {
		paddingRight: 8
	}
})

export const Modal = (props) => {
	const [titleediting, settitleediting] = useState(false) 
	if(!props.active) return null
	
	return <View style={props.active ? [styles.modal, props.style?.modal] : styles.hide}>
        <View style={titleediting ? [styles.bar, styles.bartitleediting, props.style?.barediting] : [styles.bar, props.style?.bar]}>
            {(props.titleeditable ? <TextInput blurOnSubmit={true} multiline={true} onChangeText={(text)=>{props.onTitleChange(text)}} onFocus={()=>{settitleediting(true)}} onEndEditing={()=>{settitleediting(false)}} style={titleediting ? [styles.title, styles.titleediting, props.style?.titleediting] : [styles.title, props.style?.title]}>{props.title}</TextInput>: <Text style={[styles.title, props.style?.title]}>{props.title}</Text>)}
            {(props.closable && !titleediting  ? (<Button style={[styles.close, props.style?.close]} action={props.onClose}>X</Button>) : null)}
        </View>
		<View style={[styles.body, props.style?.body]}>
            {props.children}
			<Button action={props.onConfirm} style={[styles.confirm, props.style?.confirm]}>{props.buttontext}</Button>
		</View>
	</View>
}

export default Modal