import React, { useState } from "react";

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-[350px] p-6 rounded-2xl shadow-lg">
        {/* Tab buttons */}
        <div className="flex justify-around mb-6">
          <button
            className={`w-1/2 py-2 font-semibold rounded-l-2xl ${
              activeTab === "login"
                ? "bg-amber-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 font-semibold rounded-r-2xl ${
              activeTab === "signup"
                ? "bg-amber-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Signup
          </button>
        </div>

        {/* Form Section */}
        {activeTab === "login" ? (
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700"
            >
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
