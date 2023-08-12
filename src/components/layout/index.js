import {Outlet,useLocation,useNavigate} from 'react-router-dom';   //outlet for rendering child routes, 
import React,{useEffect} from 'react'                              //useLocation for getting pathlocation,usenavigate to navigate programmtically
import {LOGIN} from "../../lib/routes";
import {useAuth} from "../../hooks/auth";
import Navbar from "../navbar/index";

const Layout = () => {

    const {pathname}=useLocation();
    const navigate=useNavigate();

    const {user,isLoading}=useAuth();


    useEffect(()=>{
      if(!isLoading && pathname.startsWith('/protected') && !user) {
        navigate(LOGIN);
      }
    },[pathname]);

    if (isLoading) return "Loading auth user...";


  return (
    <div>
      <Navbar/>
      <Outlet/>
      </div>
  )
}

export default Layout