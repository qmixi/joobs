import React, {Component} from 'react';
import {View, Platform} from 'react-native';

import {Button} from "react-native-elements";
import {connect} from "react-redux";

import * as actions from '../actions';

class SettingsScreen extends Component {
		static navigationOptions = {
				header: {
						style: {
								marginTop: Platform.OS === 'android' ? 24 : 0
						}
				}
		};

		render() {
				return (
						<View>
								<Button
										title="Reset Liked Jobs!"
										large
										backgroundColor="#F44336"
										icon={{name: 'delete-forever'}}
										onPress={() => this.props.clearLikedJobs()}
								/>
						</View>
				);
		}
}

export default connect(null, actions)(SettingsScreen);