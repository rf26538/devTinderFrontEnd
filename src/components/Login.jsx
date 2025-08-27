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
  // const [photoUrl, setPhotoUrl] = useState("");
  // const [age, setAge] = useState("");
  // const [about, setAbout] = useState("");
  // const [gender, setGender] = useState("");
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
        // age,
        // gender,
        // about,
        // photoUrl,
        emailId,
        password
      }, { withCredentials: true})

      dispatch(addUser(res.data));
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
                  {/* <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo Url</legend>
                    <input 
                        type="text" 
                        value={photoUrl} 
                        className="input"
                        placeholder="Enter your photo url"
                        onChange={(e) => setPhotoUrl(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                      <legend className="fieldset-legend">Age</legend>
                      <input 
                          type="text" 
                          value={age} 
                          className="input"
                          placeholder="Enter your age"
                          onChange={(e) => setAge(e.target.value)}
                      />
                  </fieldset> 
                  <fieldset className="fieldset">
                      <legend className="fieldset-legend">Gender</legend>
                      <div className="flex space-x-6">
                          <label className="flex items-center space-x-2">
                          <input 
                              type="radio" 
                              name="radio-6"
                              value="male"
                              className="radio radio-accent"
                              checked={gender === 'male'}
                              onChange={() => setGender('male')}  
                          />
                          <span>Male</span>
                          </label>

                          <label className="flex items-center space-x-2">
                          <input 
                              type="radio" 
                              name="radio-6"
                              value="female"
                              className="radio radio-accent"
                              checked={gender === 'female'}
                              onChange={() => setGender('female')}  
                          />
                          <span>Female</span>
                          </label>

                          <label className="flex items-center space-x-2">
                          <input 
                              type="radio" 
                              name="radio-6"
                              value="other"
                              className="radio radio-accent"
                              checked={gender === 'other'}
                              onChange={() => setGender('other')}  
                          />
                          <span>Other</span>
                          </label>
                      </div>
                  </fieldset>
                  <fieldset className="fieldset">
                      <legend className="fieldset-legend">About</legend>
                      <input 
                          type="text" 
                          value={about}
                          className="input"
                          placeholder="Type here"
                          onChange={(e) => setAbout(e.target.value)}
                      />
                  </fieldset>  */}
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
