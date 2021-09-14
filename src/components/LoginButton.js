import React, { useState } from 'react';
import axios from 'axios';

const LoginButton = () => {
  let isAuthenticated = false;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post("http://localhost:5003/user-sessions", {
      username: username,
      password: password
    }).then(response => {
      console.log("response >>> ", response);
    }).catch(error => {
      console.log("error >>> ", error);
    });
  }

  return (
    !isAuthenticated && (
      <div>
        <div>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <input type="button" value="Login" onClick={handleLogin} />
      </div>
    )
  )
}

export default LoginButton
