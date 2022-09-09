import React from 'react';
import Logo from '../Logo/Logo.js';
import NavLinks from '../NavLinks/NavLinks.js';
import styles from './Navbar.module.css';
import BurgerButton from '../BurgerButton/BurgerButton.js';
import useMediaQueryHook from '../../hooks/useMediaQueryHook';
import LanguageMenu from '../LanguageMenu/LanguageMenu.js';
import { MdLanguage } from 'react-icons/md';

export default function Navbar() {
	const [collapsed, setCollapsed] = React.useState(true);

	const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueryHook();

	function dropDown() {
		setCollapsed((collapsed) => !collapsed);
	}

	return (
		<nav className={styles.nav}>
			<Logo />
			<div className={styles.separator}>
				<ul className={styles.languageList} onClick={dropDown}>
					<li className={styles.dropDown}>
						<MdLanguage className={styles.lngIcon} /> ▾
					</li>
					{!collapsed && <LanguageMenu collapsed={collapsed} />}
				</ul>
				{isDesktopOrLaptop && <NavLinks />}
				{isTabletOrMobile && <BurgerButton />}
			</div>
		</nav>
	);
}
