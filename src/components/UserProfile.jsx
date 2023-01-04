import { Link, useParams } from "react-router-dom";

const UserProfile = () => {
	const { userId } = useParams();

	return (
		<>
			<h1>User {userId} Profile</h1>

			<Link to="/users">Users List</Link>
			<br /><br />
			<Link to={`/users/${userId}/edit`}>Edit user {userId}</Link>
		</>
	);
}

export default UserProfile;