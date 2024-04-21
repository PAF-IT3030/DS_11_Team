import React from 'react';
import { Formik, Form, Field } from 'formik';

function Signinform() {
  return (
    <Formik className="flex justify-center">

      {/* create form of the login page  */}
      <Form className="flex flex-col w-[70%] gap-[1em] ">

        {/* can insert username */}
        <Field
          className="h-[30%] border-[1px] rounded p-[10px] outline-none"
          name="username"
          placeholder="Phonenumber,username or emailaddress"
        ></Field>

        {/* can insert password */}
        <Field
          className="h-[30%] border-[1px] rounded p-[10px] outline-none"
          name="password"
          placeholder="password"
        ></Field>

        {/* create login button  */}
        <button className="h-[20%] rounded bg-[#4CB5F9] text-[white] mb-[10px]">
          Login
        </button>

      </Form>
      
    </Formik>
  );
}

export default Signinform;
