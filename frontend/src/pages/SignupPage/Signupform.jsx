import React from 'react';
import { Formik, Form, Field } from 'formik';

function Signupform() {
  return (
    <Formik>
      {/* create form of the signup */}
      <Form className="flex flex-col w-[70%]">
        {/* can insert email or phone number */}
        <Field
          name="mobile"
          placeholder="Mobile number or email address"
          className="border-[1px] rounded my-[5px] p-[10px] outline-none"
        ></Field>

        {/* can insert full name here */}
        <Field
          name="fullname"
          placeholder="Full Name"
          className="border-[1px] rounded my-[5px] p-[10px] outline-none"
        ></Field>

        {/* can insert username  */}
        <Field
          name="username"
          placeholder="Username"
          className="border-[1px] rounded my-[5px] p-[10px] outline-none"
        ></Field>

        {/* can insert password */}
        <Field
          name="password"
          placeholder="Password"
          className="border-[1px] rounded my-[5px] p-[10px] outline-none"
        ></Field>

        {/* information about the platform */}
        <div className="text-[12px] my-[10px]">
          <p>
            People who use our service may have uploaded your contact
            information to Instagram.{' '}
            <span className="text-[#6A8AA9]"> Learn more </span>
          </p>
        </div>

        {/* terms and conditions */}
        <div className="text-[12px] my-[10px]">
          <p>
            By signing up, you agree to our Terms, Privacy Policy and Cookies
          </p>
        </div>

        {/* create signup button */}
        <button className="my-[10px] rounded bg-[#0095F6] p-[10px]">
          Signup
        </button>
      </Form>
    </Formik>
  );
}

export default Signupform;
