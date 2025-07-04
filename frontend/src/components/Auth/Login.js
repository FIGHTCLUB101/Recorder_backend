//-----------------------------------------------------------------

import React, { useState, useContext, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import { motion } from 'framer-motion';

// Reusable input component
const Input = ({ id, type, placeholder, value, onChange, disabled }) => (
  <div>
    <label htmlFor={id} className="sr-only">{placeholder}</label>
    <input
      id={id}
      type={type}
      inputMode={type === 'email' ? 'email' : undefined}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400 transition duration-200 disabled:opacity-50"
    />
  </div>
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const formRef = useRef();

  // Auto-focus for accessibility
  useEffect(() => {
    formRef.current?.focus();
  }, []);

  // Reset error on user input
  const handleChange = setter => e => {
    setter(e.target.value);
    if (error) setError('');
  };

  // Stable submit handler
  const handleSubmit = useCallback(async e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await api.login({ email: email.trim(), password });
      login(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Error during login');
    } finally {
      setIsLoading(false);
    }
  }, [email, password, login, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <motion.div
        ref={formRef}
        tabIndex={-1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 bg-slate-800/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-full max-w-md border border-slate-700/50"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-slate-300 text-sm">Sign in to your account</p>
        </div>

        {/* Error */}
        {error && (
          <div role="alert" className="bg-red-900/30 border border-red-500/50 text-red-300 p-3 mb-6 rounded-lg text-sm backdrop-blur-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange(setEmail)}
            disabled={isLoading}
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange(setPassword)}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Don't have an account?{' '}
            <button
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              onClick={() => navigate('/signup')}
              type="button"
            >
              Sign up
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
