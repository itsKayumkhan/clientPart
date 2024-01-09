import React, { useContext, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import {z} from 'zod'

const Contact = () => {
  const { user } = useSelector(s => s.user);
  const { shippingInfo } = useSelector(s => s.cart);

  const initialFormData = {
    name: user?.name || '',
    email: user?.email || '',
    phoneNo: shippingInfo?.phoneNo || '',
    message: '',
    address: `${shippingInfo?.address || ''},${shippingInfo?.city || ''},${shippingInfo?.state || ''},${shippingInfo?.pinCode || ''}`,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    phoneNo: z.string().refine(value => value.length === 10, { message: "Phone number must be 10 digits." }),
    message: z.string(),
    address: z.string(),
  });

  const validateFormData = () => {
    try {
      schema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      setErrors(error.errors.reduce((acc, err) => ({ ...acc, [err.path[0]]: err.message }), {}));
      return false;
    }
  };

  const handleMail = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFormData()) {
      // Perform your form submission logic here
      console.log("Form data is valid:", formData);
    } else {
      console.error("Form data is invalid.");
    }
  };


  const renderInput = (label, name, placeholder) => (
    <div className={`w-2/4 max-w-xs mb-3 xl:mb-0 ${errors[name] ? 'has-error' : ''}`}>
      <div className="flex flex-col">
        <label
          htmlFor={name}
          className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
        >
          {label}
        </label>
        <input
          required
          id={name}
          name={name}
          type="text"
          value={formData[name]}
          onChange={(e) => handleMail(e)}
          className={`text-black border ${errors[name] ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border focus:border-slate-700 font-normal w-64 h-10 flex items-center pl-3 text-sm rounded border`}
          placeholder={placeholder}
          ariaLabel={`enter your ${label.toLowerCase()} input`}
        />
        {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
      </div>
    </div>
  );

  return (
    <>
      <div className="container mx-auto p-2">
        <div className="lg:flex">
          <div className="xl:w-2/5 lg:w-2/5 bg-slate-700 py-3 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
              <h1 className="xl:text-3xl text-2xl pb-2 text-white font-bold">
                Get in touch
              </h1>
              <p className="text-md text-slate-300 pb-4 leading-relaxed font-normal lg:pr-4">
                Got a question about us? Are you interested in partnering with
                us? Have some suggestions or just want to say Hi? Just contact
                us. We are here to asset you.
              </p>
              <div className="flex pb-2 items-center">
                <div aria-label="phone icon" role="img">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg1.svg"
                    alt="phone"
                  />
                </div>
                <p className="pl-4 text-slate-300 text-base">
                  +1 (308) 321 321
                </p>
              </div>
              <div className="flex items-center">
                <div aria-label="email icon" role="img">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg2.svg"
                    alt="email"
                  />
                </div>
                <p className="pl-4 text-slate-300  text-base">
                  Info@alphas.com
                </p>
              </div>
              <p className="text-sm text-white pt-6 tracking-wide w-[70%]">
                545, Street 11, Block F Dean Boulevard, Ohio
              </p>
              <div className="pt-6">
                <a
                  href="/"
                  className="text-white font-bold tracking-wide underline focus:outline-none focus:ring-2 focus:ring-white "
                >
                  View More Details
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-3/5 lg:w-3/5 border h-full py-2 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form
            id="contact"
            className="bg-white py-2 px-8 rounded-tr rounded-br"
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl text-slate-600 py-2 font-extrabold">
              Enter Details
            </h1>
            <div className="my-3 block xl:flex w-full flex-wrap">
              {renderInput("Full Name", "name", "Full Name")}
              {renderInput("Email", "email", "example@email.com")}
              {renderInput("Phone", "phoneNo", "+92-12-3456789")}
              {renderInput("Address", "address", "+92-12-3456789")}
            </div>
            {/* ... your existing JSX code ... */}
            <button
              type="submit"
              className="focus:outline-none bg-slate-700 transition duration-150 ease-in-out hover:bg-slate-600 rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-slate-700"
            >
              Submit
            </button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

