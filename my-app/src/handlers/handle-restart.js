import { store } from '../store';
import { restartGame } from '../actions';

export const handleRestart = () => {
	store.dispatch(restartGame());
	// console.log(store.getState().field);
};
