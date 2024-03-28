import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');

      setLoginAttempts(loginAttempts + 1);
      if (loginAttempts + 1 >= 3) {
        setIsLoginDisabled(true);
        alert('Maximum login attempts reached. Login disabled.');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin} disabled={isLoginDisabled}>
        Login
      </button>
      {isLoginDisabled && <p>Login disabled. Maximum attempts reached.</p>}
    </div>
  );
};

export default Login;