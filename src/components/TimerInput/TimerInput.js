import React from 'react';
import styles from './TimerInput.module.css';
import { useTranslation } from 'react-i18next';

export default function TimerInput(props) {
	const { t } = useTranslation();

	return (
		<form className={styles.form}>
			<label htmlFor="timerInput">{t('meditateSection.timerInput')}</label>
			<br />
			<div className={styles.inputContainer}>
				<input
					className={styles.minutesInput}
					type="number"
					id="timerInput"
					name="minutes"
					min="0"
					max="59"
					value={props.value.minutes}
					onChange={props.changeTime}
				></input>
				<span>m</span>
				<input
					className={styles.secondsInput}
					type="number"
					id="timeInput"
					name="seconds"
					min="0"
					max="59"
					value={props.value.seconds}
					onChange={props.changeTime}
				></input>
				<span>s</span>
			</div>
		</form>
	);
}
