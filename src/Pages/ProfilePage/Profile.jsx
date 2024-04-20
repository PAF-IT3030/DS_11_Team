import React from 'react';
import { ProfileUserDetails } from '../../Components/Profile Components/ProfileUserDetails';
import ReqUserPostPart from '../../Components/Profile Components/ReqUserPostPart';

const Profile = () => {
  return (
    <div className="px-20">
      <div>
        <ProfileUserDetails />
      </div>
      <div>
        <ReqUserPostPart />
      </div>
    </div>
  );
};

export default Profile;
