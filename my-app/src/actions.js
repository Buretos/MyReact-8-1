export const restartGame = () => ({
	type: 'RESTART_GAME',
});

export const currentField = (newField) => ({
	type: 'NEW_FIELD',
	payload: newField,
});

export const currentStatus = (newStatus) => ({
	type: 'NEW_STATUS',
	payload: newStatus,
});

export const newCurrentPlayer = (newPlayer) => ({
	type: 'NEW_PLAYER',
	payload: newPlayer,
});
