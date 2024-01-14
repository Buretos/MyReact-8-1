import { useState, useEffect } from 'react';
import { FieldLayout } from './field-layout';
import { store } from '../../store';

export const Field = () => {
	const [rend, setRend] = useState(false);

	useEffect(() => {
		const handleStoreChange = () => {
			setRend(!rend);
		};

		const unsubscribe = store.subscribe(handleStoreChange);

		return () => {
			unsubscribe();
		};
	}, [rend]);

	return <FieldLayout />;
};
