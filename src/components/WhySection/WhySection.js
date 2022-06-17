import React from 'react';
import styles from './WhySection.module.css';
import SectionHeadline from '../SectionHeadline/SectionHeadline';
import CtaButton from '../CtaButton/CtaButton';
import Card from '../Card/Card';
import HeadlineData from '../../data/HeadlineData';
import whySectionData from '../../data/whySectionData.js';

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
					img={HeadlineData.why.url}
					title={HeadlineData.why.title}
					subtitle={HeadlineData.why.subtitle}
				/>
				<section className={styles.cardGrid}>{cards}</section>
				<CtaButton />
			</div>
		</main>
	);
}
