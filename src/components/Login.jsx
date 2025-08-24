import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants"

const Login = () => {
  
  const [emailId, setEmailId] = useState("khan@gmail.com");
  const [password, setPassword] = useState("Khan@0707");
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
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center my-50">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">LogIn</h2>
          <div className="my-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input 
                type="text"
                value={emailId} 
                className="input" 
                placeholder="Type here"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input 
                type="text" 
                value={password} 
                className="input"
                placeholder="Type here"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset> 
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>LogIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
