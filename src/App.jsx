//TODO make responsive all components and pages

import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/userAction";
import CursorAni from "./components/CursorAni";
import Spinner from "./components/Spinner";
import { Toaster } from "react-hot-toast";
// import Payment from "./Page/Payment";
import OrderConfirm from "./Page/OrderConfirm";
import Home from "./Page/Home"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { myOrders } from "./actions/orderAction";
import OrderDetails from './Page/OrderDetails';

const CardDetails = lazy(() => import("./Page/CardDetails"));
const Login = lazy(() => import("./Page/Login"));
const SignUp = lazy(() => import("./Page/SignUp"));
const Contact = lazy(() => import("./Page/Contact"));
const Cart = lazy(() => import("./Page/Cart"));
const Error = lazy(() => import("./Page/Error"));
const Private = lazy(() => import("./routes/Private"));
const ProductView = lazy(() => import("./Page/ProductView"));
const Profile = lazy(() => import("./Page/Profile"));
const UpdateProfile = lazy(() => import("./Page/UpdateProfile"));
const UpdatePassword = lazy(() => import("./Page/UpdatePassword"));
const ForgotPassword = lazy(() => import("./Page/ForgotPassword"));
const Shipping = lazy(() => import("./Page/Shipping"));
const ConfirmOrder = lazy(() => import("./Page/ConfirmOrder"));
const Order = lazy(() => import("./Page/Order"));



const App = () => {



  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector(s => s.user)

  useEffect(() => {
    dispatch(loadUser());
    dispatch(myOrders());
  }, [dispatch, isAuthenticate]);
  return (
    <>

      <BrowserRouter>
        <Suspense fallback={<Spinner text={false} />}>
          <Navbar />
          <CursorAni />
          {/* <BrowserRouter> */}
          <Toaster />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<CardDetails />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/forgot" element={<ForgotPassword />} />

            <Route path="/profile" element={<Private />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/update" element={<UpdateProfile />} />
              <Route path="/profile/password" element={<UpdatePassword />} />
            </Route>

            <Route path="/contact" element={<Private />}>
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/orders" element={<Private />}>
              <Route path="/orders" element={<Order />} />
            </Route>
            <Route path="/confirm/order" element={<Private />}>
              <Route path="/confirm/order" element={<ConfirmOrder />} />
            </Route>
            {/* <Route path="/process/payment" element={<Private />}>
              <Route path="/process/payment" element={<Payment />} />
            </Route> */}
            <Route path="/order/:id" element={<Private />}>
              <Route path="/order/:id" element={<OrderDetails />} />
            </Route>

            <Route path="/cart" element={<Private />}>
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/shipping" element={<Private />}>
              <Route path="/shipping" element={<Shipping />} />
            </Route>
            <Route path="/success" element={<Private />}>
              <Route path="/success" element={<OrderConfirm confirm={true} />} />
            </Route>
            <Route path="/failed" element={<Private />}>
              <Route path="/failed" element={<OrderConfirm confirm={false} />} />
            </Route>

            <Route path="/products" element={<ProductView />} />

            <Route
              path="*"
              element={<Error />}
            />
          </Routes>

          {/* </BrowserRouter> */}
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
