import React from 'react';
import styles from './HowSection.module.css';
import SectionHeadline from '../../components/SectionHeadline/SectionHeadline';
import CtaButton from '../../components/CtaButton/CtaButton';
import Card from '../../components/Card/Card';
import headLineData from '../../data/headLineData.json';
import howSectionData from '../../data/howSectionData.json';
import meditation from '../../assets/img/meditation.svg';

export default function HowSection() {
	const cards = howSectionData.map((item) => {
		return (
			<Card
				key={item.id}
				position={item.position}
				title={item.title}
				backgroundColor={item.background}
				description={item.description}
			/>
		);
	});

	return (
		<main className={styles.main}>
			<div className={styles.howContainer}>
				<SectionHeadline
					img={meditation}
					title={headLineData.how.title}
					subtitle={headLineData.how.subtitle}
				/>
				<section className={styles.cardGrid}>{cards}</section>
				<CtaButton />
			</div>
		</main>
	);
}
