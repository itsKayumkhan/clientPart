import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PROFILE_RESET } from "../constants/userConstants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { clearErrors, loadUser, updateProfile } from "../actions/userAction";
import Spinner from "../components/Spinner";
const UpdateProfile = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile Updated Successfully");
      dispatch(loadUser());

      navigate("/profile");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, user, isUpdated]);
  return (
    <>
     {
      loading?<Spinner text={false}/>: <div className="w-full flex items-center justify-center h-[80vh] ">
      <div className="main bg-slate-500 lg:w-1/2 rounded p-4 flex flex-col justify-end items-end">
        <div className="w-full mt-5">
          <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600">
                Drop your Image , or
                <span className="text-blue-600 underline"> browse</span>
              </span>
            </span>
            <input
              type="file"
              className="hidden"
              name="avatar"
              accept="image/*"
              onChange={updateProfileDataChange}
            ></input>
          </label>
        </div>
        <div className="flex w-full">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg mt-5 border-2 border-gray-200 outline-none focus:border-slate-600"
            placeholder="Title"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex w-full mt-5">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i className="mdi mdi-account-outline text-gray-400 text-lg" />
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 resize-none h-24 border-gray-200 outline-none focus:border-slate-600"
            placeholder="abc@abc.com"
          />
        </div>
        <div
          onClick={updateProfileSubmit}
          className="btn text-white bg-slate-700 flex items-center justify-center w-40 rounded mt-3 p-3 cursor-pointer"
        >
          Update Profile
        </div>
      </div>
    </div>
     }
    </>
  );
};

export default UpdateProfile;
