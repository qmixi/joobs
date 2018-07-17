import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import AuthScreen from './src/screens/AuthScreen';
import HelloScreen from './src/screens/HelloScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import store from "./src/store";


export default class App extends React.Component {
		render() {
				const MainNavigator = createBottomTabNavigator({
						hello: {screen: HelloScreen},
						auth: {screen: AuthScreen},
						main: {
								screen: createBottomTabNavigator({
										map: {screen: MapScreen},
										deck: {screen: DeckScreen},
										review: createStackNavigator({
												review: {screen: ReviewScreen},
												settings: {screen: SettingsScreen}
										})
								})
						}
				}, {
						navigationOptions: {
								tabBarVisible: false
						},
						lazy: true
				});

				return (
						<Provider store={store}>
								<MainNavigator/>
						</Provider>
				);
		}
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				backgroundColor: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
		},
});
