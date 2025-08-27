import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants"

const Login = () => {
  
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL+"/login", {
        emailId,
        password
      }, { withCredentials: true})

      dispatch(addUser(res.data));
      navigate("/")
    } catch (err) { 
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  }

  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL+"/signup", {
        firstName,
        lastName,
        emailId,
        password
      }, { withCredentials: true})

      dispatch(addUser(res?.data?.data));
      navigate("/profile")
    } catch (err) { 
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  }

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{isLoginForm ? "LogIn now!" : "SignUp now!"}</h1>
          <p className="py-6 font-mono">
            Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <p className="text-red-500 text-center mb-2">{error}</p>
            <fieldset className="fieldset">
              {
                !isLoginForm && (
                  <>
                    <label className="label">First Name</label>
                    <input 
                      type="text"
                      value={firstName} 
                      className="input" 
                      placeholder="Enter your first name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label className="label">Last Name</label>
                    <input 
                        type="text"
                        value={lastName} 
                        className="input" 
                        placeholder="Enter your last name"
                        onChange={(e) => setLastName(e.target.value)}
                    
                      />
                  </>
                )
              }
              <label className="label">Email</label>
              <input 
                  type="text"
                  value={emailId} 
                  className="input" 
                  placeholder="Enter your email"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              <label className="label">Password</label>
              <input 
                type="text" 
                value={password} 
                className="input"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4" onClick={isLoginForm ? handleLogin : handleSignUp}>{isLoginForm ? "LogIn" : "SignUp"}</button>
              <p className="cursor-pointer underline text-center" onClick={() => setIsLoginForm(value => !value)}>
                {isLoginForm 
                  ? "New User? Signup Here"
                  : "Existing User? Login Here"}
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
