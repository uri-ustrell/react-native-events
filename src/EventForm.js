import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	fieldContainer: {
		marginTop: 20,
		marginBottom: 20,
		backgroundColor: '#fff'
	},
	text: {
		height: 40,
		margin: 0,
		marginRight: 7,
		paddingLeft: 10
	}
});

const EventForm = props => {
	[title, setTitle] = useState("");

	const handleAddPress = () => {
		props.navigation.goBack();
	}

	return (
		<View
			style={{ flex: 1, backgroundColor: '#F3F3F3' }}
		>
			<View
				style={styles.fieldContainer}
			>
				<TextInput
					style={styles.text}
					placeholder="Event Title"
					spellCheck={false}
					value={title}
					onChangeText={inpt => setTitle(inpt)}
				/>
			</View>
			<TouchableHighlight
				onPress={handleAddPress}
			>
				<Text>{title}</Text>
			</TouchableHighlight>
		</View >
	)
}

EventForm.navigationOptions = {
	title: 'Add Event',
};

export default EventForm;