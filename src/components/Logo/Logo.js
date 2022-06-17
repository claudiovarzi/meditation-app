import React from 'react';
import logo from '../../assets/img/lotus.svg';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
	return (
		<Link to="/" className={styles.logo}>
			<img src={logo} alt="LOGO" />
			<h3>Calmly</h3>
		</Link>
	);
}
