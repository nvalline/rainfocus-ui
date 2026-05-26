import Image from 'next/image';
import styles from './Sidebar.module.scss';

interface SidebarProps {
	onLogoClick: () => void;
}

const Sidebar = ({ onLogoClick }: SidebarProps) => {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.sidebar__top}>
				{/* RainFocus Logo */}
				<Image
					src='/images/NavLogo.png'
					height={64}
					width={48}
					alt='Nav Logo'
				/>
				{/* Event Logo */}
				<button
					className={styles.sidebar__logoBtn}
					onClick={onLogoClick}
					aria-label='Toggle navigation'
				>
					<Image src='/images/Logo.png' height={32} width={32} alt='Event Logo' />
				</button>
			</div>
			<div className={styles.sidebar__bottom}>
				<div className={styles.sidebar__profile}>
					<p className={styles.sidebar__profile___text}>FL</p>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
