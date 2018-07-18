import {AsyncStorage} from 'react-native';

import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';

import reducers from '../reducers';

const config = {key: 'primary', storage: AsyncStorage, whitelist: ['likedJobs']};

const persistedReducer = persistReducer(config, reducers);

const store = createStore(
		persistedReducer,
		{},
		compose(
				applyMiddleware(thunk)
		)
);

persistStore(store);

export default store;