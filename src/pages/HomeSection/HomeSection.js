import styles from './HomeSection.module.css';
import SectionHeadline from '../../components/SectionHeadline/SectionHeadline';
import CtaButton from '../../components/CtaButton/CtaButton';
import headLineData from '../../data/headLineData.json';
import logo from '../../assets/img/lotus.svg';

export default function HomeSection() {
	return (
		<main className={styles.main}>
			<div className={styles.home_container}>
				<SectionHeadline
					img={logo}
					title={headLineData.home.title}
					subtitle={headLineData.home.subtitle}
				/>
				<CtaButton />
			</div>
		</main>
	);
}
