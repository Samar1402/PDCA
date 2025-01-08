import React, { useState } from "react";
import Cricketer from "../images/cricketer.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Account created successfully!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 space-y-6 bg-blue-900 rounded-lg shadow-lg">
        <h2 className="flex items-center justify-center text-2xl sm:text-3xl font-bold text-white">
          Sign Up
          <img
            src={Cricketer}
            alt="logo"
            className="h-14 sm:h-16 pb-2 ml-2 animate-bounce"
          />
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm sm:text-base font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base font-medium text-white">
              Contact No
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md transform transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm sm:text-base text-center text-white">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
