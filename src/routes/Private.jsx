import React from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";

const Private = () => {
const {isAuthenticated} = useSelector(s => s.user);
  return <>{isAuthenticated? <Outlet /> : <Spinner />}</>;
};

export default Private;