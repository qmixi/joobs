import React from 'react';
import {Alert, StyleSheet} from 'react-native';

import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {Notifications} from 'expo';

import registerForNotifications from './src/services/pushNotifications';
import AuthScreen from './src/screens/AuthScreen';
import HelloScreen from './src/screens/HelloScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import store from "./src/store";
import {Icon} from "react-native-elements";


export default class App extends React.Component {
		componentDidMount() {
				registerForNotifications();
				Notifications.addListener((notification) => {
						const {data: {text}, origin} = notification;

						if (origin === 'received' && text) {
								Alert.alert(
										'New Push Notification',
										text,
										[{text: 'Ok'}]
								)
						}
				});
		}

		render() {
				const MainNavigator = createBottomTabNavigator({
						hello: {screen: HelloScreen},
						auth: {screen: AuthScreen},
						main: {
								screen: createBottomTabNavigator({
										map: {screen: MapScreen},
										deck: {screen: DeckScreen},
										review: {
												screen: createStackNavigator({
														review: {screen: ReviewScreen},
														settings: {screen: SettingsScreen}
												}),
												navigationOptions: {
														tabBarIcon: ({tintColor, focused}) => (<Icon name="favorite" size={30} color={tintColor}/>)
												}
										}
								}, {
										tabBarPosition: 'bottom',
										tabBarOptions: {
												labelStyle: {fontSize: 12}
										}
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
