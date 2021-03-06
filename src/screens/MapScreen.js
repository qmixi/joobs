import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {connect} from "react-redux";
import {MapView} from 'expo';

import * as actions from '../actions';
import {Button, Icon} from "react-native-elements";


class MapScreen extends Component {
		static navigationOptions = {
				title: 'Map',
				tabBarIcon: ({tintColor}) => <Icon name="my-location" size={30} color={tintColor}/>
		};

		constructor(props) {
				super(props);

				this.state = {
						mapLoaded: false,
						region: {
								longitude: -122,
								latitude: 37,
								longitudeDelta: 0.04,
								latitudeDelta: 0.09
						}
				}
		}

		componentDidMount() {
				this.setState({
						mapLoaded: true
				});
		}

		onRegionChangeComplete = (region) => {
				this.setState({region});
		};

		onButtonPress = () => {
				this.props.fetchJobs(this.state.region, () => {
						this.props.navigation.navigate('deck');
				});
		};

		render() {
				if (!this.state.mapLoaded) {
						return <View style={{flex: 1}}>
								<ActivityIndicator size="large"/>
						</View>
				}
				return (
						<View style={{flex: 1}}>
								<MapView
										style={{flex: 1}}
										initialRegion={this.state.region}
										onRegionChangeComplete={this.onRegionChangeComplete}
								/>
								<View style={styles.buttonContainer}>
										<Button
											large
											title="Find Jobs"
											backgroundColor="#009688"
											icon={{name: 'search'}}
											onPress={this.onButtonPress}
										/>
								</View>
						</View>
				);
		}
}

const styles = {
		buttonContainer: {
				position: 'absolute',
				bottom: 20,
				left: 0,
				right: 0
		}
};

export default connect(null, actions)(MapScreen);