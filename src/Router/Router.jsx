

import App from '../pages/Landing/App';
import Register from '../pages/Authentication/Register/Register';
import Login from '../pages/Authentication/Login/Login';
import HomePage from '../pages/User-Home/HomePage/HomePage';
import PrivateRoute from './PrivateRoute';
import { createBrowserRouter } from 'react-router';

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
    errorElement: <h2><span className='text-5xl text-center'>404!</span> page found</h2>
  },

]);

export default Router;