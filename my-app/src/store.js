// import { createStore } from 'redux';
import { appReducer } from './reducer';

const createStore = (reducer) => {
	let state;
	let listeners = []; // массив прослушивателей

	return {
		getState: () => state,

		subscribe: (listener) => {
			listeners.push(listener);
			return () => {
				listeners = listeners.filter((l) => l !== listener);
			};
		},
		dispatch: (action) => {
			state = reducer(state, action);
			listeners.forEach((listener) => listener()); // Call all the listeners
		},
	};
};

export const store = createStore(appReducer);

store.dispatch({});

// пример использования прослушивателя изменений
// const unsubscribe = store.subscribe(() => {
// 	console.log('Изменение в хранилище');
// });

// // для отписки от прослушивания изменений
// // unsubscribe();

// unsubscribe();
