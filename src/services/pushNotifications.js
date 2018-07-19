import {AsyncStorage} from 'react-native';

import {Permissions, Notifications} from 'expo';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
	let previousToken = await AsyncStorage.getItem('pushtoken');
	console.log('previousToken', previousToken);

	if (previousToken) {
			return;
	}
	let {status} = Permissions.askAsync(Permissions.NOTIFICATIONS);
	if (status !== 'granted') {
			return;
	}

	let token = await Notifications.getExpoPushTokenAsync();
	await axios.post(PUSH_ENDPOINT, {token: {token}});
	AsyncStorage.setItem('pushtoken', token);
};