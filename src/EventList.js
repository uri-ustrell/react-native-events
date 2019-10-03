import React, { useState, useEffect } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import { getEvents } from "../api";
import EventCard from "./EventCard"

const styles = StyleSheet.create({
	list: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: '#F3F3F3'
	}
})

const EventList = props => {
	[events, setEvents] = useState([]);

	useEffect(() => {
		getEvents().then(events => setEvents(events));
		/* setInterval(() => {
			setEvents(events.map(e => ({ ...e, timer: Date.now() })));
		}, 1000) */
	}, [])

	const handleAddEvent = () => {
		props.navigation.navigate('form');
	}

	return ([
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