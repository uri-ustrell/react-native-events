import React, { useState, useEffect } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Db from "../db";
import EventCard from "./EventCard"

const styles = StyleSheet.create({
	list: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: '#F3F3F3'
	}
})

const EventList = props => {
	const db = Db();
	[events, setEvents] = useState(db.events.map(e => ({ ...e, date: new Date(e.date) })));
	[mikeyMouse, setMikeyMouse] = useState("Hola Mikey")

	useEffect(() => {
		setInterval(() => {
			setEvents(events.map(e => ({ ...e, timer: Date.now() })));
		}, 1000)
	}, events)

	const handleAddEvent = () => {
		//props.navigation.navigate('form');
		setMikeyMouse("hola Mikey num" + Math.random())
	}

	return ([
		<Text key="">{mikeyMouse}</Text>,
		<FlatList
			style={styles.list}
			key="flatlist"
			data={events}
			renderItem={({ item }) => <EventCard event={item} />}
			keyExtractor={item => item.id}
		/>,
		<ActionButton
			key="fab"
			onPress={handleAddEvent}
			buttonColor="rgba(231,76,60,1)"
		/>
	])
}

EventList.navigationOptions = {
	title: 'My Events',
};

export default EventList;