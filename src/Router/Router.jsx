

import App from '../pages/Landing/App';
import Register from '../pages/Authentication/Register/Register';
import Login from '../pages/Authentication/Login/Login';
import HomePage from '../pages/User-Home/HomePage/HomePage';
import PrivateRoute from './PrivateRoute';
import { createBrowserRouter } from 'react-router';
import FAQ from '../DashboardRoutes/FAQ/FAQ';
import ChatInterface from '../ChatInterface/ChatInterface';
import ManageSubscription from '../DashboardRoutes/Manage-Subscription/ManageSubscription';
import HelpSupport from '../DashboardRoutes/Help-Support/HelpSupport';
import UserManagement from '../DashboardRoutes/User-Management/UserManagement';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/register",
    element: <Register />
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/homePage",
    element: <PrivateRoute><HomePage /></PrivateRoute>,
    errorElement: <h2><span className='text-5xl text-center'>404!</span> page found</h2>,
    children: [
      {
        index: true,
        element: <ChatInterface />
      },

      {
        path: "/homePage/chatInterface",
        element: <ChatInterface />
      },

      {
        path: "faq",
        element: <PrivateRoute><FAQ /></PrivateRoute>
      },

      {
        path: "manageSubscription",
        element: <PrivateRoute><ManageSubscription /></PrivateRoute>
      },

      {
        path: "users",
        element: <PrivateRoute><UserManagement/></PrivateRoute>
      },

      {
        path: "helpSupport",
        element: <PrivateRoute><HelpSupport /></PrivateRoute>
      },

    ]
  },

]);

export default Router;