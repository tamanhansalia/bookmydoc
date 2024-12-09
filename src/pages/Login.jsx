import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle the login/signup logic here
  };

  return (
    <form className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 text-gray-800">
        <p className="text-center text-xl font-bold text-gray-700">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-center text-gray-500">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an
          appointment
        </p>
        {state === "Sign Up" && (
          <div>
            <p className="text-gray-700">Full Name</p>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}
        <div>
          <p className="text-gray-700">Email</p>
          <input
            type="email"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <p className="text-gray-700">Password</p>
          <input
            type="password"
            className="block w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-hoverPrimary focus:outline-none"
          onClick={onSubmitHandler}
        >
          {state === "Sign Up" ? "Sign Up" : "Log In"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account ?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => {
                setState("Login");
              }}
            >
              {" "}
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an account ?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => {
                setState("Sign Up");
              }}
            >
              {" "}
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
