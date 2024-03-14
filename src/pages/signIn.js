import { Link, Navigate } from "react-router-dom";
import api_url from "../api";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function SignIn() {
  const Navigate = useNavigate();
  const [data,setData] = useState({ username: "", password: ""});
  return (
    <>
      <div className="bg-cover bg-[url('../src/Images/background.jpg')]  bg-center h-screen">
        <div className="flex items-center bg-opacity-65 bg-center h-screen  bg-black  w-screen justify-center">
          <div className="form-wrapper p-8 max-w-lg">
            <h2 className="text-white text-3xl text-center mb-4">Sign In</h2>
            <form action="#">
              <div className="form-control mb-4">
                <input
                  type="text"
                  onChange={(e) => {
                    setData({ ...data, username: e.target.value });
                  }}
                  required
                  className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                  placeholder="Email or UserName"
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="password"
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                  required
                  id="password"
                  className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                  placeholder="Password"
                />
              </div>
              <button
                onClick={async () => {
                  const res = await fetch(api_url + "/login", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  });
                  const resData = await res.json();
                  console.log("loged in",resData);
                  if (resData.success === true) {
                    Navigate("/home")
                  }
                  else {
                    <h1 className="text-3xl font-bold text-theme-dark p-5">Wrong Username or Password</h1>
                  }
                }}
                type="submit"
                className="w-full h-12 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
              >
                Sign In
              </button>
            </form>
            <Link to="/signUp">
              <p className="text-white mt-4">
                New to Traveling?{" "}
                <button href="#" className="text-red-600">
                  Sign up now
                </button>
              </p>
            </Link>
            <small className="text-white block mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <button href="#" className="text-red-600">
                Learn more.
              </button>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

{
  /* <div
className="bg-[src\Images\Travel.jpg]"
style={{
    backgroundImage: url(${require('../Images/Travel.jpg').default}),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}}
>
<nav className="fixed top-0 left-0 px-6 py-4 z-10">
    <button href="#">
        <img
            src={require('../Images/Travel.jpg').default}
            alt="logo"
            className="w-40"
        />
    </button>
</nav>
<div className="flex items-center justify-center min-h-screen">
    <div className="form-wrapper bg-opacity-75 bg-black p-8 rounded-lg max-w-lg">
        <h2 className="text-white text-3xl mb-4">Sign In</h2>
        <form action="#">
            <div className="form-control mb-4">
                <input
                    type="text"
                    required
                    className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                    placeholder="Email or phone number"
                />
            </div>
            <div className="form-control mb-4">
                <input
                    type="password"
                    required
                    className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 outline-none focus:bg-gray-900 focus:placeholder-opacity-50"
                    placeholder="Password"
                />
            </div>
            <button
                type="submit"
                className="w-full h-12 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
            >
                Sign In
            </button>
            <div className="form-help flex justify-between mt-4">
                <div className="remember-me flex items-center">
                    <input
                        type="checkbox"
                        id="remember-me"
                        className="h-4 w-4 mr-1 text-red-600 bg-gray-800 border border-gray-600 rounded focus:ring-0 focus:outline-none"
                    />
                    <label htmlFor="remember-me" className="text-gray-400">
                        Remember me
                    </label>
                </div>
                <button href="#" className="text-gray-400">
                    Need help?
                </button>
            </div>
        </form>
        <p className="text-white mt-4">
            New to Traveling?{" "}
            <button href="#" className="text-red-600">
                Sign up now
            </button>
        </p>
        <small className="text-gray-400 block mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <button href="#" className="text-red-600">
                Learn more.
            </button>
        </small>
    </div>
</div>
</div> */
}
