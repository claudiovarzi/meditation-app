import React from 'react';
import styles from './NavLinks.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavLinks(props) {
	const { t } = useTranslation();

	return (
		<ul className={styles.ul}>
			<li onClick={() => props.closeMobileMenu()}>
				<Link to="/">Home</Link>
			</li>
			<li onClick={() => props.closeMobileMenu()}>
				<Link to="why">{t('navLinks.why')}</Link>
			</li>
			<li onClick={() => props.closeMobileMenu()}>
				<Link to="how">{t('navLinks.how')}</Link>
			</li>
			<li onClick={() => props.closeMobileMenu()}>
				<Link to="meditate">{t('navLinks.meditate')}</Link>
			</li>
		</ul>
	);
}
