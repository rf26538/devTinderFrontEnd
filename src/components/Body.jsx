import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "./NavBar";
import Footer from './Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice"
import { useNavigate } from 'react-router-dom';
import { getTokenFromCookie } from "../utils/helper";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getTokenFromCookie();
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if(!token) {
          navigate("/login");
          return;
        }
  
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true
        });
  
        dispatch(addUser(res.data))
      } catch (err) {
        console.error("❌ Error fetching user:", err);
      }
    } 

    if(token) {
      fetchUser();
    }

  },[token]);
  
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer />
    </>
  )
}

export default Body
