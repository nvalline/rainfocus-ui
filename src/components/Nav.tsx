'use client';

import { useState } from 'react';
import { NavItems } from '@/constants/NavItems';
import SearchIcon from '../assets/icons/search.svg';
import styles from './Nav.module.scss';

interface NavProps {
	isOpen: boolean;
}

const Nav = ({ isOpen }: NavProps) => {
	const [openCategoryId, setOpenCategoryId] = useState<string | null>('ni2');

	const handleCategoryClick = (id: string) => {
		setOpenCategoryId((prev) => (prev === id ? null : id));
	};

	return (
		<div className={`${styles.nav}${isOpen ? ` ${styles['nav--open']}` : ''}`}>
			<div className={styles.nav__header}>
				<div className={styles.nav__title}>
					<h2>RainFocus Summit</h2>
				</div>
				<div className={styles.nav__details}>
					<p>Lehi, UT &#8226; December 15th</p>
				</div>
				<div className={styles.nav__search}>
					<div className={styles.nav__search___container}>
						<SearchIcon />
						<input type='search' id='searchInput' placeholder='Search' />
					</div>
				</div>
			</div>
			<div className={styles.nav__menu}>
				{NavItems.map((category) => {
					const expanded = openCategoryId === category.id;
					return (
						<div key={category.id} className={styles.nav__menu___container}>
							<button
								className={`${styles.nav__menu___btn}${expanded ? ` ${styles['nav__menu___btn--active']}` : ''}`}
								onClick={() => handleCategoryClick(category.id)}
								aria-expanded={expanded}
							>
								<div className={styles.nav__menu___icon}></div>
								<p>{category.title}</p>
							</button>
							<div
								className={`${styles.nav__menu___panel}${expanded ? ` ${styles['nav__menu___panel--expanded']}` : ''}`}
							>
								{category.items.map((item) => (
									<p key={item.id}>{item.title}</p>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Nav;
