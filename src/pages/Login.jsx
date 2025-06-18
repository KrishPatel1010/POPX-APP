import { useNavigate } from 'react-router-dom';
import React, { useRef, useContext } from 'react';
import { UserContext } from '../userContext';

function Login() {
  const navigate = useNavigate();
  const { setName, setEmail } = useContext(UserContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setName(emailRef.current.value.split('@')[0]);
    navigate('/profile');
  };

  return (
    <div style={{ position: 'relative', top: -40, minHeight: '100vh', background: '#fff', width: '100vw' }}>
      <div style={{ maxWidth: 480, margin: '0 auto', paddingTop: 0 }}>
        <div style={{ width: 400, minHeight: '100vh', background: '#f8f9fb', padding: '0 32px', boxSizing: 'border-box', margin: '0 auto' }}>
          <h2 style={{ fontWeight: 1000, fontSize: 25, marginBottom: 8, paddingTop: 80, marginTop: 0, color: '#222', lineHeight: 1.1 }}>
            Signin to your<br />PopX account
          </h2>
          <div style={{ color: '#6b6b6b', fontSize: 17, marginBottom: 20, marginTop: 8 }}>
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 10 }}>
              <label style={{ color: '#8f5aff', fontWeight: 500, fontSize: 14, display: 'block', marginBottom: 4 }}>Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                ref={emailRef}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1.5px solid #e0e0e0',
                  borderRadius: 8,
                  fontSize: 17,
                  outline: 'none',
                  marginBottom: 0,
                  color: '#222',
                  background: '#fff',
                  fontWeight: 400
                }}
              />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ color: '#8f5aff', fontWeight: 500, fontSize: 14, display: 'block', marginBottom: 4 }}>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                ref={passwordRef}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1.5px solid #e0e0e0',
                  borderRadius: 8,
                  fontSize: 17,
                  outline: 'none',
                  marginBottom: 0,
                  color: '#222',
                  background: '#fff',
                  fontWeight: 400
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '13px 0',
                background: '#d1d1d1',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 20,
                cursor: 'pointer',
                marginTop: 8
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
