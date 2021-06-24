import ProfilePicture from '../assets/images/Profile.png'

const Profile = () => {
	return (
		<span className="profile-content">
			<img src={ProfilePicture} alt="Profile" className="profile-photo" />
			<span className="profile-name">Eduardo Edson</span>
			<span className="profile-description">
				Hello, I'm Eduardo and I’m currently living in Brazil but looking for work opportunities as developer abroad.<br /><br />
				I have experience as Fullstack Developer whit PHP, JavaScript, HTML, CSS, Python, ReactJS, React Native and Node.JS.<br /><br />
				Although, I am open to learn new technologies if necessary.
			</span>
		</span>
	);
}

export default Profile;
