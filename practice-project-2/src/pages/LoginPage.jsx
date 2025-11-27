import React, { useState } from "react";

const LoginPage = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)

    setEmail("");
    setPassword("");
  };
  return (
    <div className=" flex justify-center text-white items-center h-screen">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="py-16 px-20 flex flex-col items-center gap-5 border-2 border-blue-500 rounded-xl"
      >
        <h3 className="text-3xl mb-5">Login Form</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
          autoComplete="username"
          required
          className=" border-2 border-gray-500 rounded-xl outline-none text-white placeholder:text-gray-600 px-5 py-3 "
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter password"
          autoComplete="current-password"
          required
          className="border-2 border-gray-500 rounded-xl outline-none text-white placeholder:text-gray-600 px-5 py-3"
        />
        <button className="bg-blue-500 py-2 px-4 text-lg rounded-xl w-fit mt-4 cursor-pointer">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
