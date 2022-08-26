import React from 'react';
import SoundMenu from '../../components/SoundMenu/SoundMenu';
import styles from './MeditateSection.module.css';
import { forestUrl, parkUrl, rainUrl, riverUrl, wavesUrl } from '../../data/soundTrackData';
import Bell from '../../assets/audio/bell.mp3';
import TimerButton from '../../components/TimerButton/TimerButton';
import TimerInput from '../../components/TimerInput/TimerInput';
import CountDown from '../../components/CountDown/CountDown';

export default function MeditateSection() {
	const [sound, setSound] = React.useState({
		soundName: 'silence',
		url: '',
	});

	const [isPlaying, setIsPlaying] = React.useState(false);

	const [inputTime, setInputTime] = React.useState({
		hours: '',
		minutes: '',
		seconds: '',
	});

	const audio = isPlaying ? (
		<audio className={styles.audio} autoPlay loop src={sound.url}></audio>
	) : (
		<audio className={styles.audio} autoPlay loop src=""></audio>
	);

	const currentUI = isPlaying ? (
		<CountDown inputTime={inputTime} />
	) : (
		<div className={styles.inputContainer}>
			<SoundMenu value={sound.soundName} changeSound={changeSound} />
			<TimerInput value={inputTime} changeTime={changeTime} />
		</div>
	);

	function changeSound(event) {
		const { value } = event.target;
		setSound((sound) => {
			switch (value) {
				case 'silence':
					return { ...sound, soundName: value, url: '' };
				case 'forest':
					return { ...sound, soundName: value, url: forestUrl };
				case 'park':
					return { ...sound, soundName: value, url: parkUrl };
				case 'rain':
					return { ...sound, soundName: value, url: rainUrl };
				case 'river':
					return { ...sound, soundName: value, url: riverUrl };
				case 'waves':
					return { ...sound, soundName: value, url: wavesUrl };
				default:
					return sound;
			}
		});
	}

	function changeTime(event) {
		const { value, name } = event.target;
		setInputTime((inputTime) => {
			return {
				...inputTime,
				[name]: value,
				[name]: value,
			};
		});
	}

	function startMeditation() {
		setIsPlaying((isPlaying) => !isPlaying);
	}

	const startTimer = () => {
		const minutesInMs = inputTime.minutes * 60 * 1000;
		const secondsInMs = inputTime.seconds * 1000;
		const countDownTime = new Date().getTime() + minutesInMs + secondsInMs;

		window.timeInterval = setInterval(() => {
			const nowDate = new Date().getTime();
			const timeDistance = countDownTime - nowDate;

			const updatedMinutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
			const updatedSeconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

			if (timeDistance < 0) {
				clearInterval(window.timeInterval);
				setIsPlaying(false);
				const endSound = new Audio(Bell);
				endSound.play();
			} else {
				setInputTime({ minutes: updatedMinutes, seconds: updatedSeconds });
			}
		}, 1000);
	};

	React.useEffect(() => {
		if (isPlaying) {
			startTimer();
		} else {
			clearInterval(window.timeInterval);
			setInputTime((inputTime) => {
				return {
					...inputTime,
					minutes: inputTime.minutes,
					seconds: inputTime.seconds,
				};
			});
		}
	}, [isPlaying]);

	return (
		<main className={styles.main}>
			{currentUI}
			<TimerButton soundTrack={sound.url} isPlaying={isPlaying} startMeditation={startMeditation} />
			{sound.url !== '' && audio}
		</main>
	);
}
