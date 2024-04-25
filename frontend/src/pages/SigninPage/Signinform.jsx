import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useLogin } from '../../hooks/authHooks';


function Signinform() {

  const {
    mutate: loginData,
  } = useLogin();


  const handleSubmit = (values) => {
    loginData(values)
  }

  return (
    <Formik initialValues={{ usernameOrEmail: '', password: '' }} onSubmit={handleSubmit}>
      {({ handleChange, values }) => (
        <Form className="flex flex-col w-[70%] gap-[1em] ">
          <Field
            className="h-[30%] border-[1px] rounded p-[10px] outline-none"
            name="usernameOrEmail"
            placeholder="Username"
            value={values.usernameOrEmail}
            onChange={handleChange}
            required
          />

          <Field
            className="h-[30%] border-[1px] rounded p-[10px] outline-none"
            name="password"
            placeholder="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="h-[20%] rounded bg-[#4CB5F9] text-[white] mb-[10px]">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Signinform;
