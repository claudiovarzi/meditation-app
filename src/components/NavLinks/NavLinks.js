import React from 'react';
import styles from './NavLinks.module.css';
import { Link } from 'react-router-dom';

export default function NavLinks(props) {
	return (
		<ul className={styles.ul}>
			<li onClick={() => props.closeMobileMenu()}>
				<Link to="/">Home</Link>
			</li>
			<li onClick={() => props.closeMobileMenu()}>
				<Link to="why">Why</Link>
			</li>
			<li onClick={() => props.closeMobileMenu()}>
				<Link to="how">How</Link>
			</li>
			<li onClick={() => props.closeMobileMenu()}>
				<Link to="meditate">Meditate</Link>
			</li>
		</ul>
	);
}
