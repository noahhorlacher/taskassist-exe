import React, { useState } from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import {Checkbox} from './Checkbox'

const styles = StyleSheet.create({
    task: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingHorizontal: 16,
		paddingVertical: 8
	},
	tasktitle: {
		flexGrow: 1,
		fontFamily: 'W95FA',
		fontSize: 24,
		borderWidth: 3,
		borderTopColor: 'transparent',
		borderLeftColor: 'transparent',
		borderBottomColor: 'transparent',
		borderRightColor: 'transparent',
		paddingVertical: 4,
		paddingHorizontal: 8,
		alignSelf: 'stretch'
	},
	editing: {
		borderTopColor: '#000',
        borderLeftColor: '#000',
        borderBottomColor: '#ddd',
        borderRightColor: '#ddd',
		backgroundColor: '#fff'
	}
})

export const Task = (props) => {
	const [editing, setediting] = useState(false)
	const [done, setdone] = useState(false)
	return <View style={styles.task}>
		<Checkbox done={done} action={()=>{setdone(!done)}} />
		<TextInput blurOnSubmit={true} onFocus={()=>{setediting(true)}} onEndEditing={()=>{setediting(false)}} style={editing ? [styles.tasktitle, styles.editing] : styles.tasktitle} multiline={true} onChangeText={(text) => {props.onChange(text)}}>{props.children}</TextInput>
	</View>
}

export default Task