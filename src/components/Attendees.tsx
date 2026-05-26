import AddWorkflowIcon from '../assets/icons/add-circle-outline.svg';
import AttendeeIcon from '../assets/icons/person_portal.svg';
import PortalIcon from '../assets/icons/computer.svg';
import WorkflowIcon from '../assets/icons/logic-arrow.svg';
import styles from './Attendees.module.scss';

const Attendees = () => {
	return (
		<section className={styles.attendees}>
			<div className={styles.attendees__title}>
				<AttendeeIcon />
				<h3>Attendee</h3>
			</div>

			<div>
				<p className={styles.attendees__step}>
					<b>Step 1:</b> Base settings.
				</p>
				<div className={styles.attendees__settings}>
					<div className={styles.attendees__settings___card}>
						<h4>General</h4>
						<p>Define Attendee types & attributes</p>
					</div>
					<div className={styles.attendees__settings___card}>
						<h4>Title</h4>
						<p>
							Description that explains the value goes here. Description that
							explains the value goes here.
						</p>
					</div>
					<div className={styles.attendees__settings___card}>
						<h4>Title</h4>
						<p>
							Description that explains the value goes here. Description that
							explains the value goes here.
						</p>
					</div>
				</div>
			</div>

			<div>
				<p className={styles.attendees__step}>
					<b>Step 2:</b> Build registration workflows.
				</p>
				<div className={styles.attendees__workflow}>
					<div className={styles.attendees__workflow___card}>
						<div className={styles.attendees__workflow___title}>
							<WorkflowIcon />
							<p>Attendee Registration</p>
						</div>
						<p>Start by creating a general registration workflow</p>
					</div>
					<div className={styles.attendees__workflow___card}>
						<div className={styles.attendees__workflow___title}>
							<WorkflowIcon />
							<p>Attendee Registration</p>
						</div>
						<p>Start by creating a general registration workflow</p>
					</div>
					<div className={styles.attendees__workflow___card}>
						<div className={styles.attendees__workflow___title}>
							<WorkflowIcon />
							<p>Attendee Registration</p>
						</div>
						<p>Start by creating a general registration workflow</p>
					</div>
					<div className={styles.attendees__workflow___card}>
						<AddWorkflowIcon />
						<p>Add Registration Workflow</p>
					</div>
				</div>
			</div>

			<div>
				<p className={styles.attendees__step}>
					<b>Step 3:</b> Design post-registration experiences.
				</p>
				<div className={styles.attendees__portal}>
					<div className={styles.attendees__portal___card}>
						<div className={styles.attendees__portal___title}>
							<PortalIcon />
							<p>Attendee Portal</p>
						</div>
						<p>
							Manage the portal that attendees will see after they’ve register
							for your event.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Attendees;
