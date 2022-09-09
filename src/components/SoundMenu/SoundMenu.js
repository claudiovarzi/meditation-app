import React from 'react';
import styles from './SoundMenu.module.css';
import { useTranslation } from 'react-i18next';

export default function SoundMenu(props) {
	const { t } = useTranslation();

	return (
		<form className={styles.form}>
			<label htmlFor="soundName">{t('meditateSection.soundMenu.label')}</label>
			<br />
			<select
				className={styles.soundMenu}
				id="soundName"
				value={props.value}
				onChange={props.changeSound}
				name="soundName"
			>
				<option value="silence">{t('meditateSection.soundMenu.options.silence')}</option>
				<option value="forest">{t('meditateSection.soundMenu.options.forest')}</option>
				<option value="park">{t('meditateSection.soundMenu.options.park')}</option>
				<option value="rain">{t('meditateSection.soundMenu.options.rain')}</option>
				<option value="river">{t('meditateSection.soundMenu.options.river')}</option>
				<option value="waves">{t('meditateSection.soundMenu.options.waves')}</option>
			</select>
		</form>
	);
}
