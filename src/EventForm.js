import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from "react-native";
import DateTimePicker from 'react-native-modal-datetime-picker'
import { formatDateTime } from '../api'

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
	},
	button: {
		height: 50,
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		alignSelf: 'stretch',
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
	borderTop: {
		borderColor: '#edeeef',
		borderTopWidth: 0.5
	}
});

const EventForm = props => {
	[title, setTitle] = useState("");
	[date, setDate] = useState(new Date());
	[showDatePicked, setShowDatePicked] = useState(false);

	const handleAddPress = () => {
		props.navigation.goBack();
	}

	const handleConfigDate = (inputDate) => {
		setDate(inputDate);
		setShowDatePicked(false);
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
				<TextInput
					style={[styles.text, styles.borderTop]}
					placeholder="Event Date"
					spellCheck={false}
					value={formatDateTime(date.toString())}
					editable={!showDatePicked}
					onFocus={() => setShowDatePicked(true)}
				/>
				<DateTimePicker
					isVisible={showDatePicked}
					onConfirm={handleConfigDate}
					mode="datetime"
					onCancel={() => setShowDatePicked(false)}
				/>
			</View>
			<TouchableHighlight
				onPress={handleAddPress}
				style={styles.button}
			>
				<Text
					style={styles.buttonText}
				>Add</Text>
			</TouchableHighlight>
		</View >
	)
}

EventForm.navigationOptions = {
	title: 'Add Event',
};

export default EventForm;