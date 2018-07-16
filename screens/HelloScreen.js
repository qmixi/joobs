import React, {Component} from 'react';

import Slides from '../components/Slides/Slides';

const SLIDE_DATA = [
		{text: 'Welcome to Joobs!', color: '#2541B2'},
		{text: 'You can easily find your dream job!', color: '#009688'},
		{text: 'Set your location, then swipe away', color: '#03A9F4'},
];

class HelloScreen extends Component {

		onSlidesComplete = () => {
			this.props.navigation.navigate('auth');
		}

		render() {
				return (
						<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
				);
		}
}

export default HelloScreen;