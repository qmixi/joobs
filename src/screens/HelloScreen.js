import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';

import _ from 'lodash';
import {AppLoading} from 'expo';

import Slides from '../components/Slides/Slides';

const SLIDE_DATA = [
		{text: 'Welcome to Joobs!', color: '#2541B2'},
		{text: 'You can easily find your dream job!', color: '#009688'},
		{text: 'Set your location, then swipe away', color: '#03A9F4'},
];

class HelloScreen extends Component {
		constructor(props) {
				super(props);
				this.state = {
						token: null
				}
		}

		async componentWillMount() {
				let token = AsyncStorage.getItem('fb_token');

				if (token) {
						this.props.navigation.navigate('map');
						this.setState({token});
				} else {
						this.setState({token: false});
				}
		}

		onSlidesComplete = () => {
				this.props.navigation.navigate('auth');
		};

		render() {
				if (_.isNull(this.state.token)) {
						return <AppLoading/>
				}
				return (
						<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
				);
		}
}

export default HelloScreen;