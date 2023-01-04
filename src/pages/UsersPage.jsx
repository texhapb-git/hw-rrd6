import { Redirect, Route, Switch } from "react-router-dom";
import EditUser from "../components/EditUser";
import UserProfile from "../components/UserProfile";
import UsersList from "../components/UsersList";

const UsersPage = () => {
	return (
		<Switch>
			<Route path="/users" exact component={UsersList} />
			<Route path="/users/:userId/profile" component={UserProfile} />
			<Route path="/users/:userId/edit" component={EditUser} />
			<Redirect from="/users/:userId" to="/users/:userId/profile" />
		</Switch>
	)
}

export default UsersPage;