import { Link } from "react-router-dom";

const UsersList = () => {
	return (
		<>
			<h1>Users List</h1>

			<Link to="/">Home Page</Link>

			<ul>
				{
					[1, 2, 3, 4, 5].map(user => (
						<li key={user}>
							<Link to={`/users/${user}`}>User {user}</Link>
						</li>
					))
				}

			</ul>
		</>
	);
}

export default UsersList;