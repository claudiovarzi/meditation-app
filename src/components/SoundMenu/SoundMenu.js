import React from 'react';
import styles from './SoundMenu.module.css';

export default function SoundMenu(props) {
	return (
		<form className={styles.form}>
			<label htmlFor="soundName">Sound</label>
			<br />
			<select
				className={styles.soundMenu}
				id="soundName"
				value={props.value}
				onChange={props.changeSound}
				name="soundName"
			>
				<option value="silence">Silence</option>
				<option value="forest">Forest</option>
				<option value="park">Park</option>
				<option value="rain">Rain</option>
				<option value="river">River</option>
				<option value="waves">Waves</option>
			</select>
		</form>
	);
}
