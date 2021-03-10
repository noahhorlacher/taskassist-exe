import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native'
import Task from './Task'

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		color: '#000',
		fontFamily: 'W95FA',
		fontSize: 24
	}
})

const listTitles = [
	"📥 Inbox",
	"📌 Idea Pinboard",
	"🎹 Music Ideas",
	"📸 Photography Ideas",
	"✍️ Creative Writing Ideas",
	"🎨 Design Ideas",
	"🖌️ Drawing Ideas",
	"💾 Programming Ideas",
	"🔨 DIY Ideas",
	"🏞️ Travel List",
	"🌟 Wish List",
	"📚 Learn List",
	"🎥 Movie List",
	"🎞️ Netflix Recommendations from friends I definitely will watch",
	"🎮 Game List",
	"📝 Homework",
	"📅 This Year",
	"📅 This Month",
	"📅 This Week",
	"📅 Today",
	"❗ Important",
	"‼️ ASAP"
]

export const randomListTitle = ()=>{
	return listTitles[parseInt(Math.random()*listTitles.length)]
}

export const TaskList = (props) => {
	if(props.tasks.length <= 0) return <Text style={styles.text}>No Tasks</Text>

	const renderTask = ({item})=>{
		return <Task id={item.id} onChange={text=>{props.onTaskTitleChange(item.id, text)}}>{item.title}</Task>
	}

	return <SafeAreaView style={styles.container}>
				<FlatList
					data={props.tasks}
					renderItem={renderTask}
					keyExtractor={(i) => i.id}
				/>
			</SafeAreaView>
}

export default {TaskList, randomListTitle}