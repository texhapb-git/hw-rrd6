import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<h1>Home Page</h1>
			<Link to="/users">Users List</Link>
		</>
	);
}

export default Home;