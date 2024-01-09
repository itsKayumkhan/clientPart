import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Spinner from './../components/Spinner';

const Order = () => {
  const { user } = useSelector(s => s.user)
  // const { cartItems } = useSelector(s => s.cart)
  const { orders, loading } = useSelector(s => s.myOrders);
  return (
    <>
      {
        loading ? <Spinner text={false} />
          : <div>

            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full max-w-full px-3 mb-6  mx-auto">
                <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                  <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                    {/* card header */}
                    <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                      <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                        <span className="mr-3 font-semibold text-dark">
                          {user?.name}'s Orders
                        </span>

                      </h3>

                    </div>
                    {/* end card header */}
                    {/* card body  */}
                    <div className="flex-auto block py-8 pt-6 px-9">
                      <div className="overflow-x-auto">
                        <table className="w-full my-0 align-middle text-dark border-neutral-200 md:shrink-1 ">
                          <thead className="align-bottom">
                            <tr className="font-semibold text-[0.95rem] text-secondary-dark w-auto">
                              <th className="pb-3 text-start w-[120px] uppercase">
                               S No.
                              </th>
                              <th className="pb-3 text-start w-[175px] uppercase">
                                Product Name
                              </th>
                              <th className=" pb-3 pr-0 text-left w-[90px] uppercase ">
                                Date
                              </th>
                              <th className=" pb-3 pr-12 text-center w-[175px] uppercase">
                                Time
                              </th>
                              <th className=" pb-3 pr-10 text-center w-[90px] pl-10  uppercase">
                                Payment
                              </th>
                              <th className="pb-3 text-center w-[100px] uppercase">
                                DETAILS
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              orders?.map((item,i )=> (
                                <tr className="border-b border-dashed last:border-b-0">
                                  <td className="p-3 pr-0 text-start truncate  hover:scale-105 duration-300
                                hover:shadow-lg">
                                   {i+1}.
                                  </td>
                                  <td className="p-3 pr-0 text-start truncate  hover:scale-105 duration-300
                                hover:shadow-lg">
                                    {item.orderItems.map(order => <span className="font-semibold text-light-inverse text-md/normal truncate" key={order._id}>{order.name} / </span>)
                                    }

                                  </td>
                                  <td className=" p-3 pl-0  hover:scale-105 duration-300
                                hover:shadow-lg">
                                    <div className="flex items-center">
                                      <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                       {new Date(item.createdAt).toLocaleDateString()}
                                      </div>
                                    </div>
                                  </td>


                                  <td className=" p-3 pr-12 text-center hover:scale-105 duration-300
                                hover:shadow-lg">
                                    <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">

                                    {new Date(item.createdAt).toLocaleTimeString()}

                                    </span>
                                  </td>
                                  <td className="pr-0 text-center hover:scale-105 duration-300
                                hover:shadow-lg">
                                    <span className="font-semibold text-light-inverse text-md/normal">
                                      Credit Card
                                    </span>
                                  </td>
                                  <td className="p-3 text-center pr-20 hover:pr-18 hover:scale-105 duration-300
                                hover:shadow-lg">
                                    <Link to={`/order/${item._id}`} className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">

{/* {check thi line never use  padding on hover give it defult width and hight and on hover change the bg } */}

                                      <span className="flex w-10 h-10 items-center justify-center  leading-none shrink-0 hover:bg-slate-700 hover:rounded-2xl hover:text-white">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="w-4 h-4"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                          />
                                        </svg>
                                      </span>
                                    </Link>
                                  </td>
                                </tr>
                              ))
                            }

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>}
    </>
  );
};

export default Order;
