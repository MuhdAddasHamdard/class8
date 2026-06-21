import React from "react";
import { useRef } from "react";
const Form = () => {
  const name = useRef(null);
  const password = useRef(null);
  const formHandler = (event) => {
    event.preventDefault();
    // console.log(name.current.value);
    // console.log(password.current.value);

    // storing form data into an object
    const data = {
      userName: name.current.value,
      userPassword: password.current.value,
    };
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
        <form
          onSubmit={formHandler}
          className="w-full max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login Form
          </h2>

          <input
            ref={name}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            ref={password}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
