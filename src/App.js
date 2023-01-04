// import { Routes, Route, Navigate, Outlet, useRoutes } from "react-router-dom";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import EditUser from "./components/EditUser";
import UserProfile from "./components/UserProfile";
import UsersList from "./components/UsersList";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

function App() {
  const routes = useRoutes([
    {
      path: "",
      element: <HomePage />
    },
    {
      path: "users",
      element: <UsersPage />,
      children: [
        {
          index: true,
          element: <UsersList />
        },
        {
          path: ":userId",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <Navigate to="profile" />
            },
            {
              path: "profile",
              element: <UserProfile />
            },
            {
              path: "edit",
              element: <EditUser />
            }
          ]
        }
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" />
    }
  ]);

  return (
    <div className="app">
      {routes}
      {/* <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="users" element={<UsersPage />}>
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<Outlet />}>
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="edit" element={<EditUser />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes > */}
    </div>

  );
}

export default App;
