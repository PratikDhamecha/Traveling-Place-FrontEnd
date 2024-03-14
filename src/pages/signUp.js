import { Checkbox, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import {Link, useNavigate}from "react-router-dom";
import api_url from "../api";
function SignUp() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(api_url+"/user", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="bg-cover bg-[url('../src/Images/background.jpg')]  bg-center h-screen">
        <div className="flex items-center bg-opacity-65 bg-center h-screen  bg-black  w-screen justify-center">
          <div className="form-wrapper p-8  max-w-lg">
            <h2 variant="h4" className="text-red-500 text-lg">
              Sign Up TO Escaping-Routine
            </h2>
            <div className="mt-1 font-normal text-white mb-4">
              Nice to meet you! Enter your details to register.
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <input
                  type="text"
                  required
                  className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                  placeholder="First Name"
                  id="firstName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="text"
                  required
                  className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                  placeholder="Last Name"
                  id="lastName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="text"
                  required
                  className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                  placeholder="UserName"
                  id="userName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="text"
                  required
                  className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                  placeholder="Email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="int"
                  required
                  className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                  placeholder="Mobile"
                  id="mobile"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="text"
                  required
                  className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
              >
                Sign Up
              </button>
              <div color="gray" className="mt-4 text-white text-center font-normal">
                Already have an account?{" "}
                <Link to="/">
                <button href="#" className="font-medium hover:text-white text-red-600">
                  Sign In
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
