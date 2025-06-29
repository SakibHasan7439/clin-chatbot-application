import { useAuth } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading, isAuthenticated } = useAuth();
    const location = useLocation();
    
    console.log("PrivateRoute - Auth state:", { 
        hasUser: !!user, 
        loading, 
        isAuthenticated,
        userDetails: user 
    });

    // Show loading spinner while checking authentication
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <span className="ml-4 text-gray-600">Checking authentication...</span>
            </div>
        );
    }

    // If user is authenticated, render the protected content
    if (isAuthenticated) {
        console.log("User is authenticated, rendering protected content");
        return children;
    }

    // If not authenticated, redirect to landing page with return URL
    console.log("User not authenticated, redirecting to landing page");
    return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRoute;