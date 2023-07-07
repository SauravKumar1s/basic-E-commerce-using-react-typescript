import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/register', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      setError('Failed to register');
    }
  };

  return (
    <div>
      <h1><center>Registration</center></h1>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
