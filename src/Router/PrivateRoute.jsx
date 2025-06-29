import { Navigate, useLocation } from "react-router";
import { useAuth } from "../Auth/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading, isAuthenticated, initialized } = useAuth();

    console.log(user?.email);
    const location = useLocation();
    
    console.log("PrivateRoute - Auth state:", { 
        hasUser: !!user, 
        loading, 
        isAuthenticated,
        userDetails: user 
    });

    // Show loading spinner while checking authentication
    if (loading || !initialized) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <span className="ml-4 text-gray-600">Checking authentication...</span>
            </div>
        );
    }

    // Only redirect if we're definitely not authenticated AND not loading
    if (!loading && !isAuthenticated) {
        console.log("User not authenticated, redirecting to landing page");
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    // If user is authenticated, render the protected content
    if (isAuthenticated) {
        console.log("User is authenticated, rendering protected content");
        return children;
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <span className="ml-4 text-gray-600">Loading...</span>
        </div>
    );
};

export default PrivateRoute;