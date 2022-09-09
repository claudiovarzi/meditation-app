import React from 'react';
import styles from './CtaButton.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CtaButton() {
	const { t } = useTranslation();

	return (
		<div>
			<Link to="/meditate">
				<button type="button" className={styles.ctaButton}>
					{t('ctaButton')}
				</button>
			</Link>
		</div>
	);
}
