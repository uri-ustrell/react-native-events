import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import EventList from "./src/EventList";
import EventForm from './src/EventForm';

const RootStack = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({ title: "Your Events" })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({ title: "Add Event" })
  }
});

export default createAppContainer(RootStack);