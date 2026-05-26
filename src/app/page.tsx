'use client';

import { useState } from 'react';
import EventDetails from '@/components/EventDetails';
import styles from './page.module.scss';
import Sidebar from '@/components/Sidebar';
import Nav from '@/components/Nav';
import Attendees from '@/components/Attendees';

export default function Home() {
	const [navOpen, setNavOpen] = useState(false);

	return (
		<div className={styles.page}>
			<Sidebar onLogoClick={() => setNavOpen((prev) => !prev)} />
			<Nav isOpen={navOpen} />
			<main className={styles.page__main}>
				<EventDetails />
				<Attendees />
			</main>
		</div>
	);
}
