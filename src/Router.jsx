import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import Profile from './Pages/ProfilePage/Profile';
import Story from './Pages/Story/Story';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Sidebar from './Components/Sidebar/Sidebar';
import SignIn from './Pages/SigninPage/Signin';

const Router = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current location is signin
  const isSignInPage = location.pathname === '/signin';

  return (
    <div className="flex flex-row h-full">
      {/* Render sidebar only if the current location is not signin */}
      {!isSignInPage && (
        <div className="w-64 flex-shrink-0 border-r border-gray">
          {/* Sidebar */}
          <Sidebar />
        </div>
      )}

      <div className="flex-grow overflow-auto p-10">
        {/* Content area */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn/>} /> {/* Add the sign-in route */}
          <Route path="/username" element={<Profile />} />
          <Route path="/story" element={<Story />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
