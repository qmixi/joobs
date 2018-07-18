import _ from 'lodash';
import {REHYDRATE} from "redux-persist";

import {
		CLEAR_LIKED_JOBS,
		LIKE_JOB
} from '../actions/types';

export default function (state = [], action) {
		switch (action.type) {
				case REHYDRATE:
						return action.payload.likedJobs || [];
				case LIKE_JOB:
						console.log('action', action);
						return _.uniqBy([
								action.payload, ...state
						], 'jobkey');
				case CLEAR_LIKED_JOBS:
						return [];
				default:
						return state;
		}
}