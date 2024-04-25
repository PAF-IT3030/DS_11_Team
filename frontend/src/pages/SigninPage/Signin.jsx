// import section

import React from 'react';

// paths of the images
import img1 from '../../assets/images/img1.png';
import applestore from '../../assets/images/applestore.png';
import googleplay from '../../assets/images/googleplay.png';

// path of the signinup file
import Signinform from './Signinform';

import { Link } from 'react-router-dom';

// path of the footer file
import Footer from '../../components/Footer/Footer';

// function creation section

function SignIn() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex h-[35em] w-[800px] my-[8em]">
        <div className="h-[100%] w-[50%]">
          <img className="h-[100%] w-[100%]" src={img1}></img>{' '}
          {/* call the image */}
        </div>
        <div className="w-[50%]">
          <div className="flex justify-center h-[65%] border-[1px] border-[#DBDBDB] flex-col items-center mb-[10px] ">
            <div className="h-[30%] flex justify-center items-center ">
              {/* call the logo */}
              <img
                className="w-[70%] h-[70%]"
                src="https://www.shopelitepromo.com/content/v/vspfiles/assets/images/flexfit-logo.png"
              ></img>
            </div>

            {/* call the signinform file */}
            <div className="h-[40%] w-[100%] flex justify-center">
              {' '}
              <Signinform></Signinform>{' '}
            </div>

            {/* create OR with dividers */}
            <div className="h-[30%] flex flex-col w-[100%] items-center justify-stretch">
              <div className="w-[70%] basis-1/3 flex justify-center">
                <div className="w-[40%] border-t-2 mt-[10px]"></div>
                <div className="w-[20%] flex justify-center"> OR </div>
                <div className="w-[40%] border-t-2 mt-[10px]"></div>
              </div>

              {/* create logo of the facebook */}
              <div className="w-[70%] basis-1/3 text-[#385185] flex justify-center items-center gap-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 512 512"
                  style={{ fill: '#4CB5F9' }}
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
                Login with Facebook
              </div>

              {/* create reset password option */}
              <div className="w-[70%] basis-1/3 text-[#385185] text-[15px] flex justify-center items-center">
                Forgotten Your Password
              </div>
            </div>
          </div>

          {/* create to navigate signup option */}
          <div className="h-[10%] border-[1px] border-[#DBDBDB] flex justify-center items-center">
            <p className="">
              Don't have an Account?
              {/* link to the signup page */}
              <span className="text-[#4CB5F9]">
                <Link to="/signup"> Sign up </Link>
              </span>
            </p>
          </div>

          <div className="h-[20%]">
            {/* create download option of the app */}
            <div className="h-[50%] flex justify-center items-center">
              <p> Get the App </p>
            </div>

            {/* call the applestore image */}
            <div className="h-[50%] flex justify-center gap-3">
              <div className="h-[100%]">
                <img className="h-[100%] w-[100%]" src={applestore}></img>
              </div>

              {/* call the googleplaystore image */}
              <div className="h-[100%]">
                <img className="h-[100%] w-[100%]" src={googleplay}></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* call the footer part */}
      <Footer className="border-[1px] border-[green]"></Footer>
    </div>
  );
}

export default SignIn;
