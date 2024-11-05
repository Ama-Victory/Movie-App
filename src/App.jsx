import React from 'react'
import Header from './Header/Header'
import Cart from './Cart/Cart'
import { Form } from './LoginForm/Form'
// import SignUp from './Components/SignUp'
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword'
import ForgotPassword from './Components/ForgotPassword'
 import { HashRouter, Routes, Route, RouterProvider } from "react-router-dom";
import SignUp from './Components/SignUp'
import LandingPage from './Page/LandingPage'
import Detail from './Page/Detail'
import MainRouter from './MainRouter'




const App = () => {
  return (
    <div>
      {/* <Header/>  */}
      {/* <Cart/> */}
      {/* <Form/> */}
      {/* <SignUp/>
         <Login/> 
         <ResetPassword/>
         <ForgotPassword/> */}

      {/* <HashRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="landing/:userId" element={<LandingPage />} />
          <Route path="detailed/:id/:userId" element={<Detail />} />
        </Routes>
      </HashRouter> */}
      <RouterProvider router={MainRouter}/>
      
    </div>
  );
}

export default App