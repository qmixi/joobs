import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {MapView} from 'expo';

class MapScreen extends Component {
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
								/>
						</View>
				);
		}
}

export default MapScreen;