import React, { useState } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

// Async Storage API
import AsyncStorage from 'react-native'

// Custom components
import { TaskList, randomListTitle } from './components/TaskList'
import Modal from './components/Modal'
import Button from './components/Button'

export default function App() {
	// Defaults
	const defaults = {
		listtitle: 'Things I need to do 👀',
		tasktitle: 'New Task',
		lists: [
			{
				id: '0',
				title: '🎃 Halloween Party',
				tasks: [
					{
						id: '0',
						title: '🤖 Destroy robots'
					},
					{
						id: '1',
						title: '🏴‍☠️ Protect pirates'
					},
					{
						id: '2',
						title: '👹 Feed ogres'
					}
				]
			}
		]
	}

	// State management
	const [lists, setlists] = useState(defaults.lists)

	// Get index of a list by id
	const getlistindex = (id) => lists.findIndex((e) => e.id === id)

	// Get index of task by taskid with listindex
	const gettaskindex = (listindex, taskid) =>
		lists[listindex].tasks.findIndex((e) => e.id === taskid)

	// Create a new list with random emoji
	const createlist = (newlistname = defaults.listtitle) => {
		let nlists = [...lists]
		nlists.unshift({
			id: nlists.length.toString(),
			title: randomListTitle(),
			tasks: [{ id: '0', title: defaults.tasktitle }]
		})
		setlists(nlists)
	}

	// Rename a list
	const renamelist = (listid, newlisttitle) => {
		let nlists = [...lists]
		const idx = getlistindex(listid)
		nlists[idx].title = newlisttitle
		setlists(nlists)
	}

	// Create a new task in a list
	const createtask = (listid, newtaskname = defaults.tasktitle) => {
		let nlists = [...lists]
		const idx = getlistindex(listid)
		nlists[idx].tasks.unshift({
			id: nlists[idx].tasks.length.toString(),
			title: newtaskname
		})
		setlists(nlists)
	}

	// Rename a task in a given list
	const renametask = (listid, taskid, newtasktitle) => {
		let nlists = [...lists]
		const idx = getlistindex(listid)
		nlists[idx].tasks[gettaskindex(idx, taskid)].title = newtasktitle
		setlists(nlists)
	}

	// Render a tasklist
	const renderTaskList = ({ item }) => {
		return (
			<Modal
				active={true}
				title={item.title}
				buttontext="Add Task"
				closable={false}
				titleeditable={true}
				onTitleChange={(newtitle) => {
					renamelist(item.id, newtitle)
				}}
				onConfirm={() => {
					createtask(item.id)
				}}
			>
				<TaskList
					tasks={item.tasks}
					onTaskTitleChange={(taskid, newtasktitle) => {
						renametask(item.id, taskid, newtasktitle)
					}}
				/>
			</Modal>
		)
	}

	// Render all tasklists
	const renderLists = (lst) => {
		if (lst.length <= 0) return null

		return (
			<SafeAreaView style={styles.listcontainer}>
				<FlatList
					contentContainerStyle={styles.scroll}
					style={styles.lists}
					data={lst}
					renderItem={renderTaskList}
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
		)
	}

	// Load font
	let [fontsLoaded] = useFonts({
		W95FA: require('./assets/fonts/W95FA.otf'),
		Marlett: require('./assets/fonts/Marlett.ttf')
	})
	if (!fontsLoaded) return <AppLoading />

	// Main App
	return (
		<View style={styles.main}>
			<View style={styles.content}>{renderLists(lists)}</View>
			<View style={styles.footer}>
				<Button
					float={true}
					action={() => {
						createlist()
					}}
				>
					New List
				</Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexGrow: 1,
		flexShrink: 0
	},
	content: {
		flex: 1,
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 'auto',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		backgroundColor: '#008080'
	},
	footer: {
		backgroundColor: '#C2C2C2',
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: 'auto',
		justifyContent: 'center',
		alignItems: 'center',
		borderTopColor: '#fff',
		borderTopWidth: 3
	},
	listcontainer: {
		flex: 1,
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 'auto'
	},
	scroll: {
		flexGrow: 1,
		flexShrink: 0,
		flexBasis: 'auto',
		justifyContent: 'center',
		paddingHorizontal: 24,
		paddingTop: 24
	}
})
