import React from 'react';
import styles from './HowSection.module.css';
import SectionHeadline from '../SectionHeadline/SectionHeadline';
import CtaButton from '../CtaButton/CtaButton';
import Card from '../Card/Card';
import HeadlineData from '../../data/HeadlineData';
import howSectionData from '../../data/howSectionData';

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
					img={HeadlineData.how.url}
					title={HeadlineData.how.title}
					subtitle={HeadlineData.how.subtitle}
				/>
				<section className={styles.cardGrid}>{cards}</section>
				<CtaButton />
			</div>
		</main>
	);
}
