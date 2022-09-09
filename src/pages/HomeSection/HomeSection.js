import styles from './HomeSection.module.css';
import SectionHeadline from '../../components/SectionHeadline/SectionHeadline';
import CtaButton from '../../components/CtaButton/CtaButton';
import headLineData from '../../data/headLineData.json';
import logo from '../../assets/img/lotus.svg';
import { useTranslation } from 'react-i18next';

export default function HomeSection() {
	const { t } = useTranslation();

	return (
		<main className={styles.main}>
			<div className={styles.home_container}>
				<SectionHeadline
					img={logo}
					title={headLineData.home.title}
					subtitle={t('homeSection.subtitle')}
				/>
				<CtaButton />
			</div>
		</main>
	);
}
