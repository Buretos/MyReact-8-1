import { store } from '../../store';
import { handleCellClick } from '../../handlers';
import { PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';

export const FieldLayout = () => {
	return (
		<div className={styles.field}>
			{store.getState().field.map((cellPlayer, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => handleCellClick(index)}
				>
					{PLAYER_SIGN[cellPlayer]}
				</button>
			))}
		</div>
	);
};
