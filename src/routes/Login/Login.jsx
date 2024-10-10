import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import users from '../../mocks/users.json';
import { useAuth } from '../../context/AuthContext.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setSuccess('Bienvenido ' + user.name);
      setError(null)
      login(user)
      navigate('/home');
    } else {
      setError('Contraseña o correo inválido');
      setSuccess(null)
    } 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Inicia Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email-login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password-login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </div>
          <button type="submit">Ingresar</button>
          {
            success && <p className='success-msg'>{success}</p>
          }
          {
            error && <p className='error-msg'>{error}</p>
          }
          <p className="register-link">No tienes cuenta? <Link to="/register">Registrate</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
