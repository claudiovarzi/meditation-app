import React from 'react';
import styles from './CtaButton.module.css';
import { Link } from 'react-router-dom';

export default function CtaButton() {
	return (
		<div>
			<Link to="/meditate">
				<button type="button" className={styles.ctaButton}>
					meditate
				</button>
			</Link>
		</div>
	);
}
