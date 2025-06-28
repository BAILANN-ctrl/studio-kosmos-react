import React, { useState } from 'react';
import './LoginModal.css';
import { FaTimes, FaUser } from 'react-icons/fa';

function LoginModal({ show, onHide }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !otp)) return;

    if (!isLogin && step === 1) {
      alert(`OTP sent to ${email}`);
      setStep(2);
      return;
    }

    alert(`${isLogin ? 'Logging in' : 'Signing up'} with email: ${email}`);
    onHide();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>{isLogin ? 'Login to Studio Kosmos' : 'Sign Up'}</h5>
          <button className="btn btn-sm btn-outline-light" onClick={onHide}><FaTimes /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {!isLogin && step === 2 && (
            <div className="mb-3">
              <label>OTP</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          )}

          {isLogin || step === 2 ? (
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          ) : null}

          <button className="btn btn-primary w-100" type="submit">
            {isLogin ? 'Login' : step === 1 ? 'Send OTP' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center mt-3">
          <small>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button className="btn btn-link p-0" onClick={() => { setIsLogin(!isLogin); setStep(1); }}>
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </small>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
