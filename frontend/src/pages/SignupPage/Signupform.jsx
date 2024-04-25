import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useRegister } from '../../hooks/authHooks';



function Signupform() {
  
const {
  mutate: registerValues,
} = useRegister();

  const handleSubmit = async (values) => {
    registerValues(values);
  };

  return (
    <Formik initialValues={{ email: '', name: '', username: '', password: '' }} onSubmit={handleSubmit}>
      {({ handleChange, values }) => (
        <Form className="flex flex-col w-[70%]">
          <Field
            name="email"
            placeholder="Email address"
            className="border-[1px] rounded my-[5px] p-[10px] outline-none"
            value={values.email}
            onChange={handleChange}
          />

          <Field
            name="name"
            placeholder="Full Name"
            className="border-[1px] rounded my-[5px] p-[10px] outline-none"
            value={values.name}
            onChange={handleChange}
          />

          <Field
            name="username"
            placeholder="Username"
            className="border-[1px] rounded my-[5px] p-[10px] outline-none"
            value={values.username}
            onChange={handleChange}
          />

          <Field
            name="password"
            placeholder="Password"
            className="border-[1px] rounded my-[5px] p-[10px] outline-none"
            type="password"
            value={values.password}
            onChange={handleChange}
          />

          <div className="text-[12px] my-[10px]">
            <p>
              People who use our service may have uploaded your contact information to Instagram.{' '}
              <span className="text-[#6A8AA9]"> Learn more </span>
            </p>
          </div>

          <div className="text-[12px] my-[10px]">
            <p>By signing up, you agree to our Terms, Privacy Policy and Cookies</p>
          </div>

          <button type="submit" className="my-[10px] rounded bg-[#0095F6] p-[10px]">
            Signup
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Signupform;
