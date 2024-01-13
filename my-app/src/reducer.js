import { createEmptyField } from './utils';
import { STATUS, PLAYER } from './constants';

export const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	field: createEmptyField(),
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RESTART_GAME':
			return initialState;

		case 'NEW_STATUS':
			return {
				...state,
				status: payload,
			};

		case 'NEW_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};

		case 'NEW_FIELD':
			return {
				...state,
				field: payload,
			};

		default:
			return state;
	}
};
