import { handleRestart } from './handlers';
import { Field, Information } from './components';
import styles from './game.module.css';

export const GameLayout = () => (
	<div className={styles.game}>
		<Information />
		<Field />
		<button className={styles.restartButton} onClick={handleRestart}>
			Начать заново
		</button>
	</div>
);
