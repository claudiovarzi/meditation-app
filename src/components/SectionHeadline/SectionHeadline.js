import React from 'react';
import styles from './SectionHeadline.module.css';

export default function SectionHeadline(props) {
	return (
		<section className={styles.section}>
			<img src={props.img} alt="LOGO" />
			<h1>{props.title}</h1>
			<p>{props.subtitle}</p>
		</section>
	);
}
