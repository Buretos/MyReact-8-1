import { useState, useEffect } from 'react';
import { FieldLayout } from './field-layout';
import { store } from '../../store';

export const Field = () => {
	// console.log(store.getState().status);
	// console.log(store.getState().currentPlayer);
	// console.log(store.getState().field);
	const [rend, setRend] = useState(false);

	useEffect(() => {
		const handleStoreChange = () => {
			console.log('Компонент обновлён');
			setRend(!rend);
		};

		const unsubscribe = store.subscribe(handleStoreChange);

		return () => {
			unsubscribe();
		};
	}, [rend]);

	return <FieldLayout />;
};
