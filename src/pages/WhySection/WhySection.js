import React from 'react';
import styles from './WhySection.module.css';
import SectionHeadline from '../../components/SectionHeadline/SectionHeadline';
import CtaButton from '../../components/CtaButton/CtaButton';
import Card from '../../components/Card/Card';
import whySectionData from '../../data/whySectionData.json';
import brain from '../../assets/img/brain.svg';
import { useTranslation } from 'react-i18next';

export default function WhySection() {
	const { t } = useTranslation();

	const cards = whySectionData.map((item) => {
		return (
			<Card
				key={item.id}
				title={t(`whySection.card_${item.id}.title`)}
				backgroundColor={item.background}
				description={t(`whySection.card_${item.id}.description`)}
			/>
		);
	});

	return (
		<main className={styles.main}>
			<div className={styles.whyContainer}>
				<SectionHeadline
					img={brain}
					title={t('whySection.title')}
					subtitle={t('whySection.subtitle')}
				/>
				<section className={styles.cardGrid}>{cards}</section>
				<CtaButton />
			</div>
		</main>
	);
}
