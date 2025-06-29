// AuthProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);
   const [initialized, setInitialized] = useState(false);

  // Initialize auth state from localStorage on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedAccessToken = localStorage.getItem("accessToken");
        const storedRefreshToken = localStorage.getItem("refreshToken");
        const storedUser = localStorage.getItem("user");

        if (storedAccessToken && storedUser) {
          const isValid = await verifyToken(storedAccessToken);
          console.log(isValid);
          if (isValid) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
            setUser(JSON.parse(storedUser));
          } else {
            // Token is invalid, clear everything
            clearAuthData();
          }
        } else {
          console.log("No auth data found in localStorage");
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        clearAuthData();
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    initializeAuth();
  }, []);

  // Verify token validity (optional - remove if you don't have this endpoint)
  const verifyToken = async (token) => {
  try {
    const response = await fetch('https://alibackend.duckdns.org/authentication_app/verify-token/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),  // Send token in body
    });

    const data = await response.json();
    console.log("Token verify response:", data);

    return response.ok;
  } catch (error) {
    console.error("Token verification failed:", error);
    return false;
  }
};


  // Clear all auth data
  const clearAuthData = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
  };

  // Login function - makes API call and stores data
  const login = async (credentials) => {
    try {
      setLoading(true);
      console.log("Attempting login...");

      const response = await fetch('https://alibackend.duckdns.org/authentication_app/signin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (response.ok) {
        // Extract tokens and user data based on your backend response format
        const access = data.access || data.accessToken || data.access_token;
        const refresh = data.refresh || data.refreshToken || data.refresh_token;
        const userData = data.user || {
          id: data.id,
          email: data.email,
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name
        };

        if (access && userData) {
          // Store in localStorage
          localStorage.setItem("accessToken", access);
          localStorage.setItem("user", JSON.stringify(userData));
          if (refresh) {
            localStorage.setItem("refreshToken", refresh);
          }

          // Update state
          setAccessToken(access);
          setRefreshToken(refresh);
          setUser(userData);

          console.log("Login successful:", userData);
          return { success: true, user: userData };
        } else {
          console.error("Invalid response format:", data);
          return { success: false, error: "Invalid response format" };
        }
      } else {
        console.error("Login failed:", data);
        return { 
          success: false, 
          error: data.message || data.error || data.detail || "Login failed" 
        };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "Network error occurred" };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Optional: Call logout endpoint on backend
      if (accessToken) {
        await fetch('https://alibackend.duckdns.org/authentication_app/logout/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      clearAuthData();
      console.log("User logged out");
    }
  };

  // Register function (optional)
  const register = async (userData) => {
    try {
      setLoading(true);
      console.log("Attempting registration...");

      const response = await fetch('https://alibackend.duckdns.org/authentication_app/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log("Registration response:", data);

      if (response.ok) {
        return { success: true, data };
      } else {
        return { 
          success: false, 
          error: data.message || data.error || data.detail || "Registration failed" 
        };
      }
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: "Network error occurred" };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    accessToken,
    refreshToken,
    loading,
    initialized,
    isAuthenticated: !!user && !!accessToken,
    login,
    logout,
    register,
  };

  console.log("AuthProvider state:", { 
    hasUser: !!user, 
    hasAccessToken: !!accessToken, 
    loading, 
    isAuthenticated: !!user && !!accessToken 
  });

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};