import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SignUp from './Components/SignUp'
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import LandingPage from './Page/LandingPage';
import Detail from './Page/Detail';

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
//   {
//     path: "/landing"
//   },
  {
    path: "/landing/:userId",
    element: <LandingPage />,
  },
  {
    path: "/detailed/:id/:userId",
    element: <Detail />,
  },
]);

export default MainRouter