import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import AuthScreen from './screens/AuthScreen';
import HelloScreen from './screens/HelloScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
import store from "./store";


export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
       hello: { screen: HelloScreen },
       auth: { screen: AuthScreen },
       main: {
         screen: createBottomTabNavigator({
             map: { screen: MapScreen },
             deck: { screen: DeckScreen },
             review: createStackNavigator({
                 review: { screen: ReviewScreen },
                 settings: { screen: SettingsScreen }
             })
         })
       }
    });

    return (
        <Provider store={store}>
            <MainNavigator />
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
