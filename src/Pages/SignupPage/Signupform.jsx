import React from "react";
import { Formik, Form, Field } from "formik";

// signup page form
function Signupform() {
    return(
            <Formik>
                <Form className="flex flex-col w-[70%]">
                    <Field 
                        name="mobile" 
                        placeholder="Mobile number or email address" 
                        className="border-[1px] rounded my-[5px] p-[10px] outline-none"
                    ></Field>
                    <Field 
                        name="fullname" 
                        placeholder="Full Name" 
                        className="border-[1px] rounded my-[5px] p-[10px] outline-none"
                    ></Field>
                    <Field 
                        name="username" 
                        placeholder="Username" 
                        className="border-[1px] rounded my-[5px] p-[10px] outline-none"
                    ></Field>
                    <Field 
                        name="password" 
                        placeholder="Password" 
                        className="border-[1px] rounded my-[5px] p-[10px] outline-none"
                    ></Field>
                    <div className="text-[12px] my-[10px]">
                        <p>
                            People who use our service may have uploaded your contact information to Instagram. <span className="text-[#6A8AA9]"> Learn more </span>
                        </p>
                    </div>
                    <div className="text-[12px] my-[10px]">
                        <p>
                            By signing up, you agree to our Terms, Privacy Policy and Cookies
                        </p>
                    </div>
                    <button className="my-[10px] rounded bg-[#0095F6] p-[10px]">
                         Signup 
                    </button>
                </Form>
            </Formik>
    );
}

export default Signupform;