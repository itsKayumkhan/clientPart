import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, forgotPassword } from "./../actions/userAction";
import toast from "react-hot-toast";
import Spinner from "./../components/Spinner";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, alert, message]);

  return (
    <>
      {loading ? (
        <Spinner text={false} />
      ) : (
        <div className="mx-2 lg:mx-0 max-w-screen-xl sm:rounded-lg flex justify-center flex-1 h-screen my-4">
          <div className="lg:w-1/2 xl:w-5/12 mb-4 h-full">
            <div className=" flex flex-col items-center">
              <h1 className="text-3xl xl:text-5xl font-extrabold">Login</h1>
              <div className="w-full flex-1 mt-8">
                <form onSubmit={(e) => forgotPasswordSubmit(e)}>
                  <div className="mx-auto max-w-xs">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-800 focus:bg-white"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                      type="submit"
                      className="mt-2 tracking-wide font-semibold bg-primary text-gray-100 w-full py-3 rounded-lg hover:bg-slate-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Submit</span>
                    </button>
                  </div>
                </form>

                <div className="my-3 border-b text-center">
                  <div>
                    <div className="leading-none px-2 inline-block text-xs font-light text-gray-600 tracking-wide transform translate-y-1/2 ">
                      Do haven't any account ? don't worry
                      <Link
                        to="/register"
                        className="text-blue font-bold ps-2 text-center  "
                      >
                        Sign Up now
                      </Link>
                    </div>
                    <div className="leading-none px-2 inline-block text-xs text-gray-600 tracking-wide font-medium transform translate-y-1/2 ">
                      Or sign up with e-mail
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-1 bg-indigo-100 text-center  lg:flex">
            <div
              className="m-12 xl:m-16 bg-contain bg-center bg-no-repeat w-full h-full"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
