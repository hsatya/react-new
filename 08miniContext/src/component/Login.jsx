import React from "react";
import UserContext from "../contexts/UserContext";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { setUser } = React.useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
      />
      <br />
      <input
        type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
