import {Outlet,useLocation,useNavigate} from 'react-router-dom';   //outlet for rendering child routes, 
import React,{useEffect} from 'react'                              //useLocation for getting pathlocation,usenavigate to navigate programmtically
import {LOGIN} from "../../lib/routes";
import {useAuth} from "../../hooks/auth";

const Layout = () => {

    const {pathname}=useLocation();
    const navigate=useNavigate();

    const {user,isLoading}=useAuth();


    useEffect(()=>{
      if(pathname.startsWith('/protected') && !user) {
        navigate(LOGIN);
      }
    },[pathname]);

    if (isLoading) return "Loading auth user...";


  return (
    <div>This is the string: <Outlet/></div>
  )
}

export default Layout