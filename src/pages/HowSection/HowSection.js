import React from 'react';
import styles from './HowSection.module.css';
import SectionHeadline from '../../components/SectionHeadline/SectionHeadline';
import CtaButton from '../../components/CtaButton/CtaButton';
import Card from '../../components/Card/Card';
import howSectionData from '../../data/howSectionData.json';
import meditation from '../../assets/img/meditation.svg';
import { useTranslation } from 'react-i18next';

export default function HowSection() {
	const { t } = useTranslation();

	const cards = howSectionData.map((item) => {
		return (
			<Card
				key={item.id}
				position={item.position}
				title={t(`howSection.card_${item.id}.title`)}
				backgroundColor={item.background}
				description={t(`howSection.card_${item.id}.description`)}
			/>
		);
	});

	return (
		<main className={styles.main}>
			<div className={styles.howContainer}>
				<SectionHeadline
					img={meditation}
					title={t('howSection.title')}
					subtitle={t('howSection.subtitle')}
				/>
				<section className={styles.cardGrid}>{cards}</section>
				<CtaButton />
			</div>
		</main>
	);
}
