import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>
				made with 🧘 by{' '}
				<strong>
					<a className={styles.contact} href="mailto:varziclaudio@gmail.com">
						Claudio Varzi
					</a>
				</strong>{' '}
				| Copyright © 2022
			</p>
		</footer>
	);
}
