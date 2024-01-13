import { store } from '../../store';
import { useState, useEffect } from 'react';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';

export const Information = () => {
	const [rend, setRend] = useState(false);

	useEffect(() => {
		const handleStoreChange = () => {
			// console.log('Компонент обновлён');
			setRend(!rend);
		};

		const unsubscribe = store.subscribe(handleStoreChange);

		return () => {
			unsubscribe();
		};
	}, [rend]);

	const playerAction = PLAYER_ACTION[store.getState().status];
	const playerName = PLAYER_NAME[store.getState().currentPlayer];
	// console.log('Player', playerName);

	const information =
		store.getState().status === STATUS.DRAW
			? 'Ничья'
			: `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};
