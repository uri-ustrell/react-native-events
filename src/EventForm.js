import React from 'react';
import { View, Text, TouchableHighlight } from "react-native";

const EventForm = () => {
	const handleAddPress = () => {
		// navigation Logic
	}

	return (
		<View>
			<TouchableHighlight
				onPress={handleAddPress}
			>
				<Text>Add</Text>
			</TouchableHighlight>
		</View>
	)
}

export default EventForm;