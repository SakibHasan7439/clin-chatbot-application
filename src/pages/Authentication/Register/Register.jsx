// Register.jsx
import React, { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react'; // For eye icons
import { useAuth } from '../../../Auth/AuthProvider';
import { Link, useNavigate } from 'react-router';

const Register = () => {
  const { register, loading } = useAuth();
  const navigate = useNavigate(); // Remove if not using React Router
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: ''
  });
  
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  // Validate form
  const validateForm = () => {
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleRegister = async () => {
    if (!validateForm()) {
      return;
    }

    // Prepare data for API (exclude confirmPassword)
    const { confirmPassword, ...registerData } = formData;
    
    try {
      const result = await register(registerData);
      
      if (result.success) {
        console.log('Registration successful:', result.data);
        
        // Show success message and redirect to login
        alert('Registration successful! Please login with your credentials.');
        navigate('/login');
        
      } else {
        // Handle registration errors
        if (typeof result.error === 'object') {
          // If backend returns field-specific errors, show the first one
          const firstError = Object.values(result.error)[0];
          setError(Array.isArray(firstError) ? firstError[0] : firstError);
        } else {
          // General error message
          setError(result.error);
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create account</h2>
          <p className="text-gray-600 text-sm">
            Enter your details to create a new account. All fields are required.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-blue-50"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-blue-50 pr-10"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg pr-10"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <button
              type="button"
              className="w-full flex justify-center py-3 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already Have An Account?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;