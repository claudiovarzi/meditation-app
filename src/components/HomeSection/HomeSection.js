import React from 'react';
import styles from './HomeSection.module.css';
import SectionHeadline from '../SectionHeadline/SectionHeadline';
import CtaButton from '../CtaButton/CtaButton';
import HeadlineData from '../../data/HeadlineData';

export default function HomeSection() {
	return (
		<main className={styles.main}>
			<div className={styles.home_container}>
				<SectionHeadline
					img={HeadlineData.home.url}
					title={HeadlineData.home.title}
					subtitle={HeadlineData.home.subtitle}
				/>
				<CtaButton />
			</div>
		</main>
	);
}
