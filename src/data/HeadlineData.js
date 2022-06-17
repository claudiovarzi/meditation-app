import logo from '../assets/img/lotus.svg';
import brain from '../assets/img/brain.svg';
import meditation from '../assets/img/meditation.svg';

const headlineData = {
	home: {
		id: 1,
		name: 'home',
		url: logo,
		title: 'Calmly',
		subtitle: 'meditation made simple',
	},
	why: {
		id: 2,
		name: 'why',
		url: brain,
		title: '13 Biggest benefits of meditation',
		subtitle: `Although the research on meditation isn’t as robust as nutrition or exercise, 
					there is a reason why it’s been around for thousands of years. We’re just starting 
					to get a better understanding of how beneficial it can be for many aspects of life, 
					from disease and pain management, to sleep, to control of emotions. Here are the 13
					biggest benefits of meditation. Click on each benefit for more details.`,
	},
	how: {
		id: 3,
		name: 'how',
		url: meditation,
		title: 'How to meditate',
		subtitle: `Meditation helps increase focus, stimulate creativity and decrease stress.
					These simple steps will help you get started. Click on each step for more details.`,
	},
};

export default headlineData;
