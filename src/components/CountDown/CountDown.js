import React from 'react';
import styles from './CountDown.module.css';

export default function CountDown({ inputTime }) {
	return (
		<section className={styles.section}>
			<div className={styles.border}>
				<div className={styles.countDown}>
					<p>
						{inputTime.minutes || '0'}
						<span>m</span>
					</p>

					<span>:</span>
					<p>
						{inputTime.seconds || '0'}
						<span>s</span>
					</p>
				</div>
			</div>
		</section>
	);
}
