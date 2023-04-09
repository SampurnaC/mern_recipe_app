import { useState } from 'react';

const Auth = () => {
  <div className="auth">
    <Login />
    <Register />
  </div>;
};

export default Auth;

const Login = () => {
  return <div></div>;
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="auth-container">
      <form action="">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
