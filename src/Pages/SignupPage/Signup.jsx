// import section

import React from 'react';

import Footer from '../../Components/Footer/Footer';       // path of the footer file
import Signupform from './Signupform';       // path of signupform file

// path of the images
import applestore from '../../assets/images/applestore.png';
import googleplay from '../../assets/images/googleplay.png';

import { Link } from 'react-router-dom';



// sign up main page function section

function signup() {
  return (
    <div className="border-[1px] border-[black] flex justify-center flex-col items-center">
      <div className="h-[65em] w-[25em] my-[20px]">
        <div className="h-[70%] border-[1px] border-[#DBDBDB]">
          <div className="h-[45%]">
            <div className="h-[50%] w-[100%] flex justify-center items-center">

              {/* call the logo */}
              <img
                className="w-[50%] h-[80%]"
                src="https://www.shopelitepromo.com/content/v/vspfiles/assets/images/flexfit-logo.png"
                alt="Instagram"
              />
            </div>

            {/* write content of the platform */}
            <div className="w-[100%] flex justify-center">
              <p className="w-[70%]">
                Sign up to see photos and videos from your friends.
              </p>
            </div>

            {/* create login option through the facebook */}
            <div className="flex justify-center">
              <button className="w-[70%] my-[10px] p-[10px] rounded bg-[#0095F6] text-[white]">
                Login with Facebook
              </button>
            </div>

            {/* create OR with divider */}
            <div className="w-[100%] flex mb-[20px] justify-center ">
              <div className="border-t-[1px] w-[30%] mt-[10px]"></div>
              <div className="w-[10%] flex justify-center"> OR </div>
              <div className="border-t-[1px] w-[30%] mt-[10px]"></div>
            </div>

          </div>

          {/* call the signupform file */}
          <div className="h-[60%] flex justify-center">
            <Signupform></Signupform>
          </div>
        </div>

        {/* create option to the go signin page */}
        <div className="border-[1px] border-[#DBDBDB] my-[20px] flex justify-center">
          <p className="p-[10px]">
            Have an account?{' '}
            {/* link of the signinpage */}
            <span className="text-[#4CB5F9]">
              <Link to="/signin"> Log in </Link>
            </span>
          </p>
        </div>

        {/* create download option for the app */}
        <div className="flex flex-col h-[10%] items-center">
          <div className="h-[50%] flex items-center"> Get the app </div>
          <div className="h-[50%] flex w-[70%] gap-[10px]">
            {/* call the applestore image */}
            <div className="h-[100%]">
              <img className="h-[100%] w-[100%]" src={applestore}></img>
            </div>
            {/* call the googleplay store image */}
            <div>
              <img className="h-[100%] w-[100%]" src={googleplay}></img>
            </div>
          </div>
        </div>
      </div>

      {/* call the footer file */}
      <Footer className="border-[1px] border-[green]"></Footer>

    </div>

  );
  
}

export default signup;
