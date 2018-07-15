import React, {Component} from 'react';

import Slides from '../components/Slides/Slides';

const SLIDE_DATA = [
		{text: 'Welcome to Joobs!'},
		{text: 'You can easily find your dream job!'},
		{text: 'Set your location, then swipe away'}
];

class HelloScreen extends Component {

		render() {
				return (
						<Slides data={SLIDE_DATA}/>
				);
		}
}

export default HelloScreen;