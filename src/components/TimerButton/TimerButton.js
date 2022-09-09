import React from 'react';
import styles from './TimerButton.module.css';
import { CgPlayButtonR, CgPlayPauseR } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';

export default function TimerButton({ isPlaying, startMeditation }) {
	const { t } = useTranslation();

	const buttonType = isPlaying ? (
		<CgPlayPauseR className={styles.pauseButton} />
	) : (
		<CgPlayButtonR className={styles.playButton} />
	);

	const labelType = isPlaying ? (
		<p className={styles.label}>{t('meditateSection.timerButton.pause')}</p>
	) : (
		<p className={styles.label}>{t('meditateSection.timerButton.start')}</p>
	);

	return (
		<section className={styles.section} onClick={startMeditation}>
			{labelType}
			{buttonType}
		</section>
	);
}
