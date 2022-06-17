import React from 'react';
import Logo from '../Logo/Logo.js';
import NavLinks from '../NavLinks/NavLinks.js';
import styles from './Navbar.module.css';
import BurgerButton from '../BurgerButton/BurgerButton.js';
import useMediaQueryHook from '../../hooks/useMediaQueryHook';

export default function Navbar() {
	const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueryHook();

	return (
		<nav className={styles.nav}>
			<Logo />
			{isDesktopOrLaptop && <NavLinks />}
			{isTabletOrMobile && <BurgerButton />}
		</nav>
	);
}
