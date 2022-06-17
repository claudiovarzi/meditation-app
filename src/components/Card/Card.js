import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
	const [isNotFlipped, setIsNotFlipped] = React.useState(true);

	const propStyle = {
		backgroundColor: props.backgroundColor,
		boxShadow: `1px 1px 3px ${props.backgroundColor}`,
	};

	function flipCard() {
		setIsNotFlipped((isNotFlipped) => !isNotFlipped);
	}

	return (
		<div style={propStyle} className={styles.card} onClick={flipCard}>
			{isNotFlipped ? (
				<div>
					<p className={styles.position}>{props.position}</p>
					<h2>{props.title}</h2>
				</div>
			) : (
				<div>
					<p className={styles.description}>{props.description}</p>
				</div>
			)}
		</div>
	);
}
