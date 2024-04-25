import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContextProvider from "./contexts/UserContextProvider";

const Layout = () => {
  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default Layout;
