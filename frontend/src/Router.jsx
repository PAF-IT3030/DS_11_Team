import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage';
import Profile from './pages/ProfilePage/Profile';
import Story from './pages/Story/Story';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Sidebar from './components/Sidebar/Sidebar';
import SignIn from './pages/SigninPage/Signin';
import Signup from './pages/SignupPage/Signup';

const Router = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current location is signin
  const isSignInPage = location.pathname === '/signin';

  // Check if the current location is signup
  const isSignUpPage = location.pathname === '/signup';

  return (
    <div className="flex flex-row h-full">
      {/* Render sidebar only if the current location is not signin */}
      {!isSignInPage && !isSignUpPage && (
        <div className="w-64 flex-shrink-0 border-r border-gray">
          {/* Sidebar */}
          <Sidebar />
        </div>
      )}

      <div className="flex-grow overflow-auto p-10">
        {/* Content area */}
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />{' '}
          {/* Add the sign-in route */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/username" element={<Profile />} />
          <Route path="/story" element={<Story />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
