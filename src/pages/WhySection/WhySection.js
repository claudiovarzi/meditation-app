import React from 'react';
import styles from './WhySection.module.css';
import SectionHeadline from '../../components/SectionHeadline/SectionHeadline';
import CtaButton from '../../components/CtaButton/CtaButton';
import Card from '../../components/Card/Card';
import headLineData from '../../data/headLineData.json';
import whySectionData from '../../data/whySectionData.json';
import brain from '../../assets/img/brain.svg';

export default function WhySection() {
	const cards = whySectionData.map((item) => {
		return (
			<Card
				key={item.id}
				title={item.title}
				backgroundColor={item.background}
				description={item.description}
			/>
		);
	});

	return (
		<main className={styles.main}>
			<div className={styles.whyContainer}>
				<SectionHeadline
					img={brain}
					title={headLineData.why.title}
					subtitle={headLineData.why.subtitle}
				/>
				<section className={styles.cardGrid}>{cards}</section>
				<CtaButton />
			</div>
		</main>
	);
}
