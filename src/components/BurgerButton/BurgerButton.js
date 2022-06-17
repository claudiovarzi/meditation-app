import React from 'react';
import styles from './BurgerButton.module.css';
import { BsList } from 'react-icons/bs';
import NavLinks from '../NavLinks/NavLinks';

export default function BurgerButton() {
	const [openMenu, setOpenMenu] = React.useState(false);

	function menuClick() {
		setOpenMenu((openMenu) => !openMenu);
	}

	function closeMobileMenu() {
		setOpenMenu(false);
	}

	return (
		<nav>
			<div className={styles.burger_div} onClick={menuClick}>
				<BsList className={styles.burger_icon} />
			</div>
			{openMenu && <NavLinks closeMobileMenu={closeMobileMenu} />}
		</nav>
	);
}
