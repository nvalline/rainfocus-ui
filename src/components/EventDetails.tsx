import Image from 'next/image';
import EditEventIcon from '../assets/icons/edit_square.svg';
import styles from './EventDetails.module.scss';

const EventDetails = () => {
	return (
		<div className={styles.eventDetails}>
			<div className={styles.eventDetails__container}>
				<div className={styles.eventDetails__wrapper}>
					<Image
						src='/images/Logo.png'
						width={95}
						height={95}
						alt='Event Logo'
						className={styles.eventDetails__eventImage}
					/>
					<div className={styles.eventDetails__infoBlock}>
						<h1 className={styles.eventDetails__infoBlock___title}>
							RainFocus Summit
						</h1>
						<div>
							<p className={styles.eventDetails__infoBlock___body}>
								December 15th
							</p>
							<p className={styles.eventDetails__infoBlock___body}>
								Lehi, Utah
							</p>
						</div>
					</div>
				</div>
				<button className={styles.eventDetails__button} aria-label='Edit Event'>
					<EditEventIcon className={styles.eventDetails__button___icon} />
					<span className={styles.eventDetails__button___label}>Edit Event</span>
				</button>
			</div>

			<div className={styles.eventDetails__description}>
				<h2 className={styles.eventDetails__description___title}>
					Event setup guide
				</h2>
				<p className={styles.eventDetails__description___body}>
					See the available list of modules below. We suggest that you start
					with the attendee module.
				</p>
			</div>
		</div>
	);
};

export default EventDetails;
