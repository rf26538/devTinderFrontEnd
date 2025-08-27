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
    <div className="flex justify-center my-50">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLoginForm ? "LogIn" : "SignUp"}</h2>
          <div className="my-3">
            {
              !isLoginForm && (
                <>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">First Name</legend>
                    <input 
                      type="text"
                      value={firstName} 
                      className="input" 
                      placeholder="Enter your first name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Last Name</legend>
                    <input 
                      type="text"
                      value={lastName} 
                      className="input" 
                      placeholder="Enter your last name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </fieldset>
                </>
              )
            }
            
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input 
                type="text"
                value={emailId} 
                className="input" 
                placeholder="Enter your email Id"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input 
                type="text" 
                value={password} 
                className="input"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset> 
          </div>
          <p className="text-red-500 text-center mb-2">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignUp}>{isLoginForm ? "LogIn" : "SignUp"}</button>
          </div>
          <p className="cursor-pointer underline text-center" onClick={() => setIsLoginForm(value => !value)}>
            {isLoginForm 
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
