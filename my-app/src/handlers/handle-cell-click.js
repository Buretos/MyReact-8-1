import { store } from '../store';
import { currentField, currentStatus, newCurrentPlayer } from '../actions';
import { checkWin, checkEmptyCell } from '../utils';
import { STATUS, PLAYER } from '../constants';

export const handleCellClick = (cellIndex) => {
	if (
		store.getState().status === STATUS.WIN ||
		store.getState().status === STATUS.DRAW ||
		store.getState().field[cellIndex] !== PLAYER.NOBODY
	) {
		return;
	}

	const newField = [...store.getState().field];
	// console.log('newField', newField);

	newField[cellIndex] = store.getState().currentPlayer;
	// console.log('newField[cellIndex]:', newField[cellIndex]);

	store.dispatch(currentField(newField));

	// console.log('newField', newField);
	// console.log('currentField', store.getState().field);

	if (checkWin(newField, store.getState().currentPlayer)) {
		// setStatus(STATUS.WIN);
		store.dispatch(currentStatus(STATUS.WIN));
		// console.log('currentStatus', store.getState().status);
	} else if (checkEmptyCell(newField)) {
		store.dispatch(
			newCurrentPlayer(
				store.getState().currentPlayer === PLAYER.CROSS
					? PLAYER.NOUGHT
					: PLAYER.CROSS,
			),
		);

		// console.log('currentPlayer', store.getState().currentPlayer);
	} else {
		store.dispatch(currentStatus(STATUS.DRAW));
		// console.log('currentStatus', store.getState().status);
	}
};
