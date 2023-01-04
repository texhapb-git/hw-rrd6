import { Link, useParams } from "react-router-dom";

const EditUser = () => {
	const { userId } = useParams();
	const anotherUserId = parseInt(userId) + 1 || 1;

	return (
		<>
			<h1>Edit User {userId}</h1>

			<Link to={`/users/${userId}`}>User {userId} profile</Link>
			<br /><br />
			<Link to={`/users/${anotherUserId}`}>Another user profile</Link>
			<br /><br />
			<Link to="/users">Users list</Link>
		</>
	);
}

export default EditUser;