import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { USER_IMG_URL } from "../../constance";

const Profile = () => {
  const { user, loading } = useSelector((s) => s.user);
  const { cartItems } = useSelector((s) => s.cart);
  const { orders } = useSelector((s) => s.myOrders);
  return (
    <>
      {loading ? (
        <Spinner text={false} />
      ) : (
        <div className="max-w-4xl flex  items-center flex-wrap m-auto lg:my-10">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${user?.avatar?.url || USER_IMG_URL })`,
                }}
              />
              <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user?.name}</h1>
              <h3 className="text-xl font-semibold  pt-8 lg:pt-0">{user?.email}</h3>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-600 opacity-25" />
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <i className="fa-solid fa-user pe-3"></i> Order : {orders?.length}
              </p>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <i className="fa-regular fa-images pe-3"></i> Cart Item : {cartItems?.length}
              </p><p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <i className="fa-regular fa-images pe-3"></i> Join On : {new Date(user?.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center justify-between w-full mb-10 px-12">
            <Link to="/profile/update" className="flex items-center justify-center px-3  py-2 font-bold text-md text-white bg-slate-900  rounded-md">Update Profile</Link>
            <Link to='/profile/password' className="flex items-center justify-center px-3  py-2 font-bold text-md text-white bg-slate-900  rounded-md">Reset Password</Link>
            </div>
          </div>
          <div className="w-full lg:w-[36%]">
            <img
              src={user?.avatar?.url || USER_IMG_URL}
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
