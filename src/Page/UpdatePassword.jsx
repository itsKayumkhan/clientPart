import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { clearErrors, updatePassword } from "../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../constants/userConstants";
const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { error, isUpdated, loading } = useSelector((state) => state.profile);
  
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const updatePasswordSubmit = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("oldPassword", oldPassword);
      myForm.set("newPassword", newPassword);
      myForm.set("confirmPassword", confirmPassword);
  
      dispatch(updatePassword(myForm));
    };
  
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
  
      if (isUpdated) {
        alert.success("Profile Updated Successfully");
  
        navigate("/profile");
  
        dispatch({
          type: UPDATE_PASSWORD_RESET,
        });
      }
    }, [dispatch, error, alert, history, isUpdated]);
  return (
    <>
      <div className="w-full flex items-center justify-center h-[80vh] ">
        <div className="main bg-slate-500 lg:w-1/2 rounded p-4 flex flex-col justify-end items-end">
        
          <div className="flex w-full">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="password"
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg mt-5 border-2 border-gray-200 outline-none focus:border-slate-600"
              placeholder="Old password"
              name="name"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="flex w-full mt-5">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="password"
              value={newPassword}
              placeholder="New Password"
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 resize-none  border-gray-200 outline-none focus:border-slate-600"
              
            />
          </div>
          <div className="flex w-full mt-5">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <i className="mdi mdi-account-outline text-gray-400 text-lg" />
            </div>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"

              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 resize-none  border-gray-200 outline-none focus:border-slate-600"
              
            />
          </div>
          <div
            onClick={updatePasswordSubmit}
            className="btn text-white bg-slate-700 flex items-center justify-center w-40 rounded mt-3 p-3 cursor-pointer"
          >
            Update Password
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword