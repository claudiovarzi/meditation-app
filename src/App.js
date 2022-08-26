import Navbar from './components/Navbar/Navbar.js';
import HomeSection from './pages/HomeSection/HomeSection.js';
import WhySection from './pages/WhySection/WhySection';
import HowSection from './pages/HowSection/HowSection';
import MeditateSection from './pages/MeditateSection/MeditateSection';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomeSection />} />
					<Route path="why" element={<WhySection />} />
					<Route path="how" element={<HowSection />} />
					<Route path="/meditate" element={<MeditateSection />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
