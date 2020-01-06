import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import NavBar from './components/Navbar';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/auth/user'
});

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem('current-token') || null
  );

  useEffect(() => {
    if (token !== null) {
      // console.log(token, typeof token);
      api.get('/get', { headers: { Authorization: token } }).then(data => {
        setUser(data.data);
      });
    }
  }, [token]);

  const login = (username, password) => {
    // console.log('Login');
    api
      .post('/login', { username: username, password: password })
      .then(data => {
        setUser(data.data);
        setToken(data.data.token);

        localStorage.setItem('current-token', data.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const signup = (email, username, password) => {
    api.post('/register', { email, username, password }).then(data => {
      // console.log(token);
      setToken(data.data.token);
      localStorage.setItem('current-token', data.data.token);
    });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('current-token');
  };

  return (
    <div className="App">
      <NavBar user={user} login={login} logout={logout} signup={signup} />
      {/* {user && console.log(user.username)} */}
    </div>
  );
}

export default App;
