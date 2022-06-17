import React from 'react';
import styles from './TimerButton.module.css';
import { CgPlayButtonR, CgPlayPauseR } from 'react-icons/cg';

export default function TimerButton({ isPlaying, startMeditation }) {
	const buttonType = isPlaying ? (
		<CgPlayPauseR className={styles.pauseButton} />
	) : (
		<CgPlayButtonR className={styles.playButton} />
	);

	return (
		<section className={styles.section} onClick={startMeditation}>
			{buttonType}
		</section>
	);
}
