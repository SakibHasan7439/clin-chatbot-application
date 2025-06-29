import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../../Auth/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    const { login, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get the page user was trying to access before login
    const from = location.state?.from?.pathname || '/homePage';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('Attempting login with:', { email: formData.email });
        
        // Call the login function from AuthProvider
        const result = await login({
            email: formData.email,
            password: formData.password
        });
        
        if (result.success) {
            toast.success('Login successful!');
            console.log('Login successful, navigating to:', from);
            navigate(from, { replace: true });
        } else {
            toast.error(result.error || 'Login failed');
            console.error('Login failed:', result.error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Logo/Icon */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Hello, Welcome</h2>
          <p className="text-gray-600 text-sm">
            Please Enter Your Details Below To Continue
          </p>
        </div>

        {/* Form */}
        <div className="mt-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-blue-50"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            {/* Login Button */}
          <div>
            <button
                type="submit"
                className="w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                >
                Login
            </button>
          </div>
          </form>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Create Account?{' '}
              <Link to={"/register"} className="font-medium text-blue-600 hover:text-blue-500">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;